import type { GameEffect } from "./rules/GameEffect";

export type ArmorModDefinition = {
  id: string;
  name: string;
  namingPrefix: string;
   
  armorModType:  "material" |"upgrade";
  location?: "head" | "torso" | "arms" | "legs" | "all";
  
  effects?: GameEffect[];
  
  weightOperation?: "add" | "subtract"; //used to determine how the mod affects the base armor weight.
  weight: number;
  
  costOperation?: "add" | "subtract"; //used to determine how the mod affects the base armor cost.
  cost: number;
  
  complexity: number;
  requiredPerk?: string;
  skill?: string;
  rarity: number | string;

  book?: string;
  bookPg?: number;
};
