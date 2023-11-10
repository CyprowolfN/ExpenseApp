import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2020');


  const filterChangeHandler = (selectedYear) => {
    console.log("Logged in Expenses.js");
    setFilteredYear(selectedYear);
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeYear={filterChangeHandler}/>
      <ExpenseItem
        id={props.expenseItem[0].id}
        title={props.expenseItem[0].title}
        amount={props.expenseItem[0].amount}
        date={props.expenseItem[0].date}
      />
      <ExpenseItem
        id={props.expenseItem[1].id}
        title={props.expenseItem[1].title}
        amount={props.expenseItem[1].amount}
        date={props.expenseItem[1].date}
      />
      <ExpenseItem
        id={props.expenseItem[2].id}
        title={props.expenseItem[2].title}
        amount={props.expenseItem[2].amount}
        date={props.expenseItem[2].date}
      />
      <ExpenseItem
        id={props.expenseItem[3].id}
        title={props.expenseItem[3].title}
        amount={props.expenseItem[3].amount}
        date={props.expenseItem[3].date}
      />
    </Card>
    </div>
  );
};

export default Expenses;
