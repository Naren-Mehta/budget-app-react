import BudgetItems from "./BudgetItems";
import classes from "./Budget.module.css";
import Card from "../UI/Card";

const Budgets = (props) => {
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
          {props.items.map((budget) => (
            <BudgetItems key={budget.id} budget={budget} />
          ))}
        </table>
    </Card>
  );
};

export default Budgets;
