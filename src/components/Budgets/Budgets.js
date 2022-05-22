import BudgetItems from "./BudgetItems";
import classes from "./Budget.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import BudgetContext from "../store/budget-context";

const Budgets = (props) => {
  const budgetCtx = useContext(BudgetContext);
  const budgetList = budgetCtx.budgetList;
  return (
    <Card className={classes.budget}>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Period</th>
            <th>Start</th>
            <th>End</th>
            <th>Scope</th>
            <th>Budget Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {budgetList.map((budget) => (
            <BudgetItems key={budget.id} budget={budget} />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Budgets;
