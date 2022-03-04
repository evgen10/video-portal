import { IUser } from "../../models/user";

export interface AuthState {
  currentUser: IUser | null
  currentToken: string,
  isAuthenticated: boolean
}

export const authKey = 'auth';
