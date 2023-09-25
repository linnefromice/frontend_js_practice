import { Reducer, createContext, useContext, useReducer } from "react";
import FighterJetIcon from "../assets/fighterJet.svg?react";
import "./Stage.scss"

const INITIAL_COORDINATE: [number, number] = [3, 2]; // NOTE: coordinte start is 0
const ROW_NUM = 9
const CELL_NUM_IN_ROW = 7
const RANGE = 2

const ACTION_OPTIONS = ["MOVE", "ATTACK"] as const
type ActionOptionType = typeof ACTION_OPTIONS[number]
const ORIENTATIONS = ["UP", "DOWN", "LEFT", "RIGHT"] as const
type OrientationType = typeof ORIENTATIONS[number]

type StateType = {
  isOpenActionMenu: boolean
  activeActionOption: ActionOptionType | null
  coordinate: [number, number]
  orientation: OrientationType
}
const ACTIONS = ["OPEN_MENU", "CLOSE_MENU", "SELECT_MOVE", "SELECT_ATTACK", "DO_MOVE", "DO_ATTACK"] as const
type ActionType = typeof ACTIONS[number];

const initialState: StateType = {
  isOpenActionMenu: false,
  activeActionOption: null,
  coordinate: INITIAL_COORDINATE,
  orientation: "UP",
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

      const orientation = calculateOrientation(
        { x: payload.x, y: payload.y },
        { x: state.coordinate[0], y: state.coordinate[1] }
      );

      return {
        isOpenActionMenu: false,
        activeActionOption: null,
        coordinate: [payload.x, payload.y],
        orientation
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
  const isLocated = state.coordinate[0] === x && state.coordinate[1] === y;

  let classForOrientation = "";
  if (state.orientation === "RIGHT") classForOrientation = "rotate-90";
  if (state.orientation === "DOWN") classForOrientation = "rotate-180";
  if (state.orientation === "LEFT") classForOrientation = "rotate-270";

  if (isLocated) return (
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
  );
  if (state.activeActionOption === "ATTACK") {
    const diffX = Math.abs(state.coordinate[0] - x);
    const diffY = Math.abs(state.coordinate[1] - y);
    const isWithinRange = diffX + diffY <= RANGE;
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
