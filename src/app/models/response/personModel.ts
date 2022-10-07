import { LocalData } from "ng2-completer";

export interface PersonModel {
  id:string;
  namePerson: string;
  surnamePerson: string;
  dmBloodCode: string;
  dmDocIdent: string;
  birthday:LocalData;
  picturePerson: string;
  dmSex: string;
  dmHomeAdd: string;
  jobAddress: string;
  profession: string;
  grade: string;
  whoInserted: string;
  whoUpdated: string;
  status: string;
  email: string;
}
