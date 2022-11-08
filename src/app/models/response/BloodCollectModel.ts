import { EmployeeModel } from './EmployeeModel';
import { PersonModel } from "./personModel";

export interface BloodCollectModel {
  id: string;
  qtdde:string,
  collectionNumber:string,
  externCollection: string,
  whoUpdated: string,
  whoInserted: string
  Person:PersonModel;
  Employee: EmployeeModel;
}
