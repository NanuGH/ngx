import { EmployeeModel } from './EmployeeModel';
import { PersonModel } from './personModel';

export interface RolesModel {

  id:string
  insertionDate:string
  updateDate:string
  whoInserted:string
  WhoUpdated:string
  dmCodeDisabled:string
  name:string
  code:string
}
