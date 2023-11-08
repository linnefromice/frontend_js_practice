import { useContext } from "react";
import { ActionContext } from ".";
import { calculateOrientation, getPlayer, loadUnit } from "./logics";
import { UnitIcon } from "./components";
import { Coordinate } from "../../types";
import { PLAYERS } from "../../constants";

const isWithinRange = (src: Coordinate, dst: Coordinate, range: number): boolean => {
  const diffX = Math.abs(src.x - dst.x);
  const diffY = Math.abs(src.y - dst.y);
  return diffX + diffY <= range;
}

const CellWithUnit = ({ unitId, key, onClick }: { unitId: number, key: string, onClick: () => void }) => {
  const { state: { units, actionMenu } } = useContext(ActionContext);
  const { spec, status, playerId } = loadUnit(unitId, units);
  const { rgb } = getPlayer(playerId, PLAYERS)

  const orientation = calculateOrientation(
    status.coordinate,
    status.previousCoordinate
  );

  const cellClassName = actionMenu.targetUnitId === unitId
    ? "cell cell-active-unit"
    : "cell cell-unit";
  const bgColor = actionMenu.targetUnitId === unitId
    ? `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.375)`
    : `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.125)`;

  let cellContentClassForOrientation = "";
  if (orientation === "RIGHT") cellContentClassForOrientation = "rotate-90";
  if (orientation === "DOWN") cellContentClassForOrientation = "rotate-180";
  if (orientation === "LEFT") cellContentClassForOrientation = "rotate-270";

  return (
    <div
      key={key}
      className={cellClassName}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <div className="cell-content">
        <UnitIcon
          unitType={spec.unit_type}
          className={cellContentClassForOrientation}
        />
        <div className="cell-unit-status-md">{status.hp}</div>
        <div className="cell-unit-status-sm">{`/ ${spec.max_hp}`}</div>
      </div>
    </div>
  )
}

export const Cell = ({ x, y, unitId }: { x: number, y: number, unitId?: number }) => {
  const { state: { units, actionMenu }, dispatch } = useContext(ActionContext);
  const key = `cell.x${x}y${y}`

  if (actionMenu.targetUnitId) {
    if (actionMenu.targetUnitId === unitId) {
      return <CellWithUnit
        unitId={unitId}
        key={key}
        onClick={() => dispatch({
          type: "OPEN_MENU",
          payload: { id: unitId }
        })}
      /> // TODO: consider background by action
    }

    const { spec, status } = loadUnit(actionMenu.targetUnitId, units);

    if (actionMenu.activeActionOption === "MOVE") {
      if (isWithinRange(status.coordinate, { x, y }, spec.movement_range)) {
        return unitId
          ? <CellWithUnit
              unitId={unitId}
              key={key}
              onClick={() => null}
            />
          : <div
              key={key}
              className="cell cell-move-range"
              onClick={
                () => dispatch({
                  type: "DO_MOVE",
                  payload: {
                    id: spec.id,
                    x,
                    y,
                  }
                })
              }
            /> // TODO: separate to component (logic remains the same.)
      }
    }
    if (actionMenu.activeActionOption === "ATTACK") {
      const attack_range = spec.armaments[0].range; // temp
      if (isWithinRange(status.coordinate, { x, y }, attack_range)) {
        return unitId
          ? <CellWithUnit
              unitId={unitId}
              key={key}
              onClick={() => dispatch({
                type: "DO_ATTACK",
                payload: { id: unitId }
              })}
            />
          : <div
              key={key}
              className="cell cell-attack-range"
              onClick={() => dispatch({ type: "CLOSE_MENU" })}
            /> // TODO: not to attack
      }
    }
  }

  if (unitId) {
    return <CellWithUnit
      unitId={unitId}
      key={key}
      onClick={() => dispatch({
        type: "OPEN_MENU",
        payload: { id: unitId }
      })}
    />
  }

  return (
    <div
      key={key}
      className="cell"
    />
  );
}