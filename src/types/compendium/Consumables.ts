import type { GameEffect } from "./rules/GameEffect";

export type ConsumablesDefinition = {
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
};
