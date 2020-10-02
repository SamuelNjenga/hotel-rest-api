const userService = require('../services/UserService');
const ReqValidator = require('../utils/validator')
const bcrypt = require('bcrypt')

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

exports.createUser = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            lastName: 'required|string',
            email: 'required|string|email',
            userName: 'required|string',
            password: 'required|string',
            phoneNumber: 'required|string',
            gender: 'required|string',
            role: 'string'
        })
        if (!valid) return
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            gender: req.body.gender,
            role: req.body.role
        };
        const hashedPassword = await hashPassword(data.password);
        const newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            userName: data.userName,
            password: hashedPassword,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            role: data.role || 'basic'
        }
        await userService.createUser(newUser)
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            lastName: 'required|string',
            email: 'required|string|email',
            userName: 'required|string',
            password: 'required|string',
            phoneNumber: 'required|string',
            gender: 'required|string',
            role: 'required|string'
        })
        if (!valid) return
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            gender: req.body.gender,
            role: req.body.role
        };

        const userId = req.params.id;
        await userService.updateUser(data, {
            where: {
                id: userId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await userService.deleteUser({
            where: {
                id: userId
            }
        });
        res.status(200).json({
            data: null,
            message: `User ${userId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.json({
            message: err
        });
    }
};