import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import Card from './../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState('')

  const onYearFilter = year => {
    setYearFilter(year)
  }

  return (
    <Card className='expenses'>
      <div className='expenses-filter'>
        <ExpensesFilter expenses={expenses} onYearFilter={onYearFilter} />
      </div>
      <ExpensesList expenses={expenses} yearFilter={yearFilter} />
    </Card>
  )
}

export default Expenses
