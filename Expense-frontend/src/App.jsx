import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useState, useEffect, useReducer } from "react";
import { expenseReducer } from "./reducers/expenseReducer";

function App() {

  const [expenses, dispatch] = useReducer(expenseReducer,[],() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  }
);
  const [filter, setFilter] = useState("All");

  const filteredExpenses = filter === "All" ? expenses : expenses.filter(expense => expense.category === filter); 

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const total = expenses.reduce((sum, expense) => {
    return sum + Number(expense.amount);
  }, 0);

  return (
    <div>

      <Navbar />
    <div className="app-container">

      <div className="expense-card">

      <ExpenseForm
          dispatch={dispatch}
        />

        <div className="filters">

            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("Food")}>Food</button>
            <button onClick={() => setFilter("Travel")}>Travel</button>
            <button onClick={() => setFilter("Shopping")}>Shopping</button>
            <button onClick={() => setFilter("Bills")}>Bills</button>

      </div>
      <ExpenseList
        expenses={filteredExpenses}
        dispatch={dispatch}
        />

      <h2 className="total">Total Expenses: ₹{total}</h2>

      </div>
    </div>
        </div>
  );
}

export default App;