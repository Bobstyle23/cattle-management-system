import { Cattle } from "./Cattle";

interface BreedChart {
  breed: string;
  count: number;
}

interface StatusChart {
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
