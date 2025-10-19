
import crypto from "crypto";
import { loadLinks,saveLinks } from "../../models/shortener.model.js";
import { readFile} from "fs/promises";
import path from "path";


export const getUrl=async (req, res) => {


  try{
  
  const links = await loadLinks();
  return res.render("index",{links,host:req.host});
  }

   catch(error){
    console.error(error);
    return res.status(500).send("Internal server error");

   }
  
}




export const postUrl=async (req, res) => {

    try{
         
  const { url, shortCode } = req.body;
  const finalCode = shortCode || crypto.randomBytes(4).toString("hex");
  const links = await loadLinks();

  
  
  if(links[finalCode]) {
    return res.status(400).send("Short code already exists");
  }

  links[finalCode] = url;

  await saveLinks(links);
   res.redirect("/");
    }
  


catch(error){
    console.error(error);
    res.status(500).send("Internal server error");

}
};



export const redirect=async (req, res) => {

  try {
    const { shortCode } = req.params;
  const links = await loadLinks();

  if (!links[shortCode]) {
    return res.status(404).send("Not found");
  }
  res.redirect(links[shortCode]);
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
  
};