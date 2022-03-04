import { createFeatureSelector, createSelector } from "@ngrx/store";
import { courcesKey, CourcesState } from "./cource.state";

export const selectorFeatureCources = createFeatureSelector<CourcesState>(courcesKey);

export const selectCourceList = createSelector(
  selectorFeatureCources,
  (state: CourcesState) => state.courceList
);

export const selectIsDeleteModalShowed = createSelector(
  selectorFeatureCources,
  (state: CourcesState) => state.deleteState.isShowModal
);

export const selectCourceIdForDelete = createSelector(
  selectorFeatureCources,
  (state: CourcesState) => state.deleteState.courceId
);
