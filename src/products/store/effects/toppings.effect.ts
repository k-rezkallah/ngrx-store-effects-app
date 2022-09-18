import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { switchMap, catchError, map } from "rxjs/operators";
import * as fromServices from "../../services/toppings.service";
import * as fromActions from "../actions";
@Injectable()
export class ToppingsEffect {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}
  @Effect()
  loadToppings$ = this.actions$.ofType(fromActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map((toppings) => new fromActions.LoadToppingsSuccess(toppings)),
        catchError((error) => {
          return of(new fromActions.LoadToppingsFail(error));
        })
      );
    })
  );
}
