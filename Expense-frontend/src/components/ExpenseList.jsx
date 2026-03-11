function ExpenseList({ expenses, dispatch }) {

  function deleteExpenses(index){
    dispatch({
      type: "DELETE_EXPENSE",
      payload: index
    });
  }

  return (
    <div>

      {expenses.map((expense, index) => (

        <div key={index} className="expense-item">

          <h3>{expense.name}</h3>

          <p>₹{expense.amount}</p>

          <span className="category">{expense.category}</span>

          <button onClick={() => deleteExpenses(index)}>
            ❌
          </button>

        </div>

      ))}

    </div>
  );

}

export default ExpenseList;