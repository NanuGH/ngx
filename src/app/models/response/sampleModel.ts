import { EmployeeModel } from './EmployeeModel';
import { PersonModel } from './personModel';

export interface SampleModel {
  hb: boolean,
  vdrl: boolean,
  hiv: boolean,
  aghbs: boolean,
  hcv: boolean,
  clinicalConc: string,
  obs: string,
  expirationDate: Date,
  sampleNumber: Date,
  dmConclusion: string;
}
