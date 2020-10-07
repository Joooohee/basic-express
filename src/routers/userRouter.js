import express from "express";
import { getUser, postUser } from "../controllers/userController";
import routes from "../routes";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */
const userRouter = express.Router();

/**
 * @swagger
 * path:
 *  /user:
 *    get:
 *      summary: Select User
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
userRouter.get(routes.user, getUser);

/**
 * @swagger
 * path:
 *  /user:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
userRouter.post(routes.user, postUser);

export default userRouter;
