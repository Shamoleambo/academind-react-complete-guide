import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const [newExpenseForm, setNewExpenseForm] = useState(false)

  const saveExpenseDataHandler = inputExpenseData => {
    const expenseData = { ...inputExpenseData, id: Math.random().toString() }
    props.onAddExpense(expenseData)
  }
  const displayForm = () => {
    setNewExpenseForm(prevState => !prevState)
  }
  return (
    <div className='new-expense'>
      {newExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeNewExpenseForm={displayForm}
        />
      ) : (
        <button onClick={displayForm}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
