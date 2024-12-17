import bcrypt from 'bcrypt';
import { User } from '../models/User'
import jwt from 'jsonwebtoken';

export const signUp = async (data: any) => {
    try {
        const { username, password } = data
        const existingUser = await User.findOne({ username: username })
        if (existingUser) {
            return { message: "user already exists" }
        }

        bcrypt.hash(password, 10).then(async function (hash) {

            await User.create({ username, password: hash });
            return { message: "You have been signed up" };
        });

    } catch (err) {
        //@ts-ignore
        throw new Error(err)
    }
}

export const signIn = async (data: any) => {
    try {
        const { username, password } = data
        const existingUser = await User.findOne({ username: username })
        if (!existingUser) {
            return { message: "User does not exist" }
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password!)
        if (!isPasswordValid) {
            return { message: "Incorrect password" }
        }
        const token = jwt.sign({ username: existingUser.username }, process.env.JWT_SEC!)
        return { id: existingUser._id, token: token }
    } catch (err) {
        //@ts-ignore
        throw new Error(err)
    }
}