import { Action } from "@ngrx/store";
import { Pizza } from "src/products/models/pizza.model";

//------ load pizza actions------------------
//ACTIONS constants
export const LOAD_PIZZAS = "[Products] Load Pizzas";
export const LOAD_PIZZAS_FAIL = "[Products] Load Pizzas Fail";
export const LOAD_PIZZAS_SUCCESS = "[Products] Load Pizzas Success";

// actions class
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

//------ create piza actions------------------
//ACTIONS constants
export const CREATE_PIZZA = "[Products] Create Pizzas";
export const CREATE_PIZZA_FAIL = "[Products] Create Pizzas Fail";
export const CREATE_PIZZA_SUCCESS = "[Products] Create Pizzas Success";

// actions classes

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

//------ update piza actions------------------
//ACTIONS constants
export const UPDATE_PIZZA = "[Products] UPDATE Pizzas";
export const UPDATE_PIZZA_FAIL = "[Products] UPDATE Pizzas Fail";
export const UPDATE_PIZZA_SUCCESS = "[Products] UPDATE Pizzas Success";

// actions classes
export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}
export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

//------ create piza actions------------------
//ACTIONS constants
export const REMOVE_PIZZA = "[Products] REMOVE Pizzas";
export const REMOVE_PIZZA_FAIL = "[Products] REMOVE Pizzas Fail";
export const REMOVE_PIZZA_SUCCESS = "[Products] REMOVE Pizzas Success";

// actions classes
export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: Pizza) {}
}
export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: any) {}
}
export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

//action types
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasSuccess
  | LoadPizzasFail
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | RemovePizza
  | RemovePizzaFail
  | RemovePizzaSuccess;
