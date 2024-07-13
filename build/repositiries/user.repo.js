"use strict";
//Repositiries functions actually communicate with your database
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
exports.removeUserTweet = exports.addUserTweets = exports.updateUserRepo = exports.createUserRepo = exports.deleteUserRepo = exports.getUserRepo = void 0;
const user_model_1 = __importDefault(require("../database/models/user.model"));
const getUserRepo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ userId: userId });
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getUserRepo = getUserRepo;
const deleteUserRepo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOneAndDelete({ userId: userId });
        if (user) {
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
exports.deleteUserRepo = deleteUserRepo;
const createUserRepo = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userCreate = yield user_model_1.default.create(user);
        if (userCreate) {
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
exports.createUserRepo = createUserRepo;
const updateUserRepo = (userId, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield user_model_1.default.findOneAndUpdate({ userId: userId }, user, { new: true });
        if (updatedUser) {
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
exports.updateUserRepo = updateUserRepo;
const addUserTweets = (userId, tweetId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addUser = yield user_model_1.default.findOneAndUpdate({ userId: userId }, { $push: { tweets: tweetId } });
        if (addUser) {
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
exports.addUserTweets = addUserTweets;
const removeUserTweet = (userId, tweetId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const remTweet = yield user_model_1.default.findOneAndUpdate({ userId: userId }, { $pull: { tweets: tweetId }, }, { new: true });
        if (remTweet) {
            console.log("Updated");
            return true;
        }
        else {
            console.log(" Not Updated");
            return false;
        }
    }
    catch (error) {
        return false;
    }
});
exports.removeUserTweet = removeUserTweet;
