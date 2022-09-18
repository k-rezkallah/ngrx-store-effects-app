import * as fromToppings from "../actions/toppings.actions";

import { Topping } from "src/products/models/topping.model";

export interface ToppingState {
  entities: { [id: number]: Topping };
  loading: boolean;
  loaded: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingState = {
  entities: {},
  loading: false,
  loaded: false,
  selectedToppings: [],
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingAction
): ToppingState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping,
          };
        },
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings,
      };
    }
  }

  return state;
}

// helpfull functions to access the state
export const getToppingsEntities = (state: ToppingState) => state.entities;
export const getToppingsLoaded = (state: ToppingState) => state.loaded;
export const getToppingsLoading = (state: ToppingState) => state.loading;
export const getSelectedToppings = (state: ToppingState) =>
  state.selectedToppings;
