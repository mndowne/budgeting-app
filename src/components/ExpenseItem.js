import './ExpenseItem.css';

const ExpenseItem = ({expenses}) => {

    const month = expenses.date.toLocaleString('en-US',{month: 'long'})
    const day = expenses.date.toLocaleString('en-US',{day: '2-digit'})
    const year = expenses.date.getFullYear();

        console.log(expenses.title);
    return (
    <div className='expense-item'>
    <div>{month}</div>
    <div>{day}</div>
    <div>{year}</div>
    <div className='expense-item__description'>
        <h2>{expenses.title}</h2>
        <div className='expense-item__price'>{expenses.amount}</div>
    </div>

    </div>
    );
}

export default ExpenseItem;

