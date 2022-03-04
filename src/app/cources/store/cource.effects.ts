import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { setLoader } from "src/app/elements/loading/store/loading.actions";
import { LoadingState } from "src/app/elements/loading/store/loading.state";
import { CourceService } from "../services/cource.service";
import { changeDeleteModal, deleteCource, getCources, getCourcesEnd } from "./cource.actions";
import { selectCourceIdForDelete } from "./cource.selectors";
import { CourcesState } from "./cource.state";

@Injectable()
export class CourceEffects {

  constructor(
    private actions$: Actions,
    private courceService: CourceService,
    private loadingState: Store<LoadingState>,
    private courceState: Store<CourcesState>) { }

  getCources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCources),

      switchMap((payload) => this.courceService.getAll(payload.number, payload.textFragment).pipe(
        map((cources) => {
          this.loadingState.dispatch(setLoader({ isLoading: false }));
          return getCourcesEnd({ courceList: cources })
        }),
        catchError(() => EMPTY)
      ))
    ))

  deleteCource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCource),
      withLatestFrom(this.courceState.select(selectCourceIdForDelete)),
      mergeMap(([, courceId]) => this.courceService.remove(courceId).pipe(
        map(() => {
          this.courceState.dispatch(getCources({}))
          return changeDeleteModal({
            deleteState:
            {
              isShowModal: false,
              courceId: 0
            }
          })
        })
      ))
    )
  )
}
