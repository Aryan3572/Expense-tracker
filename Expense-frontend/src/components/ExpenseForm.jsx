import { useState , useRef} from "react";

function ExpenseForm({ expenses, dispatch }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category , setCategory] = useState("Food");

  const nameInputRef = useRef(null)

  function handleSubmit(e) {

    e.preventDefault();

    const newExpense = {
      name: name,
      amount: amount,
      category: category
    };

    dispatch({
      type:"ADD_EXPENSE",
      payload:newExpense
    })
    setName("");
    setAmount("");
    setCategory("Food");


    nameInputRef.current.focus();
  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        ref={nameInputRef}
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      
      <button type="submit">
        Add Expense
      </button>

    </form>

  );

}

export default ExpenseForm;