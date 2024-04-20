import User from '../Model/User.js'
import UserInLive from '../Model/UserInLive.js';
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    const check = await User.find({ email: email })

    if (check.length > 0) {
        return res.status(400).json({ msg: "User already exists" })
    }
    let cart = {};
    for (let i = 0; i < 300; i++)cart[i] = 0;

    let user = {};
    user.name = name
    user.email = email
    user.password = password
    user.cartdata = cart

    const registereduser = await User.create(user);
    console.log(registereduser.id)

    const data = {
        user: {
            id: registereduser.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom')
    res.json({ masg: "success", token })
}


export const login = async (req, res) => {
    const user = await User.find({ email: req.body.email })

    if (user.length == 0) {
        return res.status(400).json({ msg: "Please enter correct emailid" })
    }
    // console.log(user[0], 1)
    if (user[0].password == req.body.password) {
        const data = {
            user: {
                id: user[0].id
            }
        }
        //console.log(user[0].id)
        const token = jwt.sign(data, 'secret_ecom')
        res.json({ msg: "success", token })
    }
    else {
        res.status(400).json({ msg: "Incorrect Password" })
    }
}

export const deleteUser = async (req, res) => {
    await UserInLive.findOneAndDelete({ id: req.body.id })
    res.status(201).json({ msg: "Deletd successfully bro" })
}