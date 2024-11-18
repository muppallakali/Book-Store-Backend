let express=require("express")
let app=express()
let mongoose=require("mongoose")
let dotenv=require("dotenv")
dotenv.config()
let cors=require("cors")

let route=require("./routes/bookroutes")

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongoose conected successfully"))
.catch((error)=>console.log("Error in connecting mongoose: ",error))

app.use(express.json())
app.use(cors())
app.use("/book",route)
// app.use("*",(req,res)=>res.status(200).json({message:"Hello Every One"}))

port=process.env.Prot || 4000
app.listen(port,()=>console.log("Port is running on: ",port))