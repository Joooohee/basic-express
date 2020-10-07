import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerOptions from "./swagger";
import userRouter from "./routers/userRouter";

const app = express();
const specs = swaggerJsdoc(swaggerOptions);
app.use(bodyParser.json());
app.use(routes.swagger, swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use(routes.home, userRouter);

export default app;
