import { Router } from "express";
import {deletedUser, editUser, getUsers, getUsersId, } from "../controllers/user.contoller";
import { checkAdmin, verifyToken } from "../middlewares/auth.middleweres";

const userRouter =Router()

userRouter.get('/', verifyToken, checkAdmin, getUsers)
userRouter.get('/:id', getUsersId)
userRouter.patch('/:id', editUser)
userRouter.delete('/:id',deletedUser )

export {userRouter}