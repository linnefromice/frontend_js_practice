import { Reducer, useReducer, useCallback } from 'react'

type StateType = { count: number };
type ActionType = "INCREMENT" | "DECREMENT";
const reducer: Reducer<StateType, ActionType> = (state, action) => {
  if (action === 'INCREMENT') {
    return { count: state.count + 1 };
  } else {
    return { count: state.count - 1 };
  }
}

const initialState = { count: 0 };
const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = useCallback(() => dispatch('INCREMENT'), []);
  const decrement = useCallback(() => dispatch('DECREMENT'), []);

  return (
    <div>
      <h1>Counter</h1>
      <h2>カウント: {state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

const App: React.FC = () => <Counter />

export default App
