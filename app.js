import express from "express";
import {  ShortenedRoutes } from "./Routes/Shortener.routes.js";



const app = express();
const PORT = 3000;


//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//express router
app.use( ShortenedRoutes);

//ejs
app.set("view engine","ejs");

//server started
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
