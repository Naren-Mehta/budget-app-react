const BudgetItems = (props) => {
  const budget = props.budget;
  return (
    <tr>
      <td> {budget.name} </td>
      <td> {budget.description}</td>
      <td> {budget.type}</td>
      <td> {budget.period} </td>
      <td> {budget.start}</td>
      <td> {budget.end}</td>
      <td> {budget.scope} </td>
      <td> {budget.status}</td>
      <td> Edit</td>
    </tr>
  );
};

export default BudgetItems;
