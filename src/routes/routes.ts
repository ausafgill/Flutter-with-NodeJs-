import {Router} from "express"
import userRouter from "./user.routes";
 import tweetRoute from "./tweet.routes";
import helloRouter from "./hello.router";

const router=Router();

router.use('/user',userRouter)/// create router/gate for entering user route and from there to userRouter options
router.use('/tweet',tweetRoute)
router.use('/hello',helloRouter)
export default router;