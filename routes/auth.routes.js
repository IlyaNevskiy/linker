const {Router} = require('express')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require("express-validator")
const User = require('../models/User')
const router = Router();

router.post(
    '/register',
    [
        check('email' , "Некорректный email").isEmail(),
        check('password', "Минимальная длина пароля 6 символов")
          .isLength({ min: 6 })
    ],
    async ( req, res ) => {
    try {
        const errors = validationResult(req)

        if( !errors.isEmpty() ) {
            return res.status(400).json({
                message: 'Некорректые данные при регистрации',
                errors: errors.array()
            })
        }

        const { email, password } = req.body

        const candidate = await User.findOne({ email })

        if(candidate){
            return res.status(400).json({ message: "Такой пользователь уже существует" })
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User( { email, password: hashedPassword } )

        await user.save()

        return res.status(201).json({ message: 'Пользователь успешно зарегистрирован' })
    } catch (e){
        return res.status(500).json({ message: "Что-то не так" })
    } 
})

router.post(
    '/login',
    [
        check('email' , "Некорректный email").normalizeEmail().isEmail(),
        check('password', "Введите пароль").exists()
    ],
    async ( req, res ) => {
    try {
        const errors = validationResult(req)

        if( !errors.isEmpty() ){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе'
            })
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({ message: 'Пользваотель не найден' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({ message: 'Неверный пароль' })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get("jwtKey"),
            { expiresIn: '1h' }
        )

       return res.json({ token, userId: user.id }) 

    } catch (e){
       return res.status(500).json({ message: "Что-то не так" })
    } 
    
})

module.exports = router