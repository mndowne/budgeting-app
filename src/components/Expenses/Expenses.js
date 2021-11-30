import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';
import React , {useState} from 'react';
import './Expenses.css';


const Expenses = ({expenses}) => {

    const [yearFilter, setYearFilter] = useState('');

    const yearFilterHandler = (year) => {
        console.log('this is from Expenses.js');
        setYearFilter(year);
    };
    
    console.log(yearFilter);

    return (
    <Card className="expenses">
        <ExpensesFilter onYearFilter={yearFilterHandler}/>
        <ExpenseItem expenses={expenses[0]}/>
        <ExpenseItem expenses={expenses[1]}/>
        <ExpenseItem expenses={expenses[2]}/>
    </Card>

    );
}

export default Expenses;

