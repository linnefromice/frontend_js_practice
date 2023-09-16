import "./Stage.css"

const ROW_NUM = 3
const CELL_NUM_IN_ROW = 5

export const Stage = () => {
  return (
    <div className="root">
      <div className="stage">
        {Array.from({ length: ROW_NUM }).map((_, i) => (
          <div key={`row.${i}`} className="row">
            {Array.from({ length: CELL_NUM_IN_ROW }).map((_, j) => {
              const idx = i * ROW_NUM + j;
              return <div key={`cell.${idx}`} className="cell">{idx}</div>
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
