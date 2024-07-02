import { Request, Response } from "express";
import { getTweetRepo, createNewTweet, updateNewTweet, deleteTweetRepo,getAdminIdFromTweetId } from "../repositiries/tweet.repo";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import { addUserTweets, removeUserTweet } from "../repositiries/user.repo";
import { error } from "console";

export const getTweetController = async (req: Request, res: Response) => {
    const tweetId = req.params.tweetId as string;
    try {
        const tweet = await getTweetRepo(tweetId);
        if (tweet) {
            res.status(200).json({ data: tweet });
        }
        else {
            res.status(500).json({ error: "No Tweets" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
}

export const createTweetController = async (req: Request, res: Response) => {
    const tweetBody: ITweetInterface = req.body;
    try {
        const createTweet = await createNewTweet(tweetBody);
        if (createTweet) {
            const addedUser = await addUserTweets(tweetBody.adminId, tweetBody.tweetId);
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
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });

    }
}
export const deleteTweetController = async (req: Request, res: Response) => {
 const tweetId = req.params.tweetId as string;
  



    try {
         console.log("ENTER")
         
         const userId = await getAdminIdFromTweetId(tweetId) ;
         console.log('tweetId:', tweetId);
         console.log('userId:', userId);
         if(userId){
            const remTweetArr= await removeUserTweet(userId,tweetId);
                 
        if(remTweetArr){
            const delTweet = await deleteTweetRepo(tweetId);
            if(delTweet){
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
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
}

export const updateTweetController = async (req: Request, res: Response) => {
    const tweetBody: ITweetInterface = req.body;
    try {
        const updateTweet = await updateNewTweet(tweetBody.tweetId, tweetBody);
        if (updateTweet) {
            res.status(200).json({ data: "Tweet Updated" });

        }
        else {
            res.status(500).json({ error: "No Tweets" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
}