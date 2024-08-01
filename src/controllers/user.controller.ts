import { Request, Response } from 'express'
import { IUser } from '../types/user'
import fs from 'fs'

export const getUser = (req: Request, res: Response) => {
    const users : IUser[] = JSON.parse(fs.readFileSync(`./src/data/user.json`, `utf-8`))

    res.status(200).send({
        status: `ok`,
        users
    })
}

export const getUserId = (req:Request, res:Response) => {
    const users : IUser[] = JSON.parse(fs.readFileSync(`./src/data/user.json`, `utf-8`))
    // console.log(req.params);
    const data = users.find((item) => item.id == +req.params.id)
    // console.log(data);
    if (!data){
        return res.status(400).send({
            status: `error`,
            msg: `user not found`
        })
    }
    

    res.status(200).send({
        status: `ok`,
        user : data
    })
}

export const createUser = (req: Request, res:Response) => {
    const users : IUser[] = JSON.parse(fs.readFileSync(`./src/data/user.json`, `utf-8`))
    const id = Math.max(...users.map((item) => item.id)) + 1
    const newUser ={
        id,
        jabatan : req.body.jabatan,
        nominal : req.body.nominal,
        jenis : req.body.jenis,
        kategori : req.body.kategori,
        tanggal : req.body.tanggal
    }
    users.push(newUser)

    fs.writeFileSync(`./src/data/user.json`,JSON.stringify(users), `utf-8`)

   console.log(newUser);
   
    res.status(201).send({
        status : `oke`,
        msg: `user created!`
    })
}

export const editUser = (req: Request, res: Response) => {
    const users : IUser[] = JSON.parse(fs.readFileSync(`./src/data/user.json`, `utf-8`))
    const idx =  users.findIndex((item) => item.id == +req.params.id)

    if (idx == -1 ) {
        res.status(400).send({
            status : "error",
            massage : "not found"
        })

    }
    users[idx]= {...users[idx],...req.body}
    
    console.log(users);
    fs.writeFileSync(`./src/data/user.json`,JSON.stringify(users), `utf-8`)
    
    res.status(201).send({
        status : `oke`,
        msg: `user edit!`
    })

}

export const deleteUser = (req: Request, res: Response) => {
    const users : IUser[] = JSON.parse(fs.readFileSync(`./src/data/user.json`, `utf-8`))
    const idx = users.findIndex((item) => item.id == +req.params.id)
    users.splice(idx, 1)
    fs.writeFileSync(`./src/data/user.json`,JSON.stringify(users), `utf-8`)

    res.status(201).send({
        status: 'ok',
        msg: `users with id ${req.params.id} deleted ✅`
    })
}