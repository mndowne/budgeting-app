import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';
import React , {useState} from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';


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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
    </Card>

    );
}

export default Expenses;

