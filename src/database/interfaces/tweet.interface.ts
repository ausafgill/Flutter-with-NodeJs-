// Interfaces usually gives the blueprint of how your data will look


import { Document } from "mongoose";
export interface ITweetInterface extends Document{
    tweetId:string ,
    content: string,
    createdAt: string,
    adminId: string
}