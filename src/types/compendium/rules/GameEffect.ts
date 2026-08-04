export type GameEffect = {
  target: string;
  operation: "add" | "subtract" | "set" | "gain" | "remove";
  value?: number | string;
  description: string;
};