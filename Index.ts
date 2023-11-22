import express, { Application } from "express"
import cors from "cors"

const app: Application = express();
const port: number = 2222;

const server = app.listen(port, ()=>{
    console.log("Let's do this...");
    
});

process.on("uncaughtException", (err, Error)=>{
    console.log("uncaughtException", err);
    
    process.exit(1)
})

process.on("rejectionHandled", (reason)=>{
    console.log("rejectionHandled", reason);
    
    process.exit(1);
})