import Expense from "../models/expenses.js";

export const saveExpense = async (expense) => {
  try {
    return await Expense.create(expense);
  } catch (error) {
    console.error("Error saving expense:", error);
  }
};

export const retrieveExpense = async (expense) => {
  try {
    return await Expense.findOne({ _id: expense });
  } catch (error) {
    console.error("Error retrieving expense:", error);
  }
};

export const retrieveAllExpenses = async () => {
  try {
    return await Expense.find({});
  } catch (error) {
    console.error("Error retrieving expense:", error);
  }
};

export const editExpenseDetails = async (expenseId, expense) => {
  try {
    return await Expense.findOneAndUpdate(
      { _id: expenseId },
      { $set: expense },
    );
  } catch (error) {
    console.error("Error editing expense:", error);
  }
};

export const removeExpense = async (expenseId) => {
  return await Expense.findByIdAndDelete({ _id: expenseId });
};
