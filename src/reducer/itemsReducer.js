import { FETCH_ITEMS } from "../types";

const initialState = {
  items: [],
  totalBudget: "",
  totalExpense: "",
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload.expenses,
        totalBudget: action.payload.totalBudget,
        totalExpense: action.payload.expenses.reduce(
          (sum, expenses) => sum + expenses.amount,
          0
        )
      };

    default:
      return state;
  }
};
