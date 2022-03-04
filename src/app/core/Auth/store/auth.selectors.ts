import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authKey, AuthState } from "./auth.state";

export const selectFeatureAuth = createFeatureSelector<AuthState>(authKey);

export const selectCurrentUser = createSelector(
  selectFeatureAuth,
  (state: AuthState) => state.currentUser
);

export const selectCurrentToken = createSelector(
  selectFeatureAuth,
  (state) => state.currentUser?.fakeToken
);

export const selectUserName = createSelector(
  selectFeatureAuth,
  (state) => state.currentUser?.name
);

export const selectAuthitification = createSelector(
  selectFeatureAuth,
  (state: AuthState) => state.isAuthenticated
);
