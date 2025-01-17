import express from "express";
import {
  getExpense,
  postExpense,
  editExpense,
  deleteExpense,
  getAllExpenses,
} from "../controllers/expenseController.js";
export const expenseRoutes = new express.Router();

expenseRoutes
  .route("/expense")
  .get(async (req, res) => {
    const response = await getAllExpenses();
    res.send(response);
  })
  .post(async (req, res) => {
    const response = await postExpense(req.body);
    res.send(response);
  });

expenseRoutes
  .route("/expense/:expenseId")
  .get(async (req, res) => {
    const response = await getExpense(req.params.expenseId);
    res.send(response);
  })
  .put(async (req, res) => {
    const response = await editExpense(req.params.expenseId, req.body);
    res.send(response);
  })
  .delete(async (req, res) => {
    const response = await deleteExpense(req.params.expenseId);
    res.send(response);
  });
