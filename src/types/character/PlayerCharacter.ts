import type { WeaponDefinition } from "../Weapon";
import type { ApparelDefinition } from "../Apparel";
import type { AmmoDefinition } from "../Ammo";
import type { PerkDefinition } from "../Perk";
import type { ConsumableDefinition } from "../Consumable";
import type { GenericItemDefinition } from "../GenericItem";
import type { WeaponModDefinition } from "../WeaponMod";
import type { ApparelModDefinition } from "../ApparelMod";
import type { ArmorModDefinition } from "../ArmorMod";
import type { PowerArmorModDefinition } from "../PowerArmorMod";
import type { RobotModDefinition } from "../RobotMod";

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
  instanceId: string; //Unique identifier for this specific instance of the weapon item. This is used to track the item in the character's inventory and to differentiate between multiple instances of the same weapon item. Ex: "weapon-001"
  definitionId: WeaponDefinition["id"];

  customName?: string;

  equipped: boolean;

  installedMods: WeaponModDefinition["id"][];
};

export type CharacterApparel = {
  instanceId: string; //Unique identifier for this specific instance of the apparel item. This is used to track the item in the character's inventory and to differentiate between multiple instances of the same apparel item. Ex: "apparel-001"
  definitionId: ApparelDefinition["id"];

  equipped: boolean;
  side?: "left" | "right";
  
  currentHP?: number; //If apparel has HP, this is the current HP of the item.
  physicalDRReduction?: number;
  energyDRReduction?: number;
  radiationDRReduction?: number;

  installedMods: 
  | ApparelModDefinition["id"][]//Need to set validation against the list of ApparelModDefinition ids to ensure that only valid mods are applied to the apparel.
  | ArmorModDefinition["id"][]
  | PowerArmorModDefinition["id"][]
  | RobotModDefinition["id"][];
};

export type CharacterAmmo = {
  definitionId: AmmoDefinition["id"];
  quantity: number;
};

export type CharacterPerk = {
  definitionId: PerkDefinition["id"];
  rank: number;
};

export type CharacterInventoryItem =
  | CharacterWeapon
  | CharacterApparel
  | CharacterAmmo
  | {
      definitionId: ConsumableDefinition["id"];
      quantity: number;
    }
  | {
      definitionId: GenericItemDefinition["id"];
      quantity: number;
    };

export type PlayerCharacter = {
  id: string;

  name: string;
  playerName?: string;
  origin?: string; //Swap string for origin type when implemented.

  level: number;
  xp?: number;
  totalXP?: number;

  gender?: "male" | "female";

  special: SpecialStats;
  skills: PlayerSkills;

  maxHP: number;
  currentHP: number;
  rads: number;

  defense: number;
  initiative: number;
  meleeDamageBonus: number;

  luckPoints?: number;
  caps: number;


  perks: CharacterPerk[];
  inventory: CharacterInventoryItem[];

  notes?: string;
};