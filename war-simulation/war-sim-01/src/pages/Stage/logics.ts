import { Reducer } from "react";
import { UnitType, OrientationType, StateType, ActionType, PayloadType } from "../../types";

export const calculateOrientation = (
  current: { x: number, y: number },
  previous: { x: number, y: number }
): OrientationType => {
  const diffX = current.x - previous.x;
  const diffY = current.y - previous.y;
  if (Math.abs(diffY) >= Math.abs(diffX)) {
    return diffY > 0 ? "DOWN" : "UP";
  } else {
    return diffX > 0 ? "RIGHT" : "LEFT";
  }
}

export const loadUnit = (
  id: number,
  units: UnitType[]
): UnitType => {
  const filtered = units.filter((unit) => unit.spec.id === id);
  if (filtered.length === 0) throw new Error(`Unit not found: ${id}`);
  if (filtered.length > 1) throw new Error(`Duplicate unit: ${id}`);
  return filtered[0];
}

export const updateUnit = (
  updatedUnit: UnitType,
  previousUnits: UnitType[]
): UnitType[] => {
  const newUnits = previousUnits.map((previous) => {
    if (previous.spec.id === updatedUnit.spec.id) {
      return updatedUnit;
    } else {
      return previous;
    }
  });

  return newUnits;
}

export const reducer: Reducer<
  StateType,
  {
    type: ActionType,
    payload?: PayloadType
  }
> = (state, action) => {
  const { type, payload } = action

  if (type == "CLOSE_MENU") {
    return {
      ...state,
      actionMenu: {
        isOpen: false,
        targetUnitId: null,
        activeActionOption: null,  
      }
    }
  }

  if (payload?.id === undefined) return state;
  if (type == "OPEN_MENU") {
    return {
      ...state,
      actionMenu: {
        isOpen: true,
        targetUnitId: payload.id,
        activeActionOption: null,  
      }
    }
  }

  const unit = loadUnit(payload.id, state.units);

  switch (type) {
    case "SELECT_MOVE":
      return {
        ...state,
        actionMenu: {
          isOpen: true,
          targetUnitId: payload.id,
          activeActionOption: "MOVE",
        }
      }
    case "DO_MOVE": {
      if (payload.x === undefined || payload.y === undefined) return state;
      const updatedUnit = {
        ...unit,
        status: {
          ...unit.status,
          previousCoordinate: unit.status.coordinate,
          coordinate: { x: payload.x, y: payload.y },
        }
      }
      const updatedUnits = updateUnit(updatedUnit, state.units);
      return {
        ...state,
        actionMenu: {
          isOpen: false,
          targetUnitId: null,
          activeActionOption: null,
        },
        units: updatedUnits,
      }
    }
    case "SELECT_ATTACK":
      return {
        ...state,
        actionMenu: {
          isOpen: true,
          targetUnitId: payload.id,
          activeActionOption: "ATTACK",
        }
      }
    case "DO_ATTACK": {
      if (state.actionMenu.targetUnitId === null || payload.id === null) return state;
      const attacking = loadUnit(state.actionMenu.targetUnitId, state.units);

      const updatedUnit = {
        ...unit,
        status: {
          ...unit.status,
          hp: unit.status.hp - 100 * attacking.spec.id,
          // TODO: calculate damage (use attack power)
          // TODO: remove unit if hp <= 0
        }
      }
      const updatedUnits = updateUnit(updatedUnit, state.units);
      return {
        ...state,
        actionMenu: {
          isOpen: false,
          targetUnitId: null,
          activeActionOption: null,
        },
        units: updatedUnits,
      }
    }
    default:
      return state
  }
}