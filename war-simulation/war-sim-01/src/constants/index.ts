import { Armament, Player, UnitType } from "../types";

const coordinates = (x: number, y: number) => ({
  coordinate: { x, y },
  previousCoordinate: { x, y },
  initialCoordinate: { x, y },
});

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
      ...coordinates(5, 2)
    },
    playerId: 2,
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
      ...coordinates(7, 2)
    },
    playerId: 2,
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
      ...coordinates(6, 1)
    },
    playerId: 2,
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
      ...coordinates(3, 3)
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
      ...coordinates(9, 3)
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
      ...coordinates(2, 4)
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
      ...coordinates(4, 4)
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
      ...coordinates(8, 4)
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
      ...coordinates(10, 4)
    },
    playerId: 2,
  },
  {
    spec: {
      id: 10,
      name: "VF-171",
      unit_type: 1,
      movement_range: 3,
      max_hp: 800,
      armaments: getAraments(1),
    },
    status: {
      hp: 800,
      ...coordinates(3, 8)
    },
    playerId: 1,
  },
  {
    spec: {
      id: 11,
      name: "VF-171",
      unit_type: 1,
      movement_range: 2,
      max_hp: 800,
      armaments: getAraments(1),
    },
    status: {
      hp: 800,
      ...coordinates(5, 8)
    },
    playerId: 1,
  },
  {
    spec: {
      id: 12,
      name: "VF-171",
      unit_type: 1,
      movement_range: 4,
      max_hp: 800,
      armaments: getAraments(1),
    },
    status: {
      hp: 800,
      ...coordinates(7, 8)
    },
    playerId: 1,
  },
  {
    spec: {
      id: 13,
      name: "VF-171",
      unit_type: 1,
      movement_range: 4,
      max_hp: 800,
      armaments: getAraments(1),
    },
    status: {
      hp: 800,
      ...coordinates(9, 8)
    },
    playerId: 1,
  },
];
