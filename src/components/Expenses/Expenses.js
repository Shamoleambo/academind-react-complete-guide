import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from './../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      <div className='expenses-filter'>
        <ExpensesFilter expenses={expenses} />
      </div>
      {expenses.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expenses
