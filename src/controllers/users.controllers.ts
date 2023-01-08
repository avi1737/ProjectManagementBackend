import { NextFunction, Request, Response } from "express";
import userService from '../services/users.services';

async function login(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await userService.login(req.body));
    }
    catch(err){
        next(err);
    }
}

async function register(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await userService.register(req.body));
    }
    catch(err){
        next(err);
    }
}

export default {
    login,
    register
}