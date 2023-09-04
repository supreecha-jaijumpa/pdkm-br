import { Weapon, WeaponKey } from "../../types";

export const Weapons: Record<`${WeaponKey}`, Weapon> = {
  SWORD: {
    key: WeaponKey.SWORD,
    name: "Sword",
    description: "Knight's Sword",
    sprite: "",
    image: "",
    type: "weapon",
  },
  DAGGER: {
    key: WeaponKey.DAGGER,
    name: "Dagger",
    description: "Thief's Dagger",
    sprite: "",
    image: "",
    type: "weapon",
  },
  STAFF: {
    key: WeaponKey.STAFF,
    name: "Staff",
    description: "Wizard's Staff",
    sprite: "",
    image: "",
    type: "weapon",
  },
  BOW: {
    key: WeaponKey.BOW,
    name: "Bow",
    description: "Archer's Bow",
    sprite: "",
    image: "",
    type: "weapon",
  },
  MACE: {
    key: WeaponKey.MACE,
    name: "Mace",
    description: "Priest's Mace",
    sprite: "",
    image: "",
    type: "weapon",
  },
};
