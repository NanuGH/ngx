import { PersonModel } from "./personModel";

export interface EmployeeModel {
  person:PersonModel;
  id: string;
  whoInserted: string;
  status: string;
  dmCodeDisabled: string
  updateDate: string;
  identifNumber: string;
  pw: string;
  dmFunction: string;
  idRole: string;
  email: string;
  whoUpdated: string;
}
