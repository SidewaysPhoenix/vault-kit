import { Triggerable } from "./Trigger";


export type GameEffect = {
  effectName?: string; //Name of the effect, e.g. "Sealed Enviroment", "Enhanced Strength", etc.
  target: string; //Effect Mechanic to target, e.g. "health", "strength", "intelligence", etc.
  operation: "add" | "subtract" | "set" | "gain" | "remove";
  value?: number | string;
  durationUnit?: "round" | "scene";
  durationLength?: number;
  description: string;

} & Triggerable; //Trigger for the effect, e.g. "onHit", "onUse", "onEquip", "effectRolled", etc.