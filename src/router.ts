import { Request, Response, Router } from 'express'

import { userRouter } from './routers/user.router'

const router = Router()

// api testing
router.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        status: 'ok',
        msg: 'Welcome to my api'
    })
})

router.use('/users', userRouter)

export default router