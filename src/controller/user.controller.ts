import { Request,Response } from "express";
import { getUserRepo,deleteUserRepo,createUserRepo,updateUserRepo } from "../repositiries/user.repo";
import { IUserInterface } from "../database/interfaces/user.interface";
import { error } from "console";


export const getUserController= async(req:Request,res:Response)=>{
    const userId= req.params.userId  as string;
    try {
        const user= await getUserRepo(userId);
        if(user){
            res.status(200).json({data:user});


        }
        else{
            res.status(500).json({error:"User Not Found"})
        }
    } catch (error) {
        res.status(500).json({error:error})
        
    }
}
export const createUserController= async (req:Request,res:Response)=>{
    const userCreated: IUserInterface= req.body;
    try {
        const user=await createUserRepo(userCreated);
        if(user){
            res.status(200).json({data:user})
        }
        else{
            res.status(500).json({error:"Not created"})
        }
    } catch (error) {
        res.status(500).json({error:error})
    }
}
export const deleteUserController= async(req:Request,res:Response)=>{
    const userId= req.params.userId as string;
    try {
        const delUser=  await deleteUserRepo(userId);
        if(delUser){
            res.status(200).json({data:"User deleted"})
        }
        else{
            res.status(500).json({error:"User not found"});
        }
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const updateUserController = async (req:Request,res:Response)=>{
    // const userId=req.query.userId as string;
    const updatedUser= req.body ;
   try {
    const user=await updateUserRepo(updatedUser.userId,updatedUser);
    if(user){
        res.status(200).json({data:"User Updated"});
    }
    else{
        res.status(500).json({error:"User Not found"});
    }
   } catch (error) {
    res.status(500).json({error:error});
   } 
}
