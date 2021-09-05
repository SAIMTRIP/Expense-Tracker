//import ExpenseItems from './Components/ExpenseItems'
import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import Expenses from './Components/Expenses/Expenses'
//import AddNewExpense from './Components/NewExpense/AddNewExpense';
import NewExpense from './Components/NewExpense/NewExpense';
import Chart from './Components/Chart/Chart'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
 
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    //console.log(expenses);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;