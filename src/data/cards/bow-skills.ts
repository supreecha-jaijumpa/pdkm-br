import { Skill, WeaponKey, SkillKey } from "../../types";

export type BowSkillKey =
  | SkillKey.BOW_OFF_1
  | SkillKey.BOW_OFF_2_1
  | SkillKey.BOW_OFF_2_2
  | SkillKey.BOW_DEF;

export const BowSkills: Record<BowSkillKey, Skill> = {
  AIM_SHOT: {
    key: SkillKey.BOW_OFF_1,
    name: "Aim Shot",
    description:
      "ยิงผู้เล่นจากระยะไกล สร้งความเสียหาย [x] หน่วย + ระยะทางระหว่างผู้ใช้และเป้าหมายช่องหละ [x] หน่วย",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 0,
    required: WeaponKey.BOW,
    action: (field, user, target) => {
      console.log(field, user, target);
      return [];
    },
  },

  SET_TRAP: {
    key: SkillKey.BOW_OFF_2_1,
    name: "Set Trap",
    description:
      "วางกับดักไว้ในระยะ 1 ช่อง (ผู้เหยียบกับดักจะถูกลดพลังงาน [x] หน่วย และสร้างความเสียหาย [x] หน่วย)",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 1,
    required: WeaponKey.BOW,
    action: () => {
      return [];
    },
  },

  TRAP: {
    key: SkillKey.BOW_OFF_2_2,
    name: "Trap",
    description:
      "สร้างความเสียหายให้กับผู้เหยียบ [x] หน่วย และลดพลังงาน [x] หน่วย",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "defensive",
    target: "self",
    distance: 1,
    cost: 2,
    required: WeaponKey.BOW,
    action: () => {
      return [];
    },
  },

  LEAP: {
    key: SkillKey.BOW_DEF,
    name: "Counter Attack",
    description:
      "ตั้งท่าหลบหนี หากถูกโจมตีในขณะที่มีผลของการ์ดนี้อยู่ จะเคลื่อนย้ายตัวผู้ใช้งานแบบสุ่มระยะ 3 ช่อง",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "defensive",
    target: "self",
    distance: 1,
    cost: 2,
    required: WeaponKey.BOW,
    action: () => {
      return [];
    },
  },
};
