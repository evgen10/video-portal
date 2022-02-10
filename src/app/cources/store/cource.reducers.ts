import { createReducer, on } from "@ngrx/store";
import { changeDeleteModal, getCourcesEnd } from "./cource.actions";
import { CourcesState } from "./cource.state";

const initialState: CourcesState = {
  courceList: [],
  deleteState: {
    isShowModal: false,
    courceId: 0
  }
};

export const courceListReducer = createReducer(
  initialState,
  on(getCourcesEnd, (state, payload) =>
  (
    {
      ...state,
      courceList: payload.courceList
    }
  )),
  on(changeDeleteModal, (state, payload) => ({ ...state, deleteState: payload.deleteState })));

