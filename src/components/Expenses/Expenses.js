import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2022');
    const expenseYearSelector = (event) => {
        const expenseYear = event.target.value;
        setFilterYear(expenseYear);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onExpenseYearSelection={expenseYearSelector} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;