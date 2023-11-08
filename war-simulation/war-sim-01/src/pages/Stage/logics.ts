import { Reducer } from "react";
import { UnitType, OrientationType, StateType, ActionType, PayloadType, Player, PLAYERS } from "../../types";

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

// Player
export const getPlayer = (id: number, players: Player[]) => {
  const idx = getIdxInPlayer(id, players);
  return players[idx];
}

export const nextPlayer = (id: number, players: Player[]) => {
  const idx = getIdxInPlayer(id, players);
  const nextIdx = (idx + 1) % players.length;
  return players[nextIdx];
}

const getIdxInPlayer = (id: number, players: Player[]) => {
  const idx = players.findIndex((player) => player.id === id);
  if (idx === -1) throw new Error(`Player not found: ${id}`);
  return idx;
}

// Unit
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

export const removeUnit = (
  units: UnitType[],
  targetId: number
): UnitType[] => {
  const remains = units.filter((unit) => unit.spec.id !== targetId);
  return remains;
};

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

  if (type == "TURN_END") {
    return {
      ...state,
      actionMenu: {
        isOpen: false,
        targetUnitId: null,
        activeActionOption: null,
      },
      activePlayerId: nextPlayer(state.activePlayerId, PLAYERS).id,
    }
  }

  if (payload?.id === undefined) return state;

  const unit = loadUnit(payload.id, state.units);

  if (type == "OPEN_MENU") {
    if (unit.playerId !== state.activePlayerId) return state;

    return {
      ...state,
      actionMenu: {
        isOpen: true,
        targetUnitId: payload.id,
        activeActionOption: null,  
      }
    }
  }

  switch (type) {
    case "SELECT_MOVE":
      if (unit.playerId !== state.activePlayerId) return state;

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
      if (unit.playerId !== state.activePlayerId) return state;

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

      const remainHp = unit.status.hp - attacking.spec.attack;
      const newUnits = remainHp > 0
        ? (() => {
          const updatedUnit = {
            ...unit,
            status: {
              ...unit.status,
              hp: unit.status.hp - attacking.spec.attack,
            }
          }
          return updateUnit(updatedUnit, state.units);
        })() : removeUnit(state.units, unit.spec.id);

      return {
        ...state,
        actionMenu: {
          isOpen: false,
          targetUnitId: null,
          activeActionOption: null,
        },
        units: newUnits,
      }
    }
    default:
      return state
  }
}