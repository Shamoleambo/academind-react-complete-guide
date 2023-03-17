import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 301.55, date: new Date(2021, 2, 16) },
    { title: 'Morgage', amount: 3550.56, date: new Date(2021, 2, 18) },
    { title: 'Travel', amount: 1231.21, date: new Date(2020, 5, 10) },
    { title: 'New Clothes', amount: 398.8, date: new Date(2020, 10, 1) },
    { title: 'Party Expenses', amount: 30, date: new Date(2019, 11, 18) }
  ]

  const addExpenseHandler = expense => {
    console.log('expense ==>', expense)
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
