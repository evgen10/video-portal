import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loadingKey, LoadingState } from "./loading.state";

export const selectLoadingFeature = createFeatureSelector<LoadingState>(loadingKey)

export const selectLoading = createSelector(
  selectLoadingFeature,
  (state: LoadingState) => state.isLoading)
