import express from "express";
import { createUser, loginUser } from "../controllers/authController.js";
export const authRoutes = new express.Router();

authRoutes.route("/auth/create-user").post(async (req, res) => {
  const response = await createUser(req.body.username, req.body.password);
  res.send(response);
});

authRoutes.route("/auth/login").post(async (req, res) => {
  const response = await loginUser(req.body.username, req.body.password);
  res.send(response);
});
