import express, { Application } from "express"
import cors from "cors"
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number = 2222;

app.use(cors())
app.use(express.json())
mainApp(app)

const server = app.listen(port, ()=>{
    console.log("Let's do this...");
    
});

process.on("uncaughtException", (err, Error)=>{
    console.log("uncaughtException", err);
    
    process.exit(1)
})

process.on("rejectionHandled", (reason)=>{
    console.log("rejectionHandled", reason);
    
    server.close(()=>{
        process.exit(1)
    })
})