import { useContext } from "react";
import { UserCount } from "./App";

export const ComponentA = () => {
  return (
    <div>
      <p>Component A</p>
      <ComponentB />
    </div>
  );
};

export const ComponentB = () => {
  return (
    <div>
      <p>Component B</p>
      <ComponentC />
    </div>
  );
};

export const ComponentC = () => {
  const { count, setCount } = useContext(UserCount);

  return (
    <div>
      <p>Component C</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
