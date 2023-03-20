import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import Card from './../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState('')

  const onYearFilter = year => {
    setYearFilter(year)
  }

  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear().toString() === yearFilter
  )

  return (
    <Card className='expenses'>
      <ExpensesFilter expenses={expenses} onYearFilter={onYearFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={expenses} yearFilter={yearFilter} />
    </Card>
  )
}

export default Expenses
