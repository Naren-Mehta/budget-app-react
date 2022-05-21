import Budgets from "./components/Budgets/Budgets";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const budgetList = [
    {
      id: "b1",
      name: "test budget",
      description: "test description",
      type: "DBU",
      period: "MONTHLY",
      start: "March 2022",
      end: "Jun 2022",
      scope: "Global",
      status: "status",
    },
    {
      id: "b1",
      name: "test budget",
      description: "test description",
      type: "DBU",
      period: "MONTHLY",
      start: "March 2022",
      end: "Jun 2022",
      scope: "Global",
      status: "status",
    },
    {
      id: "b1",
      name: "test budget",
      description: "test description",
      type: "DBU",
      period: "MONTHLY",
      start: "March 2022",
      end: "Jun 2022",
      scope: "Global",
      status: "status",
    },
  ];



  return (
    <div className="App">
      <Header/>
      <Budgets items={budgetList}></Budgets>
    </div>
  );
}

export default App;
