import {Router} from 'express'
import { createUser, deleteUser, editUser, getUser, getUserId } from '../controllers/user.controller'

const userRouter = Router()

userRouter.get(`/`, getUser)
userRouter.get(`/:id`, getUserId)
userRouter.post(`/`, createUser)
userRouter.patch(`/:id`, editUser)
userRouter.delete(`/`, deleteUser)
export {userRouter}