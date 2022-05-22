import Budgets from "./components/Budgets/Budgets";
import "./App.css";
import Header from "./components/Header/Header";
import BudgetProvider from "./components/store/BudgetProvider";

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <Header />
        <Budgets/>
      </div>
    </BudgetProvider>
  );
}

export default App;
