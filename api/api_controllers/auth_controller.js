import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import { errorHandler } from '../utils/error.js'

// sign un
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
    // next(errorHandler(500, 'User already exists, please sign in'))
    next(err)
  }
}

// sign in 
export const signin = async (req, res, next) => {
  const {email, password} = req.body
  try{
    // check for valid user
    const validUser = await User.findOne({email: email})
    if(validUser) {
      // check if password entered matches hashed password
      const validPassword = bcrypt.compareSync(password, validUser.password)
      if(validPassword) {
        // create user token
        const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET)
        // separate user password from the rest of the information from the user document
        const { password: pass, ...restOfUserDoc} = validUser._doc
        // create user cookie
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(restOfUserDoc)
      }else {
        return next(errorHandler(404, 'Invalid email or password'))
      }
    } else{
      return next(errorHandler(404, 'User not found!'));
    }

    // // check if password entered matches hashed password
    // const validPassword = bcrypt.compareSync(password, validUser.password)
    // if(!validPassword) {
    //   next(errorHandler(404, 'Invalid email or password'))
    // }

    // if(validUser && validPassword) {
    //   // create user token
    //   const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    //   // separate user password from the rest of the information from the user document
    //   const { password: pass, ...restOfUserDoc} = validUser._doc
    //   // create user cookie
    //   res.cookie('access_token', token, {httpOnly: true}).status(200).json(restOfUserDoc)
    // }
  } catch (error) {
    next(error)
  }
}
