import type { GameEffect } from "./rules/GameEffect";
import type { ApparelModDefinition } from "./ApparelMod";
import { Craftable } from "./rules/Crafting";
import { ArmorModDefinition } from "./ArmorMod";
import { PowerArmorModDefinition } from "./PowerArmorMod";
import { RobotModDefinition } from "./RobotMod";

export type ApparelDefinition = {
  itemCategory: "apparel";
  id: string;
  name: string;
  apparelType: "armor" | "clothing" | "dog armor" | "headgear" | "outfits" | "power armor" | "robot armor";
  description: string;

  location: "head" | "torso" | "arms" | "legs" | "all";
  
  effects?: GameEffect[];

  armorHP: number;
  
  weight: number;
  cost: number;
  rarity: string;

  allowedMods: 
  | ApparelModDefinition["id"][]//Need to set validation against the list of ApparelModDefinition ids to ensure that only valid mods are applied to the apparel.
  | ArmorModDefinition["id"][]
  | PowerArmorModDefinition["id"][]
  | RobotModDefinition["id"][]; 

  book?: string;
  bookPg?: number;
} & Craftable;
