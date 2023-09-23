import { Reducer, createContext, useContext, useReducer } from "react";
import "./Stage.scss"

const INITIAL_COORDINATE: [number, number] = [3, 2]; // NOTE: coordinte start is 0
const ROW_NUM = 9
const CELL_NUM_IN_ROW = 7
const RANGE = 2

const ACTION_OPTIONS = ["MOVE", "ATTACK"] as const
type ActionOptionType = typeof ACTION_OPTIONS[number]

type StateType = {
  isOpenActionMenu: boolean
  activeActionOption: ActionOptionType | null
  coordinate: [number, number]
}
const ACTIONS = ["OPEN_MENU", "CLOSE_MENU", "SELECT_MOVE", "SELECT_ATTACK", "DO_MOVE", "DO_ATTACK"] as const
type ActionType = typeof ACTIONS[number];

const initialState: StateType = {
  isOpenActionMenu: false,
  activeActionOption: null,
  coordinate: INITIAL_COORDINATE,
}

const ActionContext = createContext({
  state: initialState,
  dispatch: (_: { type: ActionType, payload?: { x: number, y: number } }) => {},
});

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
    case "DO_MOVE":
      if (payload === undefined) return state
      return {
        isOpenActionMenu: false,
        activeActionOption: null,
        coordinate: [payload.x, payload.y],
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
  const { state, dispatch } = useContext(ActionContext);

  return (
    <div className="root">
      <div className="stage">
        {Array.from({ length: ROW_NUM }).map((_, y) => (
          <div key={`row.${y}`} className="row">
            {Array.from({ length: CELL_NUM_IN_ROW }).map((_, x) => {
              const idx = x * ROW_NUM + y;
              const key = `cell.${idx}`
              const isLocated = state.coordinate[0] === x && state.coordinate[1] === y;
              if (isLocated) return (
                <div
                  key={key}
                  className="cell cell-active"
                  onClick={() => dispatch({ type: "OPEN_MENU" })}
                >
                  <div className="cell-content">🤖</div>
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
            })}
          </div>
        ))}
      </div>
      {state.isOpenActionMenu && <ActionMenu />}
    </div>
  )
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
