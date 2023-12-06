import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import { errorHandler } from '../utils/error.js'

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, 10)
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })
  try {
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err) {
    // next(errorHandler(500, 'Duplicate username or password'))
    next(err)
  }
}
