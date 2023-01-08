import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

export default function authentication(req : Request , res : Response , next : NextFunction){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
        
    if (token == null){
        return res.status(401).json({ message : "Authentication faied"});
    }

    try{
        const verifiedUser = Jwt.verify(token , process.env.SECRET_KEY);
        req.app.locals.user = verifiedUser;
        next();
    }
    catch(err){
        res.status(401).json({ message : "Authentication faied"});
    }

}