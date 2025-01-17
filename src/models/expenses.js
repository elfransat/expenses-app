import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  expense: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", ExpenseSchema);
export default Expense;
