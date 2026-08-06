import type { GameEffect } from "./rules/GameEffect";

export type ApparelModDefinition = {
  id: string;
  name: string;
  namingPrefix: string;
 
  apparelModType:  "ballistic" |"vault jumpsuit";
  location?: "head" | "torso" | "arms" | "legs" | "all";
  
  effects?: GameEffect[];
  
  weightOperation?: "add" | "subtract"; //used to determine how the mod affects the base apparel weight.
  weight: number;
  
  costOperation?: "add" | "subtract"; //used to determine how the mod affects the base apparel cost.
  cost: number;
  
  complexity: number;
  requiredPerk?: string;
  skill?: string;
  rarity: number | string;

  book?: string;
  bookPg?: number;
};
