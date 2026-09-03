import { Craftable } from "./rules/Crafting";
import type { GameEffect } from "./rules/GameEffect";

export type AmmoDefinition = {
  itemCategory: "ammo";
  id: string;
  name: string;
  book?: string;
  bookPg?: number;
  description: string;
  
  effects?: GameEffect[];

  weight: number;
  weightDisplay?: string; //used if weight is <1 for display on card
  cost: number;
  rarity: number | string;
  qtyFoundBase?: number;
  qtyFoundDiceRoll?: number;
  qtyFoundMultiplier?: number;

} & Craftable;
