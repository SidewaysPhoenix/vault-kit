export type GameEffect = {
  target: string; //Effect Mechanic to target, e.g. "health", "strength", "intelligence", etc.
  operation: "add" | "subtract" | "set" | "gain" | "remove";
  value?: number | string;
  description: string;
};