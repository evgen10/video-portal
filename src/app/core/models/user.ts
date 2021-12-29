import { IName } from "./name";

export interface IUser {
  id: number;
  token: string,
  name: IName;
  login: string;
  password: string;
}
