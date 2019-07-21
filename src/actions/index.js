import { FETCH_ITEMS } from "../types";
import data from '../data.json';

export const fetchItems = () => {
    return dispatch => dispatch({ type: FETCH_ITEMS, payload: data });
};