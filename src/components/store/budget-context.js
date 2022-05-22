import React from "react";

const BudgetContext = React.createContext({
  budgetList: [],
  saveBudgetDataItem: (obj) => {},
  updateBudgetDataItem: (obj) => {},
  deleteBudgetDataItem: (id) => {},
});

export default BudgetContext;
