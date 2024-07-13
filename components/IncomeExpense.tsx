import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { formatCurrency } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{formatCurrency(income as number)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{formatCurrency(expense as number)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
