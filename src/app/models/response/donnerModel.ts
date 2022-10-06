import { PersonModel } from "./personModel";


export interface DonnerModel {

  id: string;
  namePerson: string;
  surnamePerson: string;
  dmBloodCode: string;
  dmDocIdent: string;
  birthday: Date;
  picturePerson: string;
  dmSex: string;
  dmHomeAdd: string;
  jobAddress: string;
  profession: string;
  grade: string;
  insertionDate: string;
  updateDate: string;
  whoInserted: string;
  whoUpdated: string;
  status: string;
  email: string;
  person:PersonModel;
}
