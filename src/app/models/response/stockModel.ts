import { EmployeeModel } from './EmployeeModel';
import { PersonModel } from './personModel';

export interface StockModel {
  id: string;
  insertionDate:string,
  updateDate:string,
  externCollection: string,
  whoUpdated: string,
  whoInserted: string,
  status:string,
  dmCodeDisabled: string,
  expirationDate: string,
  dmCodeStockType: string,
  collectionNumber: string,

  Person:PersonModel;
  Employee: EmployeeModel;
}
