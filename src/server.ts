import express from "express";
import  helloWorldRoute  from "./routes/helloWorldRoute";
import geminiRoute from "./routes/geminiRoute";

const app = express();

app.use(express.json());

app.use(helloWorldRoute);
app.use(geminiRoute);

export default app;
