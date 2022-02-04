import { createAction, createReducer, on } from "@ngrx/store";
import { login, getUser, logout } from "./auth.actions";
import { AuthState } from "./auth.state";

const intialState: AuthState = {
  currentUser: null,
  currentToken: '',
  isAuthenticated: false
}

export const authReducer = createReducer(intialState,
  on(logout, (state) => (
    {
      ...state,
      currentUser: null,
      currentToken: '',
      isAuthenticated: false
    })
  ),
  on(getUser, (state, loginData) => (
    {
      ...state,
      currentUser: loginData.user,
      isAuthenticated: loginData.isAuthenticated
    })
  )
);


