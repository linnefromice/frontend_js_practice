import { createContext, useState } from "react"
import { ComponentA } from "./Components"

export const UserCount = createContext({
  count: 0,
  setCount: (_: number) => {}
})

const App = () => {
  const [count, setCount] = useState(10);
  const value = { count, setCount }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  )
}

export default App
