let Bookmodel=require("../models/Bookmodel")
let express=require("express")
let app=express()

let createbook=async(req,res)=>{
    try{
        let{book_Name,book_author,publish_year}=req.body;
        if(!book_Name||!book_author||!publish_year){
            return res.status(401).json({error:"All fields not Entered"})
        }
        let newbook=new Bookmodel({
            book_Name,
            book_author,
            publish_year
        })
        await newbook.save()
        res.status(200).json({message:"Data Saved Successfully"})
    }
    catch(error){
        res.status(500).json({error:"error in createbook",error})
    }
}
let getsinglebook=async(req,res)=>{
    try{
        let bookId=req.params.id
        let singlebook=await Bookmodel.findById(bookId)
        if(!singlebook){
            return res.status(404).json({error:"Book not found with this Id"})
        }
        return res.status(200).json({singlebook})
    }
    catch(error){
        res.status(500).json({error:"error in getting book details",error})
    }
}
let getAllBooks=async(req,res)=>{
    try{
        let allBooks=await Bookmodel.find()        
        return res.status(200).json({count:allBooks.length,allBooks})
    }
    catch(error){
        res.status(500).json({message:"Error in getting All Book details"})
        console.log(error)
    }
}
let updatebook=async(req,res)=>{
    try{
        let bookId=req.params.id        
        let{book_Name,book_author,publish_year}=req.body
        if(!book_Name||!book_author||!publish_year){
            return res.status(401).json({message:"All fields not Entered"})
        }
        let updateBook=await Bookmodel.findByIdAndUpdate(bookId,{book_Name,book_author,publish_year})
        if(!updateBook){
            return res.status(400).json({message:"No book selected"})
        }
        res.status(200).json({message:"Book updated"})
    }
    catch(error){
        res.status(500).json({message:"Error in updateBook",details: error.message})
    }
}
let deletebook=async(req,res)=>{
    try{
        let bookId=req.params.id
        let deleteBook=await Bookmodel.findByIdAndDelete(bookId)
        if(!deleteBook){
            return res.status(400).json({message:"No book selected"})
        }
        res.status(200).json({message:"Book Deleted"})
    }
    catch(error){
        res.status(500).json({message:"Error in deleteBook",details: error.message})
    }
}
module.exports={createbook,updatebook,deletebook,getsinglebook,getAllBooks}