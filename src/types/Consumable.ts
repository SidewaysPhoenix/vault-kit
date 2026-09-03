import { Craftable } from "./rules/Crafting";
import type { GameEffect } from "./rules/GameEffect";

export type ConsumableDefinition = {
  itemCategory: "aid";
  id: string;
  name: string;
  consumablesType: "beverages" | "chems" | "food" | "other" | "unique items";
  description: string;
  
  effects?: GameEffect[];
  
  weight: number;
  cost: number;
  rarity: string;

  book?: string;
  bookPg?: number;
} & Craftable;
