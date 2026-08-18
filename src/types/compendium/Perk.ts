import type { GameEffect } from "./rules/GameEffect";

type Gender = "male" | "female";

type PerkNameByGender = {
  male: string;
  female: string;
};

export type PerkDefinition = {
  id: string;
  name: string;
  nameByGender?: PerkNameByGender; //Optional property to allow for different perk names based on gender.
  
  maxRank: number;
  
  originRequirement?: "not a robot" | "not a ghoul" | "no companion" | "not immune to radiation"[];
  //Requirements for the perk to be available to the player.
  requiredBaseLevel?: number;
  //Required SPECIAL stats for the perk to be available to the player.
  requiredLevelIncrease?: number; //The amount of level increase required to rank up the perk. This is used in conjunction with the requiredBaseLevel to determine if the perk is available to the player.
  STR?: number;
  PER?: number;
  END?: number;
  CHA?: number;
  INT?: number;
  AGI?: number;
  LCK?: number;

  ranks: PerkRanks[];

};

export type PerkRanks = {
  rank: number;
  description: string;
  effects?: GameEffect[];
};