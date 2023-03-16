import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 301.55, date: new Date(2021, 2, 16) },
    { title: 'Food', amount: 30, date: new Date(2021, 2, 18) }
  ]

  return (
    <div className='App'>
      <h1>Olá Tiago!</h1>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
    </div>
  )
}

export default App
