import { Action } from "@ngrx/store";
import { Pizza } from "src/products/models/pizza.model";
import * as fromPizzasAction from "../actions/pizza.actions";

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loading: boolean;
  loaded: boolean;
}
export const initialState: PizzaState = {
  entities: {},
  loading: false,
  loaded: false,
};

export function reducer(
  state = initialState,
  action: fromPizzasAction.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzasAction.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case fromPizzasAction.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;
      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza,
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
    case fromPizzasAction.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromPizzasAction.UPDATE_PIZZA_SUCCESS:
    case fromPizzasAction.CREATE_PIZZA_SUCCESS: {
      const newPizza = action.payload;
      const entities = { ...state.entities, [newPizza.id]: newPizza };
      return {
        ...state,
        entities,
      };
    }
    case fromPizzasAction.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      // destructing removed pizza and spread the rest
      const { [pizza.id]: removed, ...entities } = state.entities;
      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
