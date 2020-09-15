import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../store/counter/actions";

export const Counter: React.FC = () => {
  const currentCount = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());
  const handleReset = () => dispatch(resetAction());

  return (
    <>
      <div>{currentCount.value}</div>
      <div style={{ height: "3vh", width: "10vw" }} onClick={handleIncrement}>
        Up
      </div>
      <div style={{ height: "3vh", width: "10vw" }} onClick={handleDecrement}>
        Down
      </div>
      <div style={{ height: "3vh", width: "10vw" }} onClick={handleReset}>
        Reset
      </div>
    </>
  );
};
