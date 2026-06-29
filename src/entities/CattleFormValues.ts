import { Cattle } from "./Cattle";

export type CattleFormValues = Omit<Cattle, "id">;
