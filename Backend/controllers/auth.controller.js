const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { registerSchema, loginSchema } = require('./validation/authValidation')


const register = async (req, res,next ) => {
    try {
        const { error, value } = registerSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }
        console.log(value);

        const { fullName, email, password,role} = value
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "invalid email"
            })
        }


        const newUser = await User.create({
            fullName, email, password,role
        })
        return res.status(201).json({
            message: `${fullName} created successfuly`
        })

    } catch (error) {
          next(error)

    }




}
const login = async (req, res,next) => {
    try {
        const { error, value } = loginSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }
        const { email, password } = value

        const existUser = await User.findOne({ email }).select('+password');
        if (!existUser) {
            return res.status(400).json({
                message: "invalid email or password"
            })
        }
          const matchedPass = await existUser.comparePassword(password);
        if (!matchedPass) return res.status(400).json({ message: "invliademail or password" })
        const token = jwt.sign({ id: existUser._id ,role:existUser.role}, process.env.JWT_SK, { expiresIn: '1d' })

        return res.status(200).json({ message: "login success", token })


    } catch (error) {
        next(error)
    }

}

const logout = async (req, res) => {
    try {
    
      return res.status(200).json({
        message:"logout success"
      })

    } catch (error) {
         next(error)

    }




}

module.exports = { register, login, logout }