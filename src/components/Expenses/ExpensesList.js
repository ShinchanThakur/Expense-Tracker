import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpenseList = (props) => {
    const expenses = props.expenses;
    if (expenses.length === 0) {
        return (<h2 className="expenses-list__fallback">No expense found</h2>)
    }
    if (expenses.length > 0) {
        return (
            <ul className="expenses-list">
                {
                    expenses.map(expense =>
                        <ExpenseItem
                            key={expense.id}
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount} />
                    )
                }
            </ul>
        )
    }
}

export default ExpenseList;