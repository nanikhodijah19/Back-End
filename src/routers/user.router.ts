import { Router } from "express";
import { createUser, deletedUser, editUser, getUsers, getUsersId, loginUser } from "../controllers/user.contoller";

const userRouter =Router()

userRouter.get('/',getUsers)
userRouter.post('/', createUser)
userRouter.post('/login', loginUser)
userRouter.get('/:id', getUsersId)
userRouter.patch('/:id', editUser)
userRouter.delete('/:id',deletedUser )

export {userRouter}