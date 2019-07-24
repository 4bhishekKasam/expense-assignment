import { FETCH_ITEMS, UPDATE_TOTAL_BUDGET } from "../types";
import data from "../data.json";

export const fetchItems = () => {
  return dispatch => dispatch({ type: FETCH_ITEMS, payload: data });
};

export const updateTotalBudget = value => {
  return dispatch => dispatch({ type: UPDATE_TOTAL_BUDGET, payload: value });
};
