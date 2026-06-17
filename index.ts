import express from "express";
const app = express();

const PORT : Number = process.env.PORT ? Number(process.env.PORT) : 8000;
app.get("/Check",(req,res)=>{
    return res.send("hello i am fine what about you 🥵🥵🥵");
})
app.listen(PORT,()=>{
    console.log("Hello i am runnig on : " + PORT);
})