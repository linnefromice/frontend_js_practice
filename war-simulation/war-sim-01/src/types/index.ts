const ACTION_OPTIONS = ["MOVE", "ATTACK"] as const
export type ActionOptionType = typeof ACTION_OPTIONS[number]

const ORIENTATIONS = ["UP", "DOWN", "LEFT", "RIGHT"] as const
export type OrientationType = typeof ORIENTATIONS[number]

const ACTIONS = ["OPEN_MENU", "CLOSE_MENU", "TURN_END", "SELECT_MOVE", "SELECT_ATTACK", "DO_MOVE", "DO_ATTACK"] as const
export type ActionType = typeof ACTIONS[number];

// State
export type UnitType = { spec: UnitSpecType, status: UnitStatusType, playerId: number }

export type StateType = {
  activePlayerId: number
  actionMenu: {
    isOpen: boolean
    targetUnitId: number | null
    activeActionOption: ActionOptionType | null
  }
  units: UnitType[]
}

export type PayloadType = {
  id?: number,
  x?: number,
  y?: number
  // TODO: info for attack (skill, target unit id, damage, etc)
}

// Player Model
export type Player = {
  id: number;
  name: string;
}

// Unit Model
export type UnitSpecType = {
  id: number;
  name: string;
  // 1: fighterjet, 2: tank, 3: soldier
  unit_type: number;
  movement_range: number;
  attack_range: number;
  max_hp: number;
  attack: number;
}

export type Coordinate = {
  x: number;
  y: number;
}

export type UnitStatusType = {
  hp: number;
  coordinate: Coordinate;
  previousCoordinate: Coordinate;
  initialCoordinate: Coordinate;
}

