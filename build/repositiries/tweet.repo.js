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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminIdFromTweetId = exports.updateNewTweet = exports.createNewTweet = exports.deleteTweetRepo = exports.getTweetRepo = void 0;
const tweet_model_1 = __importDefault(require("../database/models/tweet.model"));
const getTweetRepo = (tid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tweet = yield tweet_model_1.default.findOne({ tweetId: tid });
        return tweet;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getTweetRepo = getTweetRepo;
const deleteTweetRepo = (tid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delTweet = yield tweet_model_1.default.findOneAndDelete({ tweetId: tid });
        if (delTweet) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.deleteTweetRepo = deleteTweetRepo;
const createNewTweet = (newTweet) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newT = yield tweet_model_1.default.create(newTweet);
        if (newT) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.createNewTweet = createNewTweet;
const updateNewTweet = (tid, newUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = yield tweet_model_1.default.findOneAndUpdate({ tweetId: tid }, newUpdate, { new: true });
        if (update) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateNewTweet = updateNewTweet;
const getAdminIdFromTweetId = (tweetId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tweet = yield tweet_model_1.default.findOne({ tweetId }).select('adminId').lean();
        if (tweet && tweet.adminId) {
            return tweet.adminId;
        }
        else {
            return '';
        }
    }
    catch (error) {
        console.log(error);
        return '';
    }
});
exports.getAdminIdFromTweetId = getAdminIdFromTweetId;
