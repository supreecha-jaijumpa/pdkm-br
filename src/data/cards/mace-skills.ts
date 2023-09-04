import { Skill, WeaponKey, SkillKey } from "../../types";

export type MaceSkillKey =
  | SkillKey.MACE_OFF_1
  | SkillKey.MACE_OFF_2
  | SkillKey.MACE_DEF;

export const MaceSkills: Record<MaceSkillKey, Skill> = {
  HEAL: {
    key: SkillKey.MACE_OFF_1,
    name: "Heal",
    description: "รักษาพลังชีวิตเป้าหมายในระยะ 1 ช่อง จำนวน [x] หน่วย",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 0,
    required: WeaponKey.MACE,
    action: (field, user, target) => {
      console.log(field, user, target);
      return [];
    },
  },

  BASH: {
    key: SkillKey.MACE_OFF_2,
    name: "Bash",
    description:
      "ทุบหัวเป้าหมายในระยะ 1 ช่อง ทำให้เป้าหมายมึนงง ลดพลังงานเป้าหมายลง [x] หน่วย",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "offensive",
    target: "other",
    distance: 1,
    cost: 1,
    required: WeaponKey.MACE,
    action: () => {
      return [];
    },
  },

  RESURRECT: {
    key: SkillKey.MACE_DEF,
    name: "Resurect",
    description:
      "ตั้งท่าพร้อมเกิด หากถูกโจมตีถึงตายในขณะที่มีผลของการ์ดนี้อยู่ จะฝื้นคืนชีพอีกครั้งด้วยพลังชีวิตครึ่งหนึ่ง",
    sprite: "",
    image: "",
    type: "skill",
    strategy: "defensive",
    target: "self",
    distance: 1,
    cost: 2,
    required: WeaponKey.MACE,
    action: () => {
      return [];
    },
  },
};
