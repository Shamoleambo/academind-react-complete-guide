import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from './../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState('')

  const onYearFilter = year => {
    setYearFilter(year)
  }

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

  return (
    <Card className='expenses'>
      <div className='expenses-filter'>
        <ExpensesFilter expenses={expenses} onYearFilter={onYearFilter} />
      </div>
      {expenseItems}
    </Card>
  )
}

export default Expenses
