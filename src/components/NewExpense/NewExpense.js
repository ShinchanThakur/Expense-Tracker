import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [showAddExpenseForm, setShowExpenseForm] = useState(false);
    const onAddExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowExpenseForm(false);
    }
    const onShowAddExpenseHandler = () => {
        setShowExpenseForm(true);
    }
    const onCancelAddExpenseHandler = () => {
        setShowExpenseForm(false);
    }
    return (
        <div className='new-expense'>
            {showAddExpenseForm && <ExpenseForm addExpenseHandler={onAddExpenseHandler} cancelAddExpenseHandler={onCancelAddExpenseHandler} />}
            {!showAddExpenseForm && <button onClick={onShowAddExpenseHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;