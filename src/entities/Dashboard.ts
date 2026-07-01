import { Cattle } from "./Cattle";

export interface BreedChart {
  breed: string;
  count: number;
}

export interface StatusChart {
  status: string;
  value: number;
  fill: string;
}

export interface Dashboard {
  total: number;
  healthy: number;
  sick: number;
  sold: number;
  deceased: number;
  pregnant: number;
  breedChart: BreedChart[];
  statusChart: StatusChart[];
  recentCattle: Cattle[];
}
