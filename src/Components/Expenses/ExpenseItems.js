import React, {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItems=(props)=>{
    // const expenseDate= new Date(2021, 7, 28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount=243.5;
    const [title, setTitle]=useState(props.title);
    const clickHandler=()=>{
        setTitle("Updated!!");
        console.log(title);
    }

    return(
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
            <h2 >{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
        </li>
    );
}

export default ExpenseItems;