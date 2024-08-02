
import { Router } from "express";
import { createTweet, getTweet } from "../controllers/tweet.controller";
import { verifyToken } from "../middlewares/auth.middleweres";

const tweetRouter = Router()

tweetRouter.get('/', getTweet)
tweetRouter.post('/',verifyToken, createTweet)


export {tweetRouter}