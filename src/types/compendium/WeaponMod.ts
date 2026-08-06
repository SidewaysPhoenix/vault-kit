import type { GameEffect } from "./rules/GameEffect";

export type WeaponModDefinition = {
  id: string;
  name: string;
  namingPrefix: string;
 
  weaponModType:  "receiver" |"barrel" | "stock" |"capacitor" | "grip" | "magazine" | "sight" | "muzzle" | "dish" | "fuel" | "propellant tank" | "nozzle"| "concentrate" | "container" | "cannister";
  
  effects?: GameEffect[];
  
  weightOperation?: "add" | "subtract"; //used to determine how the mod affects the base weapon weight.
  weight: number;

  costOperation?: "add" | "subtract"; //used to determine how the mod affects the base weapon cost.  
  cost: number;

  
  complexity: number;
  skill: string;
  requiredPerk?: string;
  rarity: number | string;
  
  book?: string;
  bookPg?: number;
};
