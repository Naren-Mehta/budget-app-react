import { useState } from "react";
import Button from "../UI/Button";
import classes from "./BudgetForm.module.css";

const submitHandler = function (event) {
  event.preventDefault();
  console.log("========submit=============")
};

const BudgetForm = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    description: "",
    type: "",
    period: "",
    start: "",
    end: "",
    scope: "",
    status: "",
  });

  const updateValueHandler = function (event) {
    console.log(event);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-budget__controls"]}>
        <div className={classes["new-budget__control"]}>
          <h2>Create a new Budget</h2>
        </div>

        <div className={classes["new-budget__control"]}>
          <label>Name</label>
          <input
            type="text"
            value={userInput.name}
            onChange={updateValueHandler}
          />
        </div>

        <div className={classes["new-budget__control"]}>
          <label>Description</label>
          <textarea
            rows="4"
            cols="50"
            value={userInput.description}
            onChange={updateValueHandler}
          />
        </div>

        <div className={classes["new-budget__control"]}>
          <label>Type</label>
          <input
            type="text"
            value={userInput.type}
            onChange={updateValueHandler}
          />
        </div>

        <div className={classes["new-budget__control"]}>
          <label>Period</label>
          <input
            type="text"
            value={userInput.period}
            onChange={updateValueHandler}
          />
        </div>

        <div className={classes["new-budget__control"]}>
          <label>Start</label>
          <input
            type="text"
            value={userInput.start}
            onChange={updateValueHandler}
          />
        </div>

        <div className={classes["new-budget__control"]}>
          <label>End</label>
          <input
            type="text"
            value={userInput.end}
            onChange={updateValueHandler}
          />
        </div>

        <div className={classes["new-budget__control"]}>
          <label>Scope</label>
          <input
            type="text"
            value={userInput.scope}
            onChange={updateValueHandler}
          />
        </div>

        <div className="new-budget__actions">
          <Button type="submit" buttonType="primary">Add</Button>
          <Button type="button" onClick="" buttonType="cancel">Cancel</Button>
        </div>
      </div>
    </form>
  );
};

export default BudgetForm;
