import {
  saveExpense,
  retrieveAllExpenses,
  retrieveExpense,
  removeExpense,
  editExpenseDetails,
} from "../services/expenseService.js";

export const postExpense = async (expense) => {
  try {
    //todo add functionality for if expense already exists..

    const savedExpense = await saveExpense(expense);

    return {
      status: 200,
      message: `expense.. ${savedExpense} posted successfully.`,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 501,
      message: `there was an system error`,
    };
  }
};

export const getExpense = async (expenseId) => {
  try {
    const retrievedExpense = await retrieveExpense(expenseId);

    if (retrievedExpense) {
      return {
        status: 200,
        expense: retrievedExpense,
      };
    } else {
      return {
        status: 404,
        message: `expense.. ${retrievedExpense} not found.`,
      };
    }
  } catch (error) {
    return {
      status: 501,
      message: `there was an system error`,
    };
  }
};

export const getAllExpenses = async () => {
  try {
    const retrievedExpenses = await retrieveAllExpenses();

    if (retrievedExpenses) {
      return {
        status: 200,
        expenses: retrievedExpenses,
      };
    }
  } catch (error) {
    return {
      status: 501,
      message: `there was a system error`,
    };
  }
};

export const editExpense = async (expenseId, expenseBody) => {
  try {
    const retrievedExpenses = await editExpenseDetails(expenseId, expenseBody);

    if (expense) {
      return {
        status: 200,
        message: `expense.. ${expenseId} updated successfully.`,
        expense: retrieveExpense,
      };
    } else {
      return {
        status: 404,
        message: `expense.. ${expense} not found.`,
      };
    }
  } catch (error) {
    return {
      status: 501,
      message: `there was an system error`,
    };
  }
};

export const deleteExpense = async (expenseId) => {
  try {
    const deletedExpense = await removeExpense(expenseId);

    if (deletedExpense) {
      return {
        status: 200,
        message: `expense.. ${expenseId} deleted successfully.`,
      };
    } else {
      return {
        status: 404,
        message: `expense.. ${expenseId} not found.`,
      };
    }
  } catch (error) {
    return {
      status: 501,
      message: `there was an system error`,
    };
  }
};
