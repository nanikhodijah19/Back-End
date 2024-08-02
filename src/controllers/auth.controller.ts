import {  Request, Response } from "express"
import prisma from "../prisma"
import { hashPass } from "../helpers/hashPassword"
import { compare } from "bcrypt"
import { createToken } from "../helpers/create.Token"

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findFirst({
            where:{
                OR: [
                    {username: req.body.username},
                    {email: req.body.email},
                ]
            }
        })
        if (user?.email) throw ' email has been used'
        if (user?.username) throw 'username has been used'

        const password =await hashPass (req.body.password) // dengan ini harus nya password nya sudah diacak pas masuk database

        await prisma.user.create({ data: {...req.body, password} })
        res.status(200).send({
            status: 'oke',
            msg: 'created'
        })
       
    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    }
}

export const loginUser = async (req: Request, res: Response) =>{
    try {
        

        const user = await prisma.user.findFirst({
            where:{
                OR:[
                    {email: req.body.data},
                    {username: req.body.data}
                ]
            }      

        })
        if (!user) throw "user not found"
        if (!user. isVerify) throw" user not verify"
        // if (user.password == req.body.passworld) throw "incorrect password" 

        const isValidPass = await compare(req.body.password , user.password)
        if (!isValidPass) throw "incorect password"

        const token = createToken({id:user.id, role:user.role})// user nya siapa rolenya siapa admin apa user

        res.status(200).send({
            status:'ok',
            msg : 'login success',
            token,
            user
        })

    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    } 
}