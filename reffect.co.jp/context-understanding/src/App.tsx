import { Reducer, createContext, useReducer } from "react"
import { ComponentA } from "./Components"

type StateType = {
  count: number
}

export const UserCount = createContext({
  state: { count: 0 },
  dispatch: (_: string) => {}
})

const App = () => {
  const reducer: Reducer<StateType, string> = (state, action) => {
    if (action == "INCREMENT") {
      return { count: state.count + 1 }
    } else {
      return { count: state.count - 1 }
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={{state, dispatch}}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  )
}

export default App
