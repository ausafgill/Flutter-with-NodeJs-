"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweetController = exports.deleteTweetController = exports.createTweetController = exports.getTweetController = void 0;
const tweet_repo_1 = require("../repositiries/tweet.repo");
const user_repo_1 = require("../repositiries/user.repo");
const getTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    try {
        const tweet = yield (0, tweet_repo_1.getTweetRepo)(tweetId);
        if (tweet) {
            res.status(200).json({ data: tweet });
        }
        else {
            res.status(500).json({ error: "No Tweets" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.getTweetController = getTweetController;
const createTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetBody = req.body;
    try {
        const createTweet = yield (0, tweet_repo_1.createNewTweet)(tweetBody);
        if (createTweet) {
            const addedUser = yield (0, user_repo_1.addUserTweets)(tweetBody.adminId, tweetBody.tweetId);
            if (addedUser) {
                res.status(200).json({ data: createTweet });
            }
            else {
                res.status(500).json({ error: "Not Added" });
            }
        }
        else {
            res.status(500).json({ error: "Not Created" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.createTweetController = createTweetController;
const deleteTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.tweetId;
    try {
        // console.log("ENTER")
        const userId = yield (0, tweet_repo_1.getAdminIdFromTweetId)(tweetId);
        // console.log('tweetId:', tweetId);
        // console.log('userId:', userId);
        if (userId) {
            const remTweetArr = yield (0, user_repo_1.removeUserTweet)(userId, tweetId);
            if (remTweetArr) {
                const delTweet = yield (0, tweet_repo_1.deleteTweetRepo)(tweetId);
                if (delTweet) {
                    res.status(200).json({ data: "Tweet Deleted" });
                }
                else {
                    res.status(500).json({ error: "No Found" });
                }
            }
        }
        else {
            res.status(500).json({ error: "No Found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.deleteTweetController = deleteTweetController;
const updateTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetBody = req.body;
    try {
        const updateTweet = yield (0, tweet_repo_1.updateNewTweet)(tweetBody.tweetId, tweetBody);
        if (updateTweet) {
            res.status(200).json({ data: "Tweet Updated" });
        }
        else {
            res.status(500).json({ error: "No Tweets" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.updateTweetController = updateTweetController;
