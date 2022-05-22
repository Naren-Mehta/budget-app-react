import { useReducer } from "react";
import BudgetContext from "./budget-context";

const defaultBudgetState = {
  budgetList: [
    {
      id: "budget_12",
      name: "test budget 1",
      description: "test description",
      type: "DBU",
      period: "MONTHLY",
      start: "March 2022",
      end: "Jun 2022",
      scope: "Global",
      status: "status",
    },
    {
      id: "budget_123",
      name: "test budget 2",
      description: "test description",
      type: "DBU",
      period: "MONTHLY",
      start: "March 2022",
      end: "Jun 2022",
      scope: "Global",
      status: "status",
    },
    {
      id: "budget_321",
      name: "test budget 3",
      description: "test description",
      type: "DBU",
      period: "MONTHLY",
      start: "March 2022",
      end: "Jun 2022",
      scope: "Global",
      status: "status",
    },
  ],
};
const budgetReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.budgetList.concat(action.budget);
    return {
      budgetList: updatedItems,
    };
  } else if (action.type === "UPDATE") {
    const budgetId = action.budget.id;
    const budgetIndex = state.budgetList.findIndex(
      (obj) => obj.id === budgetId
    );
    if (budgetIndex > -1) {
      state.budgetList[budgetIndex] = action.budget;
    }
    return {
      budgetList: state.budgetList,
    };
  } else if (action.type === "DELETE") {
    const budgetId = action.budget.id;
    const budgetIndex = state.budgetList.findIndex(
      (obj) => obj.id === budgetId
    );
    if (budgetIndex > -1) {
      state.budgetList.splice(budgetIndex, 1);
    }
    return {
      budgetList: state.budgetList,
    };
  }
  return defaultBudgetState;
};

const BudgetProvider = (props) => {
  const [budgetState, dispatchBudgetAction] = useReducer(
    budgetReducer,
    defaultBudgetState
  );

  const saveBudgetData = function (budgetObj) {
    const id = Math.floor(Math.random() * 1000);
    budgetObj.id = "budget_" + id;
    dispatchBudgetAction({
      type: "ADD",
      budget: budgetObj,
    });
  };

  const updateBudgetData = function (budgetObj) {
    dispatchBudgetAction({
      type: "UPDATE",
      budget: budgetObj,
    });
  };

  const deleteBudgetData = function (budget) {
    dispatchBudgetAction({
      type: "DELETE",
      budget: budget,
    });
  };

  const budgetContext = {
    budgetList: budgetState.budgetList,
    saveBudgetDataItem: saveBudgetData,
    updateBudgetDataItem: updateBudgetData,
    deleteBudgetDataItem: deleteBudgetData,
  };

  return (
    <BudgetContext.Provider value={budgetContext}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
