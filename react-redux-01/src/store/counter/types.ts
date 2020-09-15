import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type Count = {
  value: number;
};
interface IncrementAction extends Action {
  type: typeof ActionTypes.increment;
}
interface DecrementAction extends Action {
  type: typeof ActionTypes.decrement;
}
interface ResetAction extends Action {
  type: typeof ActionTypes.countReset;
}

export type CounterActionTypes =
  | IncrementAction
  | DecrementAction
  | ResetAction;
