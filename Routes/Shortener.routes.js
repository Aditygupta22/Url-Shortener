
import { Router } from "express";
import { postUrl,getUrl, redirect } from "../controllers/Shortener.controller.js";




const router=Router();

//all the app.get and app.post are replaced by router.get and router.post

router.get("/", getUrl);

router.post("/", postUrl);

router.get("/:shortCode", redirect);


export const ShortenedRoutes=router;