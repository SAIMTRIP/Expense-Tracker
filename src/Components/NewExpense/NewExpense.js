import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';



const NewExpense=(props)=>{
    const [isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            
            id:Math.random().toString(),
            ...enteredExpenseData
        };
        //console.log("Hi from NewExpense");
        //console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const CancelHandler=()=>{
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {!isEditing&&<button className='new-expense__actions' onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelHandler}/>}
        </div>
    );
}
export default NewExpense;
