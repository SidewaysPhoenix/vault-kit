import type { Triggerable } from "./Trigger";


export type GameEffect = {
  effectName?: string; //Name of the effect, e.g. "Sealed Enviroment", "Enhanced Strength", etc.
  description: string;
  target: "self" | "actionTarget" | "triggerSource" | "area";
  range?: "reach" | "close" | "medium" | "long" | "extreme" | "unlimited"; //Used if area is selected as the target, e.g. "reach", "close", "medium", "long", "extreme", or "unlimited"
  rangeFilter?: "allies" | "enemies" | "all"; //Filter for the range, e.g. "allies", "enemies", or "all"
  
  gameStat?: string; //Game stat to modify, e.g. "strength", "dexterity", "intelligence", etc.
  operation?: "add" | "subtract" | "set" | "gain" | "remove";
  value?: number | string;
  
  durationUnit?: "round" | "scene";
  durationLength?: number;
  

} & Triggerable; //Trigger for the effect, e.g. "onHit", "onUse", "onEquip", "effectRolled", etc.