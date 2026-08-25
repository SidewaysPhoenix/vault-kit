export type Triggers = {
  trigger: {
    triggerEvent: "onHit" | "onUse" | "onEquip" | "effectRolled" | "onDamage";
    requiredCount?: number; //If the trigger is based on a number of events, this is the number of events needed to trigger the effect
    target: string; //Entity to target, e.g. "self", "target", "allies", "enemies", etc.
  };
};

export type Triggerable =
  | {
      triggerable: false;
      triggerEvents?: never;
    }
  | {
      triggerable: true;
      triggerEvents: Triggers[];
    };