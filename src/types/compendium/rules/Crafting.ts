export type CraftingData = {
  materials?: {
    name: string;
    quantity: number;
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