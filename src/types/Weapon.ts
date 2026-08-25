import { AmmoDefinition } from "./Ammo";
import { Craftable } from "./rules/Crafting";
import type { WeaponModDefinition } from "./WeaponMod";

export type WeaponDefinition = {
  id: string;
  name: string;
  weaponType: "melee weapons" | "big guns" | "bows" | "energy weapons" | "explosives" | "melee weapons" | "small guns" | "throwing" |"unarmed" | "unique items" | "custom weapons" | "-";
  damageType: "physical" | "energy" | "radiation" | "poison";
  description: string;
  
  weaponDamage: number | "special";
  weaponRange: "reach" |"close" | "medium" | "long" | "extreme" | "-";
  fireRate?: number;
  weaponAmmo?: AmmoDefinition["id"][]; //Need to set validation against the list of AmmoDefinition ids to ensure that only valid ammo is applied to the weapon.

  weaponQualities?: string[];
  weaponQualitiesModifier?: number;
  weaponEffects?: string[];
  weaponEffectsModifier?: number;
  
  weight: number;
  cost: number;
  rarity: number;

  mods: WeaponModDefinition["id"][]; //Need to set validation against the list of WeaponModDefinition ids to ensure that only valid mods are applied to the weapon.

  book?: string;
  bookPg?: number;
} & Craftable;
