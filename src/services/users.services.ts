import { User } from "../models/User"
import JWT from 'jsonwebtoken';

async function login(payload) {
    // first check if user present with email or not
    const user = await User.findOne({ email : payload.email});

    if(!user){
        return {
            message : "user not present with this email",
            status : 200
        }
    }
    
    if(user.password !== payload.password){
        return {
            message : "password is incorrect",
            status : 200
        }
    }

    // if all data is correct , create JWT token
    const token = JWT.sign({ email : payload.email , role : user.role , id :user._id}, process.env.SECRET_KEY, { expiresIn : process.env.EXPIRES_IN});

    return {
        user : user,
        authToken : token
    }
}

async function register(payload){
    // we check if email is already there in db
    const user = await User.findOne({ email : payload.email});

    if(user){
        return {
            message : "user already exits with the email",
            status : 200
        }
    }

    const newUser = await User.create(payload);
    return newUser;
}

export default {
    login,
    register
}