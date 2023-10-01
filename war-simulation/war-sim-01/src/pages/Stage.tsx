import { Reducer, createContext, useContext, useReducer } from "react";
import FighterJetIcon from "../assets/fighterJet.svg?react";
import ArmyTankIcon from "../assets/armyTank.svg?react";
import BattleSoldierIcon from "../assets/battleSoldier.svg?react";
import "./Stage.scss"
import { ActionType, OrientationType, PayloadType, StateType, UnitType } from "../types";

const ROW_NUM = 9
const CELL_NUM_IN_ROW = 12

const initialState: StateType = {
  actionMenu: {
    isOpen: false,
    targetUnitId: null,
    activeActionOption: null,
  },
  units: [
    {
      spec: {
        id: 1,
        name: "VF-25F",
        unit_type: 1,
        movement_range: 3,
        attack_range: 2,
      },
      status: {
        coordinate: { x: 5, y: 2 },
        previousCoordinate: { x: 5, y: 2 },
        initialCoordinate: { x: 5, y: 2 },
      }
    },
    {
      spec: {
        id: 2,
        name: "VF-25G",
        unit_type: 1,
        movement_range: 2,
        attack_range: 5,
      },
      status: {
        coordinate: { x: 7, y: 2 },
        previousCoordinate: { x: 7, y: 2 },
        initialCoordinate: { x: 7, y: 2 },
      }
    },
    {
      spec: {
        id: 3,
        name: "VF-25S",
        unit_type: 1,
        movement_range: 4,
        attack_range: 4,
      },
      status: {
        coordinate: { x: 6, y: 1 },
        previousCoordinate: { x: 6, y: 1 },
        initialCoordinate: { x: 6, y: 1 },
      }
    },
    {
      spec: {
        id: 4,
        name: "TANK-1",
        unit_type: 2,
        movement_range: 2,
        attack_range: 2,
      },
      status: {
        coordinate: { x: 4, y: 4 },
        previousCoordinate: { x: 4, y: 4 },
        initialCoordinate: { x: 4, y: 4 },
      }
    },
    {
      spec: {
        id: 5,
        name: "TANK-2",
        unit_type: 2,
        movement_range: 2,
        attack_range: 2,
      },
      status: {
        coordinate: { x: 8, y: 4 },
        previousCoordinate: { x: 8, y: 4 },
        initialCoordinate: { x: 8, y: 4 },
      }
    },
    {
      spec: {
        id: 6,
        name: "SOLDIER-1",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
      },
      status: {
        coordinate: { x: 3, y: 5 },
        previousCoordinate: { x: 3, y: 5 },
        initialCoordinate: { x: 3, y: 5 },
      }
    },
    {
      spec: {
        id: 7,
        name: "SOLDIER-2",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
      },
      status: {
        coordinate: { x: 5, y: 5 },
        previousCoordinate: { x: 5, y: 5 },
        initialCoordinate: { x: 5, y: 5 },
      }
    },
    {
      spec: {
        id: 8,
        name: "SOLDIER-3",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
      },
      status: {
        coordinate: { x: 7, y: 5 },
        previousCoordinate: { x: 7, y: 5 },
        initialCoordinate: { x: 7, y: 5 },
      }
    },
    {
      spec: {
        id: 9,
        name: "SOLDIER-4",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
      },
      status: {
        coordinate: { x: 9, y: 5 },
        previousCoordinate: { x: 9, y: 5 },
        initialCoordinate: { x: 9, y: 5 },
      }
    },
  ]
}

const calculateOrientation = (
  current: { x: number, y: number },
  previous: { x: number, y: number }
): OrientationType => {
  const diffX = current.x - previous.x;
  const diffY = current.y - previous.y;
  if (Math.abs(diffY) >= Math.abs(diffX)) {
    return diffY > 0 ? "DOWN" : "UP";
  } else {
    return diffX > 0 ? "RIGHT" : "LEFT";
  }
}

const loadUnit = (
  id: number,
  units: UnitType[]
): UnitType => {
  const filtered = units.filter((unit) => unit.spec.id === id);
  if (filtered.length === 0) throw new Error(`Unit not found: ${id}`);
  if (filtered.length > 1) throw new Error(`Duplicate unit: ${id}`);
  return filtered[0];
}

const updateUnit = (
  updatedUnit: UnitType,
  previousUnits: UnitType[]
): UnitType[] => {
  const newUnits = previousUnits.map((previous) => {
    if (previous.spec.id === updatedUnit.spec.id) {
      return updatedUnit;
    } else {
      return previous;
    }
  });

  return newUnits;
}

const reducer: Reducer<
  StateType,
  {
    type: ActionType,
    payload?: PayloadType
  }
> = (state, action) => {
  const { type, payload } = action

  if (type == "CLOSE_MENU") {
    return {
      ...state,
      actionMenu: {
        isOpen: false,
        targetUnitId: null,
        activeActionOption: null,  
      }
    }
  }

  if (payload?.id === undefined) return state;
  if (type == "OPEN_MENU") {
    return {
      ...state,
      actionMenu: {
        isOpen: true,
        targetUnitId: payload.id,
        activeActionOption: null,  
      }
    }
  }

  const unit = loadUnit(payload.id, state.units);

  switch (type) {
    case "SELECT_MOVE":
      return {
        ...state,
        actionMenu: {
          isOpen: true,
          targetUnitId: payload.id,
          activeActionOption: "MOVE",
        }
      }
    case "DO_MOVE": {
      if (payload.x === undefined || payload.y === undefined) return state;
      const updatedUnit = {
        ...unit,
        status: {
          ...unit.status,
          previousCoordinate: unit.status.coordinate,
          coordinate: { x: payload.x, y: payload.y },
        }
      }
      const updatedUnits = updateUnit(updatedUnit, state.units);
      return {
        ...state,
        actionMenu: {
          isOpen: false,
          targetUnitId: null,
          activeActionOption: null,
        },
        units: updatedUnits,
      }
    }
    case "SELECT_ATTACK":
      return {
        ...state,
        actionMenu: {
          isOpen: true,
          targetUnitId: payload.id,
          activeActionOption: "ATTACK",
        }
      }
    case "DO_ATTACK":
      return state // todo
    default:
      return state
  }
}

