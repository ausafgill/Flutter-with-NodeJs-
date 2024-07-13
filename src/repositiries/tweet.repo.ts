import mongoose from "mongoose";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import TweetModel from "../database/models/tweet.model";
import UserModel from "../database/models/user.model";

export const getTweetRepo= async (tid:string): Promise<ITweetInterface |null>=>{
    try {
        const tweet= await TweetModel.findOne({tweetId:tid});
    return tweet;
    } catch (error) {
        console.log(error);
        return null;
        
    }
}
export const deleteTweetRepo= async (tid:string):Promise<boolean>=>{
    try {
        const delTweet= await TweetModel.findOneAndDelete({tweetId:tid});
        if(delTweet){
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

export const createNewTweet= async(newTweet:ITweetInterface): Promise<boolean>=>{
    try {
        const newT =  await TweetModel.create(newTweet);
        if(newT){
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
export const updateNewTweet= async (tid:string,newUpdate:ITweetInterface):Promise<boolean>=>{
    try {
        const update= await TweetModel.findOneAndUpdate({tweetId:tid},newUpdate,{new:true})
        if(update){
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


export const getAdminIdFromTweetId = async (tweetId: string): Promise<string> => {
    try {
        const tweet = await TweetModel.findOne({ tweetId }).select('adminId').lean();
        if (tweet && tweet.adminId) {
            return tweet.adminId;
        } else {
            return '';
        }
    } catch (error) {
        console.log(error);
        return '';
    }
};

export const getAllTweetRepo= async ():Promise<any[]|null>=>{
try {
    const allTweets=await TweetModel.find();
    if(!allTweets || allTweets.length==0){
        return null;

    }


const tweetWithAdminInfo= await Promise.all(
    allTweets.map(async(tweet)=>{
        const admin =await UserModel.findOne({userId:tweet.adminId})
        if(!admin){
            return {tweet,admin:null};
        }
        return {tweet,admin}
    })
)
return tweetWithAdminInfo;
} catch (error) {
    console.log(error);
    return null;
    
}
}
