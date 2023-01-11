import { EmployeeModel } from './EmployeeModel';
import { PersonModel } from './personModel';

export interface BloodTestModel {
  hb: boolean,
  vdrl: boolean,
  hiv: boolean,
  aghbs: boolean,
  hcv: boolean,
  clinicalConc: string,
  obs: string,
  expirationDate: Date,
  sampleNumber: Date,
  dmConclusion: String,
}
