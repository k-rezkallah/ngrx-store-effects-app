import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromToppings from "../reducers/toppings.reducer";

// gets a "toppings" slice part from productsState
export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (productState: fromFeature.ProductsState) => productState.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  //   (toppingsState: fromToppings.ToppingState) => toppingsState.entities
  fromToppings.getToppingsEntities
);
export const getAllToppings = createSelector(getToppingsEntities, (entities) =>
  Object.keys(entities).map((id) => {
    return entities[parseInt(id, 10)];
  })
);
export const getToppingsLoading = createSelector(
  getToppingsState,
  //(toppingsState: fromToppings.ToppingState) => toppingsState.loading
  fromToppings.getToppingsLoading
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  //   (toppingsState: fromToppings.ToppingState) => toppingsState.loaded
  fromToppings.getToppingsLoaded
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppings.getSelectedToppings
);
