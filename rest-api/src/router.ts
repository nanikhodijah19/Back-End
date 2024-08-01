import { Router } from "express";
import { userRouter } from "./routers/user.routers";


const router = Router ()

router.use("/users", userRouter)
// add another router here

export default router