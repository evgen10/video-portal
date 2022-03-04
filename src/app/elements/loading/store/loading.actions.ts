import { createAction, props } from "@ngrx/store"

const loadingActionKey = 'LOADING'

export const setLoader = createAction(
  `[${loadingActionKey}] Set loader`,
  props<{isLoading: boolean}>()
);

