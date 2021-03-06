import Modal from "../UI/Modal";
import BudgetForm from "./BudgetForm";
import classes from "./NewBudget.module.css";
const NewBudget = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.newBudget}>
        <BudgetForm
          onSaveBudgetData={props.onSaveBudgetData}
          onClose={props.onClose}
          currentBudget={props.currentBudget}
        />
      </div>
    </Modal>
  );
};

export default NewBudget;
