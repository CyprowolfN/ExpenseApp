import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expense item evaluated by react");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title + "|$" + props.amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__price">{props.id}</h2>
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <div className="new-expense__actions">
        <button type="submit" onClick={clickHandler}>
          Click..
        </button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
