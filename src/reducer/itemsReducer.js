import { FETCH_ITEMS, UPDATE_TOTAL_BUDGET } from "../types";

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

    case UPDATE_TOTAL_BUDGET:
      console.log("---");
      return {
        ...state,
        totalBudget: action.payload
      };

    default:
      return state;
  }
};
