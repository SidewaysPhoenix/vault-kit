import type { GameEffect } from "./rules/GameEffect";


type WeaponModCrafting =
  | {
      craftable: false;
      crafting?: never;
    }
  | {
      craftable: true;
      crafting: {
        materials: {
          name: string;
          quantity: number;
        }[];
        
        skill: string;
        
        rarity: string;
      };
    };


export type WeaponModDefinition = {
  id: string;
  name: string;
  book?: string;
  bookPg?: number;
  
  effects?: GameEffect[];
  
  complexity: number;
  requiredPerk?: string;
  weight: number;
  weightDisplay?: string; //used if weight is <1 for display on card
  cost: number;
  rarity: number;
  namingPrefix: string;
 

} & WeaponModCrafting;
