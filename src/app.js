import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import userRouter from "./routers/userRouter";

const app = express();
app.use(bodyParser.json());

app.use("/", userRouter);

export default app;
