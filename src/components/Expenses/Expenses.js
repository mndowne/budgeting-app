import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';
import React , {useState} from 'react';
import './Expenses.css';


const Expenses = ({expenses}) => {

    const [yearFilter, setYearFilter] = useState('2021');

    const yearFilterHandler = (selectedYear) => {
        setYearFilter(selectedYear);
    };

    const filteredExpenses = expenses.filter( expense => 
        expense.date.getFullYear().toString() === yearFilter 
    );

    return (
    <Card className="expenses">
        <ExpensesFilter selectedYear={yearFilter} onYearFilter={yearFilterHandler}/>
        {filteredExpenses.map( expense => <ExpenseItem key={expense.id} expenses={expense} /> ) }
    </Card>

    );
}

export default Expenses;

