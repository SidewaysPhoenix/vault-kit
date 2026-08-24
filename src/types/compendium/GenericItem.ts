import { Craftable } from "./rules/Crafting";
import type { GameEffect } from "./rules/GameEffect";

export type GenericItemDefinition = {
  id: string;
  name: string;
  description: string;

  effects?: GameEffect[];
  
  weight: number;
  cost: number;
  rarity: string;

  book?: string;
  bookPg?: number;
} & Craftable;
