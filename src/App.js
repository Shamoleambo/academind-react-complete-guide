import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = expense => {
    setExpenses(prevState => [...prevState, expense])
  }

  return (
    <div>
      <h1>Olá Tiago!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
