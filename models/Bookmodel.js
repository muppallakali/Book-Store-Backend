const { timeStamp } = require("console")
let mongoose=require("mongoose")
const { type } = require("os")

let bookSchema= mongoose.Schema({
    book_Name:{type:String,required:true},
    book_author:{type:String,required:true},
    publish_year:{type:Number,required:true}
},{timeStamps:true})

module.exports=mongoose.model("Book",bookSchema)