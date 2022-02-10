import { ICource } from "src/app/core/models/cource";


export interface DeleteState {
  isShowModal: boolean,
  courceId: number
}

export interface CourcesState {
  courceList: Array<ICource>,
  deleteState: DeleteState
}

export const courcesKey = 'cources';
