export type SkillName =
  | "athletics"
  | "barter"
  | "bigGuns"
  | "energyWeapons"
  | "explosives"
  | "lockpick"
  | "medicine"
  | "meleeWeapons"
  | "pilot"
  | "repair"
  | "science"
  | "smallGuns"
  | "sneak"
  | "speech"
  | "survival"
  | "throwing"
  | "unarmed";

export type CharacterSkill = {
  rank: number;
  tagged: boolean;
};