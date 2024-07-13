import {Router} from "express";
import { createTweetController, deleteTweetController, getTweetController, updateTweetController,getAllTweetsController } from "../controller/tweet.controller";
const tweetRoute=Router();

tweetRoute.get("/:tweetId",getTweetController);
tweetRoute.get("/get/all",getAllTweetsController);
tweetRoute.post("/",createTweetController);
tweetRoute.delete("/:tweetId",deleteTweetController);
tweetRoute.put("/",updateTweetController);

export default tweetRoute
