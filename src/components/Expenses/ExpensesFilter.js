import React , {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({onYearFilter}) => {
    
    const [yearFilter, setYearFilter] = useState('');

    const onChangeHandler = (e) => {
        setYearFilter(e.target.value);
        onYearFilter(e.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={onChangeHandler} value={yearFilter}>
                    <option value='2022' >2022</option>
                    <option value='2021' >2021</option>
                    <option value='2020' >2020</option>
                    <option value='2019' >2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
