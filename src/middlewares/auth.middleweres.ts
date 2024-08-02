import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    try{
        let token = req.headers.authorization?.replace("Bearer ", "")
        // console.log(token);
        if (!token) throw "Token empty"

        const user = verify(token,process.env.SECRET_KEY!)// dengan ! kita paksa pasti ada
        req.user=user as User
        // console.log(user);
        
        next()
        
    }catch(err){
        res.status(400).send({
            status : 'error',
            msg: err
        })
    }
   

}

export const checkAdmin = (req:Request, res:Response, next: NextFunction) =>{
    try{
        if(req.user?.role !== "admin") throw "Admin only"
        next()

    }catch(err){
        res.status(400).send({
            status : 'error',
            msg: err
        })
    }
}