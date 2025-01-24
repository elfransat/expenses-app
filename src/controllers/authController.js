import {
  saveUser,
  authenticateUser,
  getUser,
} from "../services/authService.js";

export const createUser = async (username, password) => {
  try {
    const existingUser = await getUser(username);

    if (!existingUser) {
      const createdUser = await saveUser(username, password);

      return {
        status: 200,
        user: createdUser,
      };
    } else {
      return {
        status: 403, //todo check response code
        message: `user with username ${existingUser.username} already exists.`,
      };
    }
  } catch (error) {
    return {
      status: 501,
      message: `there was an system error`,
    };
  }
};

export const loginUser = async (username, password) => {
  try {
    const autheticatedUser = await authenticateUser(username, password);

    if (autheticatedUser) {
      return {
        status: 200,
        username: username,
        token: autheticatedUser.token,
      };
    } else {
      return {
        status: 400, //todo check response code
        message: `invalid credentials`,
      };
    }
  } catch (error) {
    return {
      status: 501,
      message: `there was an system error`,
    };
  }
};
