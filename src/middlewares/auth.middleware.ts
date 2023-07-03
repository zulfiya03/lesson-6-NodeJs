import { NextFunction, Request, Response } from "express";
import authModels from "../models/auth.models";

const register = async(req: Request, res:Response, next: NextFunction)=> {
    const {name, surname, username, password} = req.body
    const valid = authModels.registerScheme.validate(
        {
            name,
            surname,
            username, 
            password,
        },
        {
            abortEarly: false,
        }
    )

    if (valid.error){
        res.status(403).send({
            message: valid.error.details.map((d)=>d.message).join(','),
        })
        return
     }
     next()
}

export default {
    register,
}