import { IName } from "./name";

export interface IUser {
  id: number;
  fakeToken: string,
  name: IName;
  login: string;
  password: string;
}
