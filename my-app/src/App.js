import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "ID:AW30192",
      title: "Book",
      amount: 20,
      date: new Date(2023, 0, 20),
    },
    {
      id: "ID:AW30193",
      title: "Groceries",
      amount: 85,
      date: new Date(2023, 1, 22),
    },
    {
      id: "ID:AW30194",
      title: "Cat-food",
      amount: 25,
      date: new Date(2023, 2, 27),
    },
    {
      id: "ID:AW30195",
      title: "Christmas",
      amount: 80,
      date: new Date(2023, 11, 25),
    },
  ];

  const addExpenseDataHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense  onAddExpenseData={addExpenseDataHandler}/>
      <Expenses expenseItem={expenses} />
    </div>
  );
};

export default App;
