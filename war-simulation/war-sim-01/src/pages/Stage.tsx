import { useState } from "react";
import "./Stage.css"

const INITIAL_COORDINATE = [3, 2]; // NOTE: coordinte start is 0
const ROW_NUM = 5
const CELL_NUM_IN_ROW = 7

const ACTION_OPTIONS = ["MOVE", "ATTACK"] as const
type ActionOptionType = typeof ACTION_OPTIONS[number]

export const Stage = () => {
  const [isOpenActionMenu, setIsOpenActionMenu] = useState(false)
  const [activeActionOption, setActiveActionOption] = useState<ActionOptionType | null>(null)
  const [coordinate, setCoordinate] = useState(INITIAL_COORDINATE)

  return (
    <div className="root">
      <div className="stage">
        {Array.from({ length: ROW_NUM }).map((_, y) => (
          <div key={`row.${y}`} className="row">
            {Array.from({ length: CELL_NUM_IN_ROW }).map((_, x) => {
              const idx = x * ROW_NUM + y;
              const isLocated = coordinate[0] === x && coordinate[1] === y;
              const key = `cell.${idx}`
              return isLocated ? (
                <div
                  key={key}
                  className="cell cell-active"
                  onClick={() => setIsOpenActionMenu(true)}
                >
                  <div className="cell-content">🤖</div>
                </div>
              )  : (
                <div
                  key={key}
                  className="cell"
                  onClick={activeActionOption == "MOVE"
                    ? () => {
                      setCoordinate([x, y])
                      setActiveActionOption(null)
                    }
                    : undefined
                  }
                />
              )
            })}
          </div>
        ))}
      </div>
      {isOpenActionMenu && (
        <div className="action-menu">
          <ul>
            <li>
              <button onClick={() => setActiveActionOption("MOVE")}>移動</button>
            </li>
            <li>
              {/* TODO: interact */}
              <button onClick={() => setActiveActionOption("ATTACK")}>攻撃</button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveActionOption(null)
                  setIsOpenActionMenu(false)
                }}
              >
                閉じる
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
