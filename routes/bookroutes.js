let express=require("express")
let route=express.Router()
let Book=require("../controler/createbook.controler")


route.post("/Addbook",Book.createbook)
route.put("/updatebook/:id",Book.updatebook)
route.delete("/delete/:id",Book.deletebook)
route.get("/getsinglebook/:id",Book.getsinglebook)
route.get("/getAllBooks",Book.getAllBooks)

module.exports=route