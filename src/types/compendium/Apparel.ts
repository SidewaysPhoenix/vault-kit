import type { GameEffect } from "./rules/GameEffect";
import type { ApparelModDefinition } from "./ApparelMod";
import { Craftable } from "./rules/Crafting";

export type ApparelDefinition = {
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

  mods: ApparelModDefinition["id"][]; //Need to set validation against the list of ApparelModDefinition ids to ensure that only valid mods are applied to the apparel.

  book?: string;
  bookPg?: number;
} & Craftable;
