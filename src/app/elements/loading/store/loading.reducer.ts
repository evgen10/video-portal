import { createReducer, on } from "@ngrx/store";
import { setLoader } from "./loading.actions";
import { LoadingState } from "./loading.state";

const intitialState : LoadingState  = {
  isLoading: false
};

export const loadingReducer = createReducer(
    intitialState,
    on(setLoader, (state, payload) => (
      {
        ...state,
        isLoading: payload.isLoading
      }
    ))
)
