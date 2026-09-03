export type CraftingData = {
  materials: {
    itemId: string;
    name: string;
    qty: number;
  }[];
  complexity?: number;
  skill?: string;
  requiredPerk?: string[];
  rarity?: string;
};

export type Craftable =
  | {
      craftable: false;
      crafting?: never;
    }
  | {
      craftable: true;
      crafting: CraftingData;
    };