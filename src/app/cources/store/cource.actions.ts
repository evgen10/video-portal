import { createAction, props } from "@ngrx/store"
import { ICource } from "src/app/core/models/cource";
import { DeleteState } from "./cource.state";

const courceListActionKey = 'Cource List'

export const getCources = createAction(
  `[${courceListActionKey} Get cource list start]`,
  props<{ number?: number, textFragment?: string }>()
);

export const getCourcesEnd = createAction(
  `[${courceListActionKey} Get cource list finish]`,
  props<{ courceList: Array<ICource> }>()
)

export const changeDeleteModal = createAction(
  `[${courceListActionKey} Change delete modal state]`,
  props<{ deleteState: DeleteState }>()
)

export const deleteCource = createAction(
  `[${courceListActionKey} Delete cource modal state]`
)
