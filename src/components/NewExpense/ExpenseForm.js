import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    titleInput: '',
    amountInput: '',
    dateInput: ''
  })

  const titleChangeHandler = e => {
    setUserInput(prevState => ({ ...prevState, titleInput: e.target.value }))
  }
  const amountChangeHandler = e => {
    setUserInput(prevState => ({ ...prevState, amountInput: e.target.value }))
  }
  const dateChangeHandler = e => {
    setUserInput(prevState => ({ ...prevState, dateInput: e.target.value }))
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            max='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
