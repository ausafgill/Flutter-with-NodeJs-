import {Router} from "express";
import { createUserController, deleteUserController, getUserController, updateUserController } from "../controller/user.controller";
const userRouter= Router();

//Defining route path
userRouter.get("/:userId",getUserController) //get user based on user Id
userRouter.post("/",createUserController) //create user with its data
userRouter.delete("/:userId",deleteUserController) //del user based on id
userRouter.put("/",updateUserController) //update userdata

export default userRouter