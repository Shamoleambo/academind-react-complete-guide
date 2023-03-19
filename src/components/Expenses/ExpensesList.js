import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpenseItemList = ({ expenses, yearFilter }) => {
  let expenseItems = expenses
    .filter(expense => expense.date.getFullYear().toString() === yearFilter)
    .map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  if (!yearFilter) {
    expenseItems = expenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  if (expenses.length === 0)
    return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>

  return <ul className='expenses-list'>{expenseItems}</ul>
}

export default ExpenseItemList
