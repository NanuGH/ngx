import { PersonModel } from "./personModel";

export interface EmployeeModel {
  Person:PersonModel;
  id: string;
  whoInserted: string;
  status: string;
  dmCodeDisabled: string;
  identifNumber: string;
  password: string;
  dmfunction: string;
  idRoles: string;
  email: string;
  whoUpdated: string;
}
