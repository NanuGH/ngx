import { PersonModel } from "./personModel";

export interface EmployeeModel {
  Person:PersonModel;
  id: string;
  whoInserted: string;
  status: string;
  dmCodeDisabled: string;
  identNumber: string;
  pw: string;
  dmFunction: string;
  idRoles: string;
  email: string;
  whoUpdated: string;
}
