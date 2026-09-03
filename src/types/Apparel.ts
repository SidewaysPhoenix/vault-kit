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
  apparelType: "armor" | "power armor" | "robot armor" | "clothing" | "headgear" | "outfits" | "dog armor";
  description: string;

  location: "head" | "torso" | "arms" | "legs" | "all";
  
  effects?: GameEffect[];

  armorHP: number;
  
  weight: number;
  cost: number;
  rarity: string;

  book?: string;
  bookPg?: number;
} & ApparelModCompatibility & Craftable;



type ApparelModCompatibility =
  | {
      apparelType: "armor";
      allowedMods: ArmorModDefinition["id"][];
    }
  | {
      apparelType: "power armor";
      allowedMods: PowerArmorModDefinition["id"][];
    }
  | {
      apparelType: "robot armor";
      allowedMods: RobotModDefinition["id"][];
    }
  | {
      apparelType: "clothing" | "headgear" | "outfits" | "dog armor";
      allowedMods: ApparelModDefinition["id"][];
    };