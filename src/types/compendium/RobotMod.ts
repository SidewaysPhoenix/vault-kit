import type { GameEffect } from "./rules/GameEffect";

export type RobotModDefinition = {
  id: string;
  name: string;
 
  robotModType:  "module" |"vault jumpsuit" | "none";
  location?: "optics" | "main body" | "arms" | "legs" | "thruster" | "all";
  
  effects?: GameEffect[];
  
  weightOperation?: "add" | "subtract"; //used to determine how the mod affects the base robot armor weight.
  weight: number;
  
  costOperation?: "add" | "subtract"; //used to determine how the mod affects the base robot armor cost.
  cost: number;
  
  complexity: number;
  requiredPerk?: string;
  skill?: string;
  rarity: number | string;

  book?: string;
  bookPg?: number;
};
