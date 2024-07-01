import { Router } from "express";

const routes = Router()

routes.post("/",(req,res)=>{
    res.send("post ok")
})
routes.get("/",)
routes.delete("/",)

export default routes