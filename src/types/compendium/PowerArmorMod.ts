import type { GameEffect } from "./rules/GameEffect";

export type PowerArmorModDefinition = {
  id: string;
  name: string;
  namingPrefix: string;
 
  
  powerArmorModType:  "plating" |"system" | "upgrade";
  location?: "head" | "torso" | "arms" | "legs" | "all";
  
  effects?: GameEffect[];
  
  armorHPOperation?: "add" | "subtract"; //used to determine how the mod affects the base power armor piece armor HP.
  armorHP: number;
  
  weightOperation?: "add" | "subtract"; //used to determine how the mod affects the base power armor piece weight.
  weight: number;
  
  costOperation?: "add" | "subtract"; //used to determine how the mod affects the base power armor piece cost.
  cost: number;
  
  complexity: number;
  requiredPerk?: string;
  skill?: string;
  rarity: number | string;

  book?: string;
  bookPg?: number;
};
