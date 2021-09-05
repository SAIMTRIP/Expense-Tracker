import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
//import ExpenseItems from "./ExpenseItems";
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpenseChart';

function Expenses(props){
    const [year, setYear]=useState('2021');
    const yearSelectionHandler=(selectedYear)=>{
        //const year=selectedYear;
        setYear(selectedYear);
        //console.log(selectedYear);

    }
    const filteredExpenses=props.items.filter((expense)=>(expense.date.getFullYear().toString()===year));

    

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            setDefault={year}
            onYearSelection={yearSelectionHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList item={filteredExpenses}/>
          
        </Card>
      </div>
    );
}
export default Expenses;