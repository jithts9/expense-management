import User from "../model/user.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password,10)
  const user = new User({ userName, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({
      message: " User created successfully",
    });
  } catch (error) {
    next(error)
  }
};
