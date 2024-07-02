import {Router} from "express";
import { createTweetController, deleteTweetController, getTweetController, updateTweetController } from "../controller/tweet.controller";
const tweetRoute=Router();

tweetRoute.get("/:tweetId",getTweetController);
//tweetRoute.get("/",getAllTweetController);
tweetRoute.post("/",createTweetController);
tweetRoute.delete("/:tweetId",deleteTweetController);
tweetRoute.put("/",updateTweetController);

export default tweetRoute
