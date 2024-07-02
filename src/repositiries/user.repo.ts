//Repositiries functions actually communicate with your database


import mongoose from "mongoose";
import UserModel from "../database/models/user.model";
import { IUserInterface } from "../database/interfaces/user.interface";


export const getUserRepo = async (userId: string): Promise<IUserInterface | null> => {
    try {
        const user = await UserModel.findOne({ userId: userId });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const deleteUserRepo = async (userId: string): Promise<boolean> => {
    try {
        const user = await UserModel.findOneAndDelete({ userId: userId });
        if (user) {
            return true;

        }
        else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;

    }
}
export const createUserRepo = async (user: IUserInterface): Promise<boolean> => {
    try {
        const userCreate = await UserModel.create(user);
        if (userCreate) {
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}


export const updateUserRepo = async (userId: String, user: IUserInterface): Promise<boolean> => {
    try {
        const updatedUser = await UserModel.findOneAndUpdate({ userId: userId }, user, { new: true });
        if (updatedUser) {
            return true;


        }
        else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const addUserTweets= async(userId:string,tweetId:string): Promise<boolean>=>{
try {
    const addUser= await UserModel.findOneAndUpdate({userId:userId},{$push:{tweets:tweetId}});
    if(addUser){
        return true;
    }
    else{
        return false;
    }
} catch (error) {
    console.log(error);
    return false;
    
}
}

export const removeUserTweet=async(userId:string,tweetId:string):Promise<boolean> =>{
    try {
       
        const remTweet= await UserModel.findOneAndUpdate({userId:userId},{$pull:{tweets:tweetId},},    { new: true });
        if(remTweet){
            console.log("Updated")
            return true;
        }
        else{
            console.log(" Not Updated")
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

