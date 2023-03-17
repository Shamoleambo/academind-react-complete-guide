const ExpensesFilter = ({ expenses, onYearFilter }) => {
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

  const selectYearHandler = event => {
    onYearFilter(event.target.value)
  }

  return (
    <div className='expenses-filter__container'>
      <select onChange={selectYearHandler}>
        <option value=''>--Pick a Year--</option>
        {yearsArray.map(year => (
          <option value={year}>{year}</option>
        ))}
      </select>
    </div>
  )
}

export default ExpensesFilter
