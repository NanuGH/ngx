import { PersonModel } from "./personModel";

export interface DonnerModel {
  idPerson:PersonModel;
  dmTypeDonor: string;
  personalBackground: string;
  clinicalExam: string;
  physicalExam: string;
  /* summoned: true; */
  kell: string;
  celFalcif: boolean;
  dmHemolisina: string;
  whoInserted: string;
  whoUpdated: string;
  phenotype: string;
  status: string;
}
