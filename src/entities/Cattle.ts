import { Gender } from "./Gender";
import { Status } from "./Status";

export interface Cattle {
  id: string;
  tagNumber: string;
  breed: string;
  gender: Gender;
  status: Status;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
}
