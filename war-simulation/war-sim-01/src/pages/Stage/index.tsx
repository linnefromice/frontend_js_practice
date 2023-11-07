import { createContext, useContext, useReducer } from "react";
import "./Stage.scss"
import { ActionType, PLAYERS, PayloadType, StateType } from "../../types";
import { getPlayer, reducer } from "./logics";
import { Cell } from "./Cell";

const ROW_NUM = 9
const CELL_NUM_IN_ROW = 12

const initialState: StateType = {
  activePlayerId: 1,
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
        max_hp: 1000,
        attack: 400,
      },
      status: {
        hp: 1000,
        coordinate: { x: 5, y: 2 },
        previousCoordinate: { x: 5, y: 2 },
        initialCoordinate: { x: 5, y: 2 },
      },
      playerId: 1,
    },
    {
      spec: {
        id: 2,
        name: "VF-25G",
        unit_type: 1,
        movement_range: 2,
        attack_range: 5,
        max_hp: 1000,
        attack: 400,
      },
      status: {
        hp: 1000,
        coordinate: { x: 7, y: 2 },
        previousCoordinate: { x: 7, y: 2 },
        initialCoordinate: { x: 7, y: 2 },
      },
      playerId: 1,
    },
    {
      spec: {
        id: 3,
        name: "VF-25S",
        unit_type: 1,
        movement_range: 4,
        attack_range: 4,
        max_hp: 1000,
        attack: 400,
      },
      status: {
        hp: 1000,
        coordinate: { x: 6, y: 1 },
        previousCoordinate: { x: 6, y: 1 },
        initialCoordinate: { x: 6, y: 1 },
      },
      playerId: 1,
    },
    {
      spec: {
        id: 4,
        name: "TANK-1",
        unit_type: 2,
        movement_range: 2,
        attack_range: 2,
        max_hp: 2000,
        attack: 200,
      },
      status: {
        hp: 2000,
        coordinate: { x: 4, y: 4 },
        previousCoordinate: { x: 4, y: 4 },
        initialCoordinate: { x: 4, y: 4 },
      },
      playerId: 2,
    },
    {
      spec: {
        id: 5,
        name: "TANK-2",
        unit_type: 2,
        movement_range: 2,
        attack_range: 2,
        max_hp: 2000,
        attack: 200,
      },
      status: {
        hp: 2000,
        coordinate: { x: 8, y: 4 },
        previousCoordinate: { x: 8, y: 4 },
        initialCoordinate: { x: 8, y: 4 },
      },
      playerId: 2,
    },
    {
      spec: {
        id: 6,
        name: "SOLDIER-1",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
        max_hp: 200,
        attack: 50,
      },
      status: {
        hp: 200,
        coordinate: { x: 3, y: 5 },
        previousCoordinate: { x: 3, y: 5 },
        initialCoordinate: { x: 3, y: 5 },
      },
      playerId: 2,
    },
    {
      spec: {
        id: 7,
        name: "SOLDIER-2",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
        max_hp: 200,
        attack: 50,
      },
      status: {
        hp: 200,
        coordinate: { x: 5, y: 5 },
        previousCoordinate: { x: 5, y: 5 },
        initialCoordinate: { x: 5, y: 5 },
      },
      playerId: 2,
    },
    {
      spec: {
        id: 8,
        name: "SOLDIER-3",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
        max_hp: 200,
        attack: 50,
      },
      status: {
        hp: 200,
        coordinate: { x: 7, y: 5 },
        previousCoordinate: { x: 7, y: 5 },
        initialCoordinate: { x: 7, y: 5 },
      },
      playerId: 2,
    },
    {
      spec: {
        id: 9,
        name: "SOLDIER-4",
        unit_type: 3,
        movement_range: 1,
        attack_range: 2,
        max_hp: 200,
        attack: 50,
      },
      status: {
        hp: 200,
        coordinate: { x: 9, y: 5 },
        previousCoordinate: { x: 9, y: 5 },
        initialCoordinate: { x: 9, y: 5 },
      },
      playerId: 2,
    },
  ]
}

export const ActionContext = createContext({
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
      <p>{`PLAYER: ${JSON.stringify(getPlayer(state.activePlayerId, PLAYERS))}`}</p>
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
        <li>
          <button
            className="action-btn"
            onClick={() => dispatch({ type: "TURN_END" })}
          >
            確定
          </button>
        </li>
      </ul>
    </div>
  )
}
