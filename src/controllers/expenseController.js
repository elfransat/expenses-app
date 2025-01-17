import {
  saveExpense,
  retrieveAllExpenses,
  retrieveExpense,
  removeExpense,
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
    const retrievedExpenses = await editExpenseDetails();

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

export const deleteExpense = async (expense) => {
  try {
    // try and post expense with expense service..
    //todo add functionality for if expense already exists..
    if (expense) {
      return {
        status: 200,
        message: `expense.. ${expense} posted successfully.`,
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
