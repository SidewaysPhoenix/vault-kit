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
import type { SpecialStats } from "../rules/SpecialStats";
import type { SkillName, CharacterSkill } from "../rules/Skills";

//Weapon----------------------------------------------------------------------------------------------//

export type PlayerCharacterWeapon = {
  instanceId: string; //Unique identifier for this specific instance of the weapon item. This is used to track the item in the character's inventory and to differentiate between multiple instances of the same weapon item. Ex: "weapon-001"
  definitionId: WeaponDefinition["id"];

  customName?: string;

  equipped: boolean;

  installedMods: WeaponModDefinition["id"][];
};

//Apparel----------------------------------------------------------------------------------------------//

type PlayerCharacterApparelBase = {
  instanceId: string; //Unique identifier for this specific instance of the apparel item. This is used to track the item in the character's inventory and to differentiate between multiple instances of the same apparel item. Ex: "apparel-001"

  definitionId: ApparelDefinition["id"];

  equipped: boolean;
  equippedSide?: "left" | "right";

  currentHP?: number; //If apparel has HP, this is the current HP of the item.
  physicalDRReduction?: number;
  energyDRReduction?: number;
  radiationDRReduction?: number;
};

export type PlayerCharacterApparel =
  PlayerCharacterApparelBase &
  (
    | {
        apparelType: "armor";
        installedMods: ArmorModDefinition["id"][];
      }
    | {
        apparelType: "power armor";
        installedMods: PowerArmorModDefinition["id"][];
      }
    | {
        apparelType: "robot armor";
        installedMods: RobotModDefinition["id"][];
      }
    | {
        apparelType: "clothing" | "headgear" | "outfits" | "dog armor";
        installedMods: ApparelModDefinition["id"][];
      }
  );

//Ammo----------------------------------------------------------------------------------------------//

export type PlayerCharacterAmmo = {
  definitionId: AmmoDefinition["id"];
  quantity: number;
};

export type PlayerCharacterPerk = {
  definitionId: PerkDefinition["id"];
  rank: number;
};

export type PlayerCharacterSkills = Record<SkillName, CharacterSkill>;


//Inventory----------------------------------------------------------------------------------------------//

export type CharacterInventoryItem =
| PlayerCharacterWeapon
| PlayerCharacterApparel
| PlayerCharacterAmmo
| {
    definitionId: ConsumableDefinition["id"];
    quantity: number;
  }
| {
    definitionId: GenericItemDefinition["id"];
    quantity: number;
  };



//Player Character----------------------------------------------------------------------------------------------//

export type PlayerCharacter = {
  id: string;

  name: string;
  playerName?: string;
  origin?: string; //Swap string for origin type when implemented.
  gender?: "male" | "female" | "non-binary" | "other";

  level: number;
  xp?: number;
  totalXP?: number;

  maxHP: number;
  currentHP: number;
  rads: number;

  defense: number;
  initiative: number;
  meleeDamageBonus: number;

  luckPoints?: number;
  caps: number;

  special: SpecialStats;
  skills: PlayerCharacterSkills; 

  perks: PlayerCharacterPerk[];
  inventory: CharacterInventoryItem[];

  notes?: string;
};