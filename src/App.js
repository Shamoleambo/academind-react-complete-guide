import Expenses from './components/Expenses'

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 301.55, date: new Date(2021, 2, 16) },
    { title: 'Food', amount: 30, date: new Date(2021, 2, 18) }
  ]

  return (
    <div>
      <h1>Olá Tiago!</h1>
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
