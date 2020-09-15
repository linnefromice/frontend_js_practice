import { ActionTypes } from "../actionTypes";
import { CounterActionTypes } from "./types";

export const incrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.increment, // "INCREMENT"
  };
};
export const decrementAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.increment, // "DECREMENT"
  };
};
export const resetAction = (): CounterActionTypes => {
  return {
    type: ActionTypes.countReset, // "COUNT_RESET"
  };
};
