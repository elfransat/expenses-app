import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret_key"; //TODO: put as .env var

export const getUser = async (username) => {
  try {
    return await User.findOne({ username });
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const saveUser = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username: username,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    return { username: username, token };
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const authenticateUser = async (username, password) => {
  try {
    const existingUser = await getUser(username);

    if (!existingUser) {
      return false;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordValid) {
      return false;
    }

    const token = jwt.sign(
      { id: existingUser._id, username: existingUser.username },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    return { username: username, token: token };
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
