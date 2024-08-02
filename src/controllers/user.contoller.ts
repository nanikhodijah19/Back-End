import { Request, Response } from "express";
import prisma from "../prisma";


export const getUsers = async (req: Request, res: Response) => {
    try {
        interface filterQuery{
            OR? : any[];//[{username:{constains:string}},{email:{constains:string}}]
         }
        const {search,page} = req.query
        const limit = 5
        const pages : number = page ? +page : 1

        // const filter: filterQuery = {}
        const filter:filterQuery ={}
        if (search){
            filter.OR = [
                {username:{contains:search as string}},
                {email :{contains:search as string}}
            ] 
            
        }

        const users = await prisma.user.findMany({
            where: filter,
            take:limit,
            skip: limit * (pages - 1)

        })
        res.status(200).send({
            status: 'ok',
            users
        })

    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    }
}



export const getUsersId = async (req: Request, res: Response) => {

    try {
        // console.log(req.user);
        
        const user = await prisma.user.findUnique({
            where: { id: +req.params.id }
        })
        res.status(200).send({
            status: 'ok',
            user
        })

    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    }
}

export const editUser = async (req: Request, res: Response) => {
    try {
        await prisma.user.update({
            where: { id: +req.params.id },
            data: req.body
        })
        res.status(200).send({
            status: 'ok',
            msg: 'User Updated'
        })

    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    }
}

export const deletedUser = async (req: Request, res: Response) =>{
    try {
        await prisma.user.delete({where: {id: +req.params.id}})

        res.status(200).send({
            status: 'ok',
            msg: 'User Updated'
        })

    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    }
}

