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
exports.updateUserController = exports.deleteUserController = exports.createUserController = exports.getUserController = void 0;
const user_repo_1 = require("../repositiries/user.repo");
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const user = yield (0, user_repo_1.getUserRepo)(userId);
        if (user) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(500).json({ error: "User Not Found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getUserController = getUserController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCreated = req.body;
    try {
        const user = yield (0, user_repo_1.createUserRepo)(userCreated);
        if (user) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(500).json({ error: "Not created" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createUserController = createUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const delUser = yield (0, user_repo_1.deleteUserRepo)(userId);
        if (delUser) {
            res.status(200).json({ data: "User deleted" });
        }
        else {
            res.status(500).json({ error: "User not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteUserController = deleteUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const userId=req.query.userId as string;
    const updatedUser = req.body;
    try {
        const user = yield (0, user_repo_1.updateUserRepo)(updatedUser.userId, updatedUser);
        if (user) {
            res.status(200).json({ data: "User Updated" });
        }
        else {
            res.status(500).json({ error: "User Not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.updateUserController = updateUserController;
