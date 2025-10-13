import express from "express";
import { helloWorld } from "../controllers/helloWorldController";

const helloWorldRoute = express.Router();

helloWorldRoute.get("/hello", helloWorld);

export default helloWorldRoute;