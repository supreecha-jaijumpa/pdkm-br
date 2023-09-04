import { Skill, WeaponKey, SkillKey } from "../../types";

export type SworkSkillKey =
  | SkillKey.SWORD_OFF_1
  | SkillKey.SWORD_OFF_2
  | SkillKey.SWORD_DEF;

export const SwordSkills: Record<SworkSkillKey, Skill> = {
  STRIKE: {
    key: SkillKey.SWORD_OFF_1,
    name: "Strike",
    description: "ฟันดาบไปที่เป้าหมายในระยะ 1 ช่องสร้างความเสียหาย [x] หน่วย",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 2,
    required: WeaponKey.SWORD,
    action: (field, user, target) => {
      console.log(field, user, target);
      return [];
    },
  },

  CHARGE: {
    key: SkillKey.SWORD_OFF_2,
    name: "Charge",
    description:
      "พุ่งไปในทิศทางที่กำหนดระยะ 2 ช่อง หากกระทบกับเป้าหมายสร้างความเสียหาย [x] หน่วย และทำให้เป้าหมายถูกกระแทกออกจากตำแหน่งเดิม",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 2,
    cost: 2,
    required: WeaponKey.SWORD,
    action: () => {
      return [];
    },
  },

  COUNTER_ATTACK: {
    key: SkillKey.SWORD_DEF,
    name: "Counter Attack",
    description:
      "ตั้งท่ารับการโจมตี หากถูกโจมตีในขณะที่มีผลของการ์ดนี้อยู่ จะย้อนกลับความเสียหายที่ได้รับคืนผู้โจมตี 1 ครั้ง",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "defensive",
    target: "self",
    distance: 1,
    cost: 2,
    required: WeaponKey.SWORD,
    action: () => {
      return [];
    },
  },
};
