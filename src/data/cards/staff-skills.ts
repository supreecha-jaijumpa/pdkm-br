import { Skill, WeaponKey, SkillKey } from "../../types";

export type StaffSkillKey =
  | SkillKey.STAFF_OFF_1
  | SkillKey.STAFF_OFF_2
  | SkillKey.STAFF_DEF_1
  | SkillKey.STAFF_DEF_2;

export const StaffSkills: Record<StaffSkillKey, Skill> = {
  FIREBALL: {
    key: SkillKey.STAFF_OFF_1,
    name: "Fireball",
    description: "ร่ายลูกไฟใส่เป้าหมายในระยะ 3 ช่อง สร้างความเสียหาย [x] หน่วย",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 3,
    required: WeaponKey.STAFF,
    action: (field, user, target) => {
      console.log(field, user, target);
      return [];
    },
  },

  ELECTRIC_FIELD: {
    key: SkillKey.STAFF_OFF_2,
    name: "Electric Field",
    description:
      "สร้างสนามไฟฟ้ารอบตัวผู้ใช้งาน สร้างความเสียหาย [x] หน่วย ให้กับเป้าหมายรอบทิศทางในระยะ 1 ช่อง",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "self",
    distance: 1,
    cost: 1,
    required: WeaponKey.STAFF,
    action: () => {
      return [];
    },
  },

  ICE_BLOCK_1: {
    key: SkillKey.STAFF_DEF_1,
    name: "Ice Block Full",
    description:
      "ตั้งท่าร่าย หากถูกโจมตีในขณะที่มีผลของการ์ดนี้อยู่จะไม่ได้รับความเสียหายใด ๆ เหลืออีก 2 ครั้ง",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "defensive",
    target: "self",
    distance: 1,
    cost: 2,
    required: WeaponKey.STAFF,
    action: () => {
      return [];
    },
  },

  ICE_BLOCK_2: {
    key: SkillKey.STAFF_DEF_2,
    name: "ICE Block Haft",
    description:
      "ตั้งท่าร่าย หากถูกโจมตีในขณะที่มีผลของการ์ดนี้อยู่จะไม่ได้รับความเสียหายใด ๆ เหลืออีก 1 ครั้ง",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "defensive",
    target: "self",
    distance: 1,
    cost: 2,
    required: WeaponKey.STAFF,
    action: () => {
      return [];
    },
  },
};
