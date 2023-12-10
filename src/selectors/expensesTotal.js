const getExpensesTotal = (expenses) => {
  console.log("expenses", expenses);
  return expenses
    .map((expense) => {
      return expense.amount;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
};

export default getExpensesTotal;
