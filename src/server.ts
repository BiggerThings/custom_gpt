import express from "express";
import  helloWorldRoute  from "./routes/helloWorldRoute";

const app = express();

app.use(helloWorldRoute);

export default app;
