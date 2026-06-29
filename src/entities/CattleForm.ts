import { Cattle } from "./Cattle";

export type CattleForm = Omit<Cattle, "id">;
