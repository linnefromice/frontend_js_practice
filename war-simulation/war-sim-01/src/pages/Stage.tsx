import { Reducer, createContext, useContext, useReducer } from "react";
import FighterJetIcon from "../assets/fighterJet.svg?react";
import "./Stage.scss"
import { ActionOptionType, ActionType, OrientationType, UnitType, UnitStatusType } from "../types";

const ROW_NUM = 9
const CELL_NUM_IN_ROW = 7

type StateType = {
  isOpenActionMenu: boolean
  activeActionOption: ActionOptionType | null
  unit: UnitType
  unitStatus: UnitStatusType
}

const initialState: StateType = {
  isOpenActionMenu: false,
  activeActionOption: null,
  unit: {
    id: 1,
    name: "acecombat",
    unit_type: 1,
    movement_range: 3,
    attack_range: 2,
  },
  unitStatus: {
    coordinate: { x: 3, y: 2 },
    previousCoordinate: { x: 3, y: 2 },
    initialCoordinate: { x: 3, y: 2 },
  }
}

const ActionContext = createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (_: { type: ActionType, payload?: { x: number, y: number } }) => {},
});

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

const reducer: Reducer<
  StateType,
  { type: ActionType, payload?: { x: number, y: number } }
> = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "OPEN_MENU":
      return {
        ...state,
        isOpenActionMenu: true,
        activeActionOption: null,
      }
    case "CLOSE_MENU":
      return {
        ...state,
        isOpenActionMenu: false,
        activeActionOption: null,
      }
    case "SELECT_MOVE":
      return {
        ...state,
        activeActionOption: "MOVE",
      }
    case "DO_MOVE": {
      if (payload === undefined) {
        return state;
      }

      const currentCoordinate = state.unitStatus.coordinate;

      return {
        isOpenActionMenu: false,
        activeActionOption: null,
        unit: state.unit,
        unitStatus: {
          ...state.unitStatus,
          previousCoordinate: currentCoordinate,
          coordinate: { x: payload.x, y: payload.y },
        }
      }
    }
    case "SELECT_ATTACK":
      return {
        ...state,
        activeActionOption: "ATTACK",
      }
    case "DO_ATTACK":
      return state // todo
    default:
      return state
  }
}

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

  return (
    <div className="root">
      <div className="stage">
        {Array.from({ length: ROW_NUM }).map((_, y) => (
          <div key={`row.${y}`} className="row">
            {Array.from({ length: CELL_NUM_IN_ROW }).map((_, x) => <Cell x={x} y={y} />)}
          </div>
        ))}
      </div>
      {state.isOpenActionMenu && <ActionMenu />}
    </div>
  )
}

const Cell = ({ x, y }: { x: number, y: number }) => {
  const { state, dispatch } = useContext(ActionContext);

  const key = `cell.x${x}y${y}`
  const currentCoordinate = state.unitStatus.coordinate;
  const isLocated = currentCoordinate.x === x && currentCoordinate.y === y;

  if (isLocated) {
    const orientation = calculateOrientation(
      state.unitStatus.coordinate,
      state.unitStatus.previousCoordinate
    );

    let classForOrientation = "";
    if (orientation === "RIGHT") classForOrientation = "rotate-90";
    if (orientation === "DOWN") classForOrientation = "rotate-180";
    if (orientation === "LEFT") classForOrientation = "rotate-270";
  
    return (
      <div
      key={key}
      className="cell cell-active"
      onClick={() => dispatch({ type: "OPEN_MENU" })}
      >
        <div className="cell-content">
          <FighterJetIcon
            className={classForOrientation}
            width={24}
            height={24}
          />
        </div>
      </div>
    )
  }

  if (state.activeActionOption === "ATTACK") {
    const diffX = Math.abs(currentCoordinate.x - x);
    const diffY = Math.abs(currentCoordinate.y - y);
    const isWithinRange = diffX + diffY <= state.unit.attack_range;
    if (isWithinRange) return (
      <div
        key={key}
        className="cell cell-range"
        onClick={() => dispatch({ type: "CLOSE_MENU" })}
      />
    )
  }
  return (
    <div
      key={key}
      className="cell"
      onClick={state.activeActionOption == "MOVE"
        ? () => dispatch({ type: "DO_MOVE", payload: { x, y } })
        : undefined
      }
    />
  );
}

const ActionMenu = () => {
  const { state, dispatch } = useContext(ActionContext);

  return (
    <div className="action-menu">
      <ul>
        <li>
          <button
            className={state.activeActionOption === "MOVE" ? "action-btn action-btn-active" : "action-btn"}
            onClick={() => dispatch({ type: "SELECT_MOVE" })}
          >
            移動
          </button>
        </li>
        <li>
          <button
            className={state.activeActionOption === "ATTACK" ? "action-btn action-btn-active" : "action-btn"}
            onClick={() => dispatch({ type: "SELECT_ATTACK" })}
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
