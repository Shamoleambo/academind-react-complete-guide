import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
  const [userInput, setUserInput] = useState({
    titleInput: '',
    amountInput: '',
    dateInput: ''
  })

  const titleChangeHandler = event => {
    setUserInput(prevState => ({
      ...prevState,
      titleInput: event.target.value
    }))
  }
  const amountChangeHandler = event => {
    setUserInput(prevState => ({
      ...prevState,
      amountInput: event.target.value
    }))
  }
  const dateChangeHandler = event => {
    setUserInput(prevState => ({ ...prevState, dateInput: event.target.value }))
  }
  const submitHandler = event => {
    event.preventDefault()
    const expenseData = {
      title: userInput.titleInput,
      amount: +userInput.amountInput,
      date: new Date([...userInput.dateInput.split('-')])
    }

    props.onSaveExpenseData(expenseData)
    props.closeNewExpenseForm()
    setUserInput({ titleInput: '', amountInput: '', dateInput: '' })
  }
  const handleCancelButton = () => {
    props.closeNewExpenseForm()
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.titleInput}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.amountInput}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={userInput.dateInput}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button className='cancel-button' onClick={handleCancelButton}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
