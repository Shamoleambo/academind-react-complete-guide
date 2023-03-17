const ExpensesFilter = ({ expenses }) => {
  const yearsArray = expenses.reduce((acc, expense) => {
    const dateYear = expense.date.getFullYear()

    if (acc.length === 0) {
      acc.push(dateYear)
      return acc
    }

    if (!acc.find(date => date === dateYear)) {
      acc.push(dateYear)
      return acc
    }
    return acc
  }, [])

  return (
    <div className='expenses-filter__container'>
      <select>
        {yearsArray.map(year => (
          <option>{year}</option>
        ))}
      </select>
    </div>
  )
}

export default ExpensesFilter
