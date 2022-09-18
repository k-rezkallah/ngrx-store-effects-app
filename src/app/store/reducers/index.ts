import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params,
} from "@angular/router";
import * as fromRouterReducer from "@ngrx/router-store";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
export interface State {
  routerReducer: fromRouterReducer.RouterReducerState<RouterStateUrl>;
}
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouterReducer.routerReducer,
};

// selectors
export const getRouterState =
  createFeatureSelector<fromRouterReducer.RouterReducerState<RouterStateUrl>>(
    "routerReducer"
  );

// serializer

export class CustomSerializer
  implements fromRouterReducer.RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
