"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
//Defining route path
userRouter.get("/:userId", user_controller_1.getUserController); //get user based on user Id
userRouter.post("/", user_controller_1.createUserController); //create user with its data
userRouter.delete("/:userId", user_controller_1.deleteUserController); //del user based on id
userRouter.put("/", user_controller_1.updateUserController); //update userdata
exports.default = userRouter;
