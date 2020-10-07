import express from "express";
import { getUser, postUser } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.user, getUser);
userRouter.post(routes.user, postUser);

export default userRouter;
