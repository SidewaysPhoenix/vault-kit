export type GameEffect = {
  effectName?: string; //Name of the effect, e.g. "Sealed Enviroment", "Enhanced Strength", etc.
  target: string; //Effect Mechanic to target, e.g. "health", "strength", "intelligence", etc.
  operation: "add" | "subtract" | "set" | "gain" | "remove";
  value?: number | string;
  description: string;
};