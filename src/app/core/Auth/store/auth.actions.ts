import { createAction, props } from "@ngrx/store";
import { ILogin } from "../../models/login";
import { IToken } from "../../models/token";
import { IUser } from "../../models/user";

const authAuctionKey = 'AUTH'

export const login = createAction(
  `[${authAuctionKey}] Login`,
  props<{ loginData: ILogin }>()
);

export const getUser = createAction(
  `[${authAuctionKey}] Get user`,
  props<{ user: IUser, isAuthenticated: boolean }>()
)

export const getToken = createAction(
  `[${authAuctionKey}] Get token`,
  props<{ currentToken: IToken }>()
)

export const logout = createAction(
  `[${authAuctionKey}] Logout`
);
