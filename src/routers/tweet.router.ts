
import { Router } from "express";
import { createTweet, getTweet } from "../controllers/tweet.controller";

const tweetRouter = Router()
tweetRouter.get('/', getTweet)
tweetRouter.post('/:userId', createTweet)


export {tweetRouter}