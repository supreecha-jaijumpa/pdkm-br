export type Field = Cell[][];

export interface Cell {
  x: number;
  y: number;
  entity: Entity | null;
  collision: (0 | 1)[]; //[top, right, bottom, left]
  sprite: string;
}

export type EntityType = "player" | "loot" | "trap";

export interface Entity {
  name: string;
  sprite: string;
  type: EntityType;
  position: [number, number]; //[x, y]
}

export interface Player extends Entity {
  hp: number;
  ep: number;
  inventory: Skill[]; //max 12
  weapon: Weapon[]; //max 3
  protection: Skill | null;
}

export interface Loot extends Entity {
  loot: (Weapon | Skill)[];
}

export interface Trap extends Entity {
  ownerId: string;
  effect: Skill | null;
}

export interface Card {
  name: string;
  description: string;
  sprite: string;
  image: string;
}

export enum WeaponKey {
  SWORD = "SWORD",
  DAGGER = "DAGGER",
  STAFF = "STAFF",
  BOW = "BOW",
  MACE = "MACE",
}

export interface Weapon extends Card {
  key: `${WeaponKey}`;
  type: "weapon";
}

export enum SkillKey {
  SWORD_OFF_1 = "STRIKE",
  SWORD_OFF_2 = "CHARGE",
  SWORD_DEF = "COUNTER_ATTACK",

  DAGGER_OFF_1 = "QUCK_ATTACK",
  DAGGER_OFF_2 = "STEAL",
  DAGGER_DEF = "SACRIFICE",

  STAFF_OFF_1 = "FIREBALL",
  STAFF_OFF_2 = "ELECTRIC_FIELD",
  STAFF_DEF_1 = "ICE_BLOCK_1",
  STAFF_DEF_2 = "ICE_BLOCK_2",

  BOW_OFF_1 = "AIM_SHOT",
  BOW_OFF_2_1 = "SET_TRAP",
  BOW_OFF_2_2 = "TRAP",
  BOW_DEF = "LEAP",

  MACE_OFF_1 = "HEAL",
  MACE_OFF_2 = "BASH",
  MACE_DEF = "RESURRECT",
}

export type Strategy = "offensive" | "defensive";

export type Target = "self" | "other";

export type Action = (field: Field, user: Cell, target?: Cell) => Cell[];

export interface Skill extends Card {
  key: `${SkillKey}`;
  type: "skill";
  strategy: Strategy;
  target: Target;
  distance: number;
  cost: number;
  required: `${WeaponKey}`;
  action: Action;
}
