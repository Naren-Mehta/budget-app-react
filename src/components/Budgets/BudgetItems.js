import { Fragment, useContext, useState } from "react";
import NewBudget from "../NewBudget/NewBudget";
import BudgetContext from "../store/budget-context";
import classes from "./BudgetItems.module.css";

const BudgetItems = (props) => {
  const [editBudgetFormShown, setEditBudgetFormShown] = useState(false);
  const budgetCtx = useContext(BudgetContext);

  const editBudgetForm = function (event) {
    event.preventDefault();
    setEditBudgetFormShown(true);
  };

  const closeBudgetForm = function (event) {
    setEditBudgetFormShown(false);
  };

  const deleteBudget = function(event){
    event.preventDefault();
    budgetCtx.deleteBudgetDataItem(budget)
  }
  const budget = props.budget;
  return (
    <Fragment>
      {editBudgetFormShown && <NewBudget onClose={closeBudgetForm} currentBudget={budget}/>}
      <tr>
        <td> {budget.name} </td>
        <td> {budget.description}</td>
        <td> {budget.type}</td>
        <td> {budget.period} </td>
        <td> {budget.start}</td>
        <td> {budget.end}</td>
        <td> {budget.scope} </td>
        <td> {budget.status}</td>
        <td>
          <a
            className={classes.editBudget}
            href="test"
            onClick={editBudgetForm}
          >
            Edit
          </a>
          <a
            className={classes.deleteBudget}
            href="test"
            onClick={deleteBudget}
          >
            Delete
          </a>
        </td>
      </tr>
    </Fragment>
  );
};

export default BudgetItems;
