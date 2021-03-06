import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';


const DummyDataxpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020,7,14)
    },
    {
        id: 'e2',
        title: 'Gum',
        amount: 4.00,
        date: new Date(2020,7,15)
    },
    {
        id: 'e3',
        title: 'Kale',
        amount: 8.82,
        date: new Date(2020,7,16)
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DummyDataxpenses);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };


  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={ expenses } />
    </div>
  );
}

export default App;
