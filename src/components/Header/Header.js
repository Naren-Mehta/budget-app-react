import { Fragment, useState } from "react";
import NewBudget from "../NewBudget/NewBudget";
import Button from "../UI/Button";

import classes from "./Header.module.css";

const Header = () => {
  const [newBudgetFormShown, setNewBudgetFormShown] = useState(false);

  const showNewBudgetFormHandler = () => {
    setNewBudgetFormShown(true);
  };

  const hideNewBudgetFormHandler = () => {
    setNewBudgetFormShown(false);
  };
  return (
    <Fragment>
      {newBudgetFormShown && <NewBudget onClose={hideNewBudgetFormHandler} />}
      <div className={classes.header}>
        <div>
          <Button onClick={showNewBudgetFormHandler} buttonType="primary">New Budget</Button>
        </div>
        <div>
          <input
            class="searchBox"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
