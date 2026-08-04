type AmmoCrafting =
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
        complexity: number;
        skill: string;
        requiredPerk?: string;
        rarity: string;
      };
    };

export type AmmoDefinition = {
  id: string;
  name: string;
  book?: string;
  bookPg?: number;
  description: string;
  
  effects?: {
    effectName?: string;
    effectDesc: string;
  }[];
  
  weight: number;
  weightDisplay?: string; //used if weight is <1 for display on card
  cost: number;
  rarity: number;
  qtyFound: string;

} & AmmoCrafting;
