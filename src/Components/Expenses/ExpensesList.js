import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpensesList.css';

const ExpensesList=(props)=>{

    //let expensesContent=<p>No expenses found</p>

    if(props.item.length===0){
        return(<h2 className='expenses-list__fallback'>
            No Expenses Found!!
        </h2>)
    }

 return(
    <li className='expenses-list'>
        {
        props.item.map((expense) => (
        <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))
    }
    </li>
 );   
}
export default ExpensesList