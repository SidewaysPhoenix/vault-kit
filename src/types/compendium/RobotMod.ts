import type { GameEffect } from "./rules/GameEffect";

export type RobotModDefinition = {
  id: string;
  name: string;
 
  robotModType:  "module" | "none";
  location: "optics" | "main body" | "arms" | "legs" | "thruster" | "all";
  
  effects?: GameEffect[];
  
  weightOperation: "add" | "subtract"| "none"; //used to determine how the mod affects the base robot armor weight.
  weight: number;
  
  costOperation: "add" | "subtract"| "none"; //used to determine how the mod affects the base robot armor cost.
  cost: number;
  
  complexity: number;
  requiredPerk: string[];
  skill: string;
  rarity: string;

  book?: string;
  bookPg?: number;
};
