import { Armament, Player, UnitType } from "../types";

export const PLAYERS: Player[] = [
  {
    id: 1,
    name: "Hero",
    rgb: [0, 0, 255] // blue
  },
  {
    id: 2,
    name: "Villan",
    rgb: [255, 0, 0] // red
  },
]

const FIGHTER_ARMAMENTS: Armament[] = [
  {
    name: "Machine gun",
    value: 200,
    range: 2
  },
  {
    name: "Missile",
    value: 400,
    range: 3
  }
]
const ARMY_TANK_ARMAMENTS: Armament[] = [
  {
    name: "Machine gun",
    value: 200,
    range: 2
  },
  {
    name: "Cannon",
    value: 500,
    range: 4
  }
]
const BATTLE_SOLDIER_ARMAMENTS: Armament[] = [
  {
    name: "Assault rifle",
    value: 100,
    range: 2
  },
  {
    name: "Grenade launcher",
    value: 300,
    range: 2
  },
  {
    name: "Suicide drone",
    value: 500,
    range: 3
  },
]

const getAraments = (unitType: number): Armament[] => {
  if (unitType === 1) return FIGHTER_ARMAMENTS
  if (unitType === 2) return ARMY_TANK_ARMAMENTS
  if (unitType === 3) return BATTLE_SOLDIER_ARMAMENTS
  
  return []
}

export const INITIAL_UNITS: UnitType[] = [
  {
    spec: {
      id: 1,
      name: "VF-25F",
      unit_type: 1,
      movement_range: 3,
      max_hp: 1000,
      armaments: getAraments(1),
    },
    status: {
      hp: 1000,
      coordinate: { x: 5, y: 2 },
      previousCoordinate: { x: 5, y: 2 },
      initialCoordinate: { x: 5, y: 2 },
    },
    playerId: 1,
  },
  {
    spec: {
      id: 2,
      name: "VF-25G",
      unit_type: 1,
      movement_range: 2,
      max_hp: 1000,
      armaments: getAraments(1),
    },
    status: {
      hp: 1000,
      coordinate: { x: 7, y: 2 },
      previousCoordinate: { x: 7, y: 2 },
      initialCoordinate: { x: 7, y: 2 },
    },
    playerId: 1,
  },
  {
    spec: {
      id: 3,
      name: "VF-25S",
      unit_type: 1,
      movement_range: 4,
      max_hp: 1000,
      armaments: getAraments(1),
    },
    status: {
      hp: 1000,
      coordinate: { x: 6, y: 1 },
      previousCoordinate: { x: 6, y: 1 },
      initialCoordinate: { x: 6, y: 1 },
    },
    playerId: 1,
  },
  {
    spec: {
      id: 4,
      name: "TANK-1",
      unit_type: 2,
      movement_range: 2,
      max_hp: 2000,
      armaments: getAraments(2),
    },
    status: {
      hp: 2000,
      coordinate: { x: 4, y: 4 },
      previousCoordinate: { x: 4, y: 4 },
      initialCoordinate: { x: 4, y: 4 },
    },
    playerId: 2,
  },
  {
    spec: {
      id: 5,
      name: "TANK-2",
      unit_type: 2,
      movement_range: 2,
      max_hp: 2000,
      armaments: getAraments(2),
    },
    status: {
      hp: 2000,
      coordinate: { x: 8, y: 4 },
      previousCoordinate: { x: 8, y: 4 },
      initialCoordinate: { x: 8, y: 4 },
    },
    playerId: 2,
  },
  {
    spec: {
      id: 6,
      name: "SOLDIER-1",
      unit_type: 3,
      movement_range: 1,
      max_hp: 200,
      armaments: getAraments(3),
    },
    status: {
      hp: 200,
      coordinate: { x: 3, y: 5 },
      previousCoordinate: { x: 3, y: 5 },
      initialCoordinate: { x: 3, y: 5 },
    },
    playerId: 2,
  },
  {
    spec: {
      id: 7,
      name: "SOLDIER-2",
      unit_type: 3,
      movement_range: 1,
      max_hp: 200,
      armaments: getAraments(3),
    },
    status: {
      hp: 200,
      coordinate: { x: 5, y: 5 },
      previousCoordinate: { x: 5, y: 5 },
      initialCoordinate: { x: 5, y: 5 },
    },
    playerId: 2,
  },
  {
    spec: {
      id: 8,
      name: "SOLDIER-3",
      unit_type: 3,
      movement_range: 1,
      max_hp: 200,
      armaments: getAraments(3),
    },
    status: {
      hp: 200,
      coordinate: { x: 7, y: 5 },
      previousCoordinate: { x: 7, y: 5 },
      initialCoordinate: { x: 7, y: 5 },
    },
    playerId: 2,
  },
  {
    spec: {
      id: 9,
      name: "SOLDIER-4",
      unit_type: 3,
      movement_range: 1,
      max_hp: 200,
      armaments: getAraments(3),
    },
    status: {
      hp: 200,
      coordinate: { x: 9, y: 5 },
      previousCoordinate: { x: 9, y: 5 },
      initialCoordinate: { x: 9, y: 5 },
    },
    playerId: 2,
  },
];
