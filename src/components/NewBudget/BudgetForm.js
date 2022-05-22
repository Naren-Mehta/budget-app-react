import { useContext, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import BudgetContext from "../store/budget-context";
import Button from "../UI/Button";
import classes from "./BudgetForm.module.css";

const BudgetForm = (props) => {
  const [error, setError] = useState(false);
  const budgetCtx = useContext(BudgetContext);

  const budgetObj = {
    name: "",
    description: "",
    type: "",
    period: "",
    start: "",
    end: "",
    scope: "",
    status: "",
  };

  const [userInput, setUserInput] = useState(
    props.currentBudget ? props.currentBudget : budgetObj
  );

  const validateForm = function () {
    const inputFields = [
      "name",
      "description",
      "type",
      "period",
      "start",
      "end",
      "scope",
      "status",
    ];
    for (var i = 0; i < inputFields.length; i++) {
      if (userInput[inputFields[i]] === "") {
        setError({
          title: "Invalid Input",
          message: "Please enter a valid input fields.",
        });
        return false;
      }
    }
    setError(null);
    return true;
  };

  const submitHandler = function (event) {
    event.preventDefault();

    if (validateForm()) {
      if (props.currentBudget) {
        budgetCtx.updateBudgetDataItem(userInput);
      } else {
        budgetCtx.saveBudgetDataItem(userInput);
      }

      setUserInput({
        name: "",
        description: "",
        type: "",
        period: "",
        start: "",
        end: "",
        scope: "",
        status: "",
      });
      props.onClose();
    } else {
      return;
    }
  };

  const updateValueHandler = function (event) {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <div className={classes["new-budget__controls"]}>
          <div className={classes["new-budget__control"]}>
            <h2>
              {props.currentBudget ? "Update Budget" : "Create a new Budget"}{" "}
            </h2>
          </div>

          {error && (
            <div className={classes["new-budget__control"]}>
              <p className={classes.error}>
                {error.title} ({error.message})
              </p>
            </div>
          )}

          <div className={classes["new-budget__control"]}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userInput.name}
              onChange={updateValueHandler}
            />
          </div>

          <div className={classes["new-budget__control"]}>
            <label>Description</label>
            <textarea
              rows="4"
              cols="50"
              name="description"
              value={userInput.description}
              onChange={updateValueHandler}
            />
          </div>

          <div className={classes["new-budget__control"]}>
            <label>Type</label>
            <input
              type="text"
              name="type"
              value={userInput.type}
              onChange={updateValueHandler}
            />
          </div>

          <div className={classes["new-budget__control"]}>
            <label>Period</label>
            <input
              type="text"
              name="period"
              value={userInput.period}
              onChange={updateValueHandler}
            />
          </div>

          <div className={classes["new-budget__control"]}>
            <label>Start</label>
            <input
              type="text"
              name="start"
              value={userInput.start}
              onChange={updateValueHandler}
            />
          </div>

          <div className={classes["new-budget__control"]}>
            <label>End</label>
            <input
              type="text"
              name="end"
              value={userInput.end}
              onChange={updateValueHandler}
            />
          </div>

          <div className={classes["new-budget__control"]}>
            <label>Scope</label>
            <input
              type="text"
              name="scope"
              value={userInput.scope}
              onChange={updateValueHandler}
            />
          </div>

          <div className={classes["new-budget__control"]}>
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={userInput.status}
              onChange={updateValueHandler}
            />
          </div>

          <div className="new-budget__actions">
            <Button type="submit" buttonType="primary">
              Add
            </Button>
            <Button type="button" onClick={props.onClose} buttonType="cancel">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default BudgetForm;
