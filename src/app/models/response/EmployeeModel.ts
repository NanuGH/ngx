import { PersonModel } from "./personModel";
import { RolesModel } from "./RolesModel";

export interface EmployeeModel {
  Person:PersonModel;
  id: string;
  whoInserted: string;
  status: string;
  dmCodeDisabled: string;
  identifNumber: string;
  password: string;
  dmfunction: string;
  role: RolesModel;
  email: string;
  whoUpdated: string;
}