const ActionContext = createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (_: { type: ActionType, payload?: PayloadType }) => {},
});


export const Stage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ActionContext.Provider value={{ state, dispatch }}>
      <StageContent />
    </ActionContext.Provider>
  )
}

const StageContent = () => {
  const { state } = useContext(ActionContext);

  const unitsCoordinates = state.units.reduce((map, unit) => {
    const { x, y } = unit.status.coordinate;
    const mapKey = `x${x}y${y}`
    if (map.has(mapKey)) {
      throw new Error(`Duplicate coordinates: ${x},${y} oldUnit=${map.get(mapKey)} newUnit=${unit.spec.id}`)
    }
    map.set(mapKey, unit.spec.id);
    return map;
  }, new Map<string, number>())

  return (
    <div className="root">
      <div className="stage">
        {Array.from({ length: ROW_NUM }).map((_, y) => (
          <div key={`row.${y}`} className="row">
            {Array.from({ length: CELL_NUM_IN_ROW }).map((_, x) => {
              const unitId = unitsCoordinates.get(`x${x}y${y}`);
              return <Cell x={x} y={y} unitId={unitId}/>
            })}
          </div>
        ))}
      </div>
      {state.actionMenu.isOpen && <ActionMenu />}
    </div>
  )
}

const Cell = ({ x, y, unitId }: { x: number, y: number, unitId?: number }) => {
  const { state: { units, actionMenu }, dispatch } = useContext(ActionContext);
  const key = `cell.x${x}y${y}`

  if (unitId) {
    const { spec, status } = loadUnit(unitId, units);

    const orientation = calculateOrientation(
      status.coordinate,
      status.previousCoordinate
    );

    const cellClassName = actionMenu.targetUnitId === unitId
      ? "cell cell-active-unit"
      : "cell cell-unit";

    let cellContentClassForOrientation = "";
    if (orientation === "RIGHT") cellContentClassForOrientation = "rotate-90";
    if (orientation === "DOWN") cellContentClassForOrientation = "rotate-180";
    if (orientation === "LEFT") cellContentClassForOrientation = "rotate-270";
  
    return (
      <div
      key={key}
      className={cellClassName}
      onClick={() => dispatch({
        type: "OPEN_MENU",
        payload: { id: unitId }
      })}
      >
        <div className="cell-content">
          <UnitIcon
            unitType={spec.unit_type}
            className={cellContentClassForOrientation}
          />
        </div>
      </div>
    )
  }

  if (actionMenu.targetUnitId) {
    const { spec, status } = loadUnit(actionMenu.targetUnitId, units);

    if (actionMenu.activeActionOption === "MOVE") {
      const diffX = Math.abs(status.coordinate.x - x);
      const diffY = Math.abs(status.coordinate.y - y);
      const isWithinRange = diffX + diffY <= spec.movement_range;
      if (isWithinRange) return (
        <div
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
        />
      )
    }
  
    if (actionMenu.activeActionOption === "ATTACK") {
      const diffX = Math.abs(status.coordinate.x - x);
      const diffY = Math.abs(status.coordinate.y - y);
      const isWithinRange = diffX + diffY <= spec.attack_range;
      if (isWithinRange) return (
        <div
          key={key}
          className="cell cell-attack-range"
          onClick={() => dispatch({ type: "CLOSE_MENU" })}
        />
      )
    }
  }

  return (
    <div
      key={key}
      className="cell"
    />
  );
}

const ActionMenu = () => {
  const { state: { actionMenu }, dispatch } = useContext(ActionContext);

  return (
    <div className="action-menu">
      <ul>
        <li>
          <button
            className={actionMenu.activeActionOption === "MOVE" ? "action-btn action-btn-active" : "action-btn"}
            onClick={() => dispatch({
              type: "SELECT_MOVE",
              payload: { id: actionMenu.targetUnitId || undefined }
            })}
          >
            移動
          </button>
        </li>
        <li>
          <button
            className={actionMenu.activeActionOption === "ATTACK" ? "action-btn action-btn-active" : "action-btn"}
            onClick={() => dispatch({
              type: "SELECT_ATTACK",
              payload: { id: actionMenu.targetUnitId || undefined }
            })}
          >
            攻撃
          </button>
        </li>
        <li>
          <button
            className="action-btn"
            onClick={() => dispatch({ type: "CLOSE_MENU" })}
          >
            閉じる
          </button>
        </li>
      </ul>
    </div>
  )
}

const UnitIcon = ({ unitType, className }: { unitType: number, className: string }) => {
  const props = {
    width: 24,
    height: 24,
    className,
  }

  if (unitType === 1) {
    return (
      <FighterJetIcon {...props} />
    )
  }
  if (unitType === 2) {
    return (
      <ArmyTankIcon {...props} />
    )
  }
  if (unitType === 3) {
    return (
      <BattleSoldierIcon {...props}/>
    )
  }

  return <></>
}
