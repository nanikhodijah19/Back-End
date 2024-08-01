
import { Request, Response, Router } from 'express'
import { userRouter } from './routers/user.router'
import { tweetRouter } from './routers/tweet.router'

const router =Router()

router.get ('/',(req:Request, res:Response ) => {
    res.status(200).send(`welcome to my api`)
})

// add 
router.use ('/users', userRouter)
router.use ('/tweets', tweetRouter)

export default router