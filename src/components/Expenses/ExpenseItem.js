import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';

const ExpenseItem = ({expenses}) => {
    
    const [title, setTitle] = useState(expenses.title);

    const clickHandler = () => {
        setTitle('updated');
    };


    return (
    <Card className='expense-item'>
        <ExpenseDate date={expenses.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{expenses.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    );
}

export default ExpenseItem;

