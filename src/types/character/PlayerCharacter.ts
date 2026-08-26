import type { WeaponDefinition } from "../Weapon";
import type { ApparelDefinition } from "../Apparel";
import type { AmmoDefinition } from "../Ammo";
import type { PerkDefinition } from "../Perk";

export type SpecialStats = {
  STR: number;
  PER: number;
  END: number;
  CHA: number;
  INT: number;
  AGI: number;
  LCK: number;
};

export type Skill = {
  rank: number;
  tagged: boolean;
};

export type PlayerSkills = {
  athletics: Skill;
  barter: Skill;
  bigGuns: Skill;
  energyWeapons: Skill;
  explosives: Skill;
  lockpick: Skill;
  medicine: Skill;
  meleeWeapons: Skill;
  pilot: Skill;
  repair: Skill;
  science: Skill;
  smallGuns: Skill;
  sneak: Skill;
  speech: Skill;
  survival: Skill;
  throwing: Skill;
  unarmed: Skill;
};

export type CharacterWeapon = {
  instanceId: string;
  definitionId: WeaponDefinition["id"];

  customName?: string;

  equipped: boolean;

  currentAmmo?: number;
  ammoId?: AmmoDefinition["id"];

  installedMods: string[];
};

export type CharacterApparel = {
  instanceId: string;
  definitionId: ApparelDefinition["id"];

  equipped: boolean;
  currentHP?: number;

  installedMods: string[];
};

export type CharacterAmmo = {
  definitionId: AmmoDefinition["id"];
  quantity: number;
};

export type CharacterPerk = {
  definitionId: PerkDefinition["id"];
  rank: number;
};

export type PlayerCharacter = {
  id: string;

  name: string;
  playerName?: string;

  level: number;
  xp?: number;

  gender?: "male" | "female";

  special: SpecialStats;
  skills: PlayerSkills;

  currentHP: number;
  maxHP: number;

  defense: number;
  initiative: number;
  meleeDamage: number;

  luckPoints?: number;
  caps: number;

  weapons: CharacterWeapon[];
  apparel: CharacterApparel[];
  ammo: CharacterAmmo[];
  perks: CharacterPerk[];

  notes?: string;
};