import React , {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

const NewExpense = ({onAddExpense}) => {

    const [newExpense, setNewExpense ] = useState(false);


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        setNewExpense(false);
    };

    const startNewExpenseHandler = (e) => {
        setNewExpense(true);
    };

    const stopNewExpenseHandler = (e) => {
        setNewExpense(false);
    };


    return (
        <div className="new-expense">
            { newExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopNewExpenseHandler}/>}
            { ! newExpense &&  <button onClick={startNewExpenseHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;

