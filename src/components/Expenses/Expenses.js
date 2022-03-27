import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpense = props.items.filter(expense =>
  {
    return expense.date.getFullYear().toString() === filteredYear;
        }
  )
  
  return (
    <li>
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses = {filteredExpense} />
        <ExpenseList items={filteredExpense}/>
        
      </Card>
      </div>
    </li>
  );
};

export default Expenses;