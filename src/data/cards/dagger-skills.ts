import { Skill, WeaponKey, SkillKey } from "../../types";

export type DaggerSkillKey =
  | SkillKey.DAGGER_OFF_1
  | SkillKey.DAGGER_OFF_2
  | SkillKey.DAGGER_DEF;

export const DaggerSkills: Record<DaggerSkillKey, Skill> = {
  QUCK_ATTACK: {
    key: SkillKey.DAGGER_OFF_1,
    name: "Quick Attack",
    description:
      "โจมตีผู้เล่นอย่างฉับไวในระยะ 1 ช่อง สร้างความเสียหาย [x] หน่วย",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 0,
    required: WeaponKey.DAGGER,
    action: (field, user, target) => {
      console.log(field, user, target);
      return [];
    },
  },

  STEAL: {
    key: SkillKey.DAGGER_OFF_2,
    name: "Charge",
    description: "โขมยการ์ดสกิลจากเป้าหมายในระยะ 1 ช่อง 1 ใบ แบบสุ่ม",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 1,
    required: WeaponKey.DAGGER,
    action: () => {
      return [];
    },
  },

  SACRIFICE: {
    key: SkillKey.DAGGER_DEF,
    name: "Counter Attack",
    description:
      "ตั้งท่าพร้อมตาย หากถูกโจมตีในขณะที่มีผลของการ์ดนี้อยู่ จะสร้างความเสียหาย [x] หน่วยให้กับตัวเองและเป้าหมายรอบทิศทางในระยะ 1 ช่อง",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "defensive",
    target: "self",
    distance: 1,
    cost: 2,
    required: WeaponKey.DAGGER,
    action: () => {
      return [];
    },
  },
};
