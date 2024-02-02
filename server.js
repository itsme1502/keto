import express from "express";
import dotenv from "dotenv";
import PrismaInit, { main } from "./config/sql.config.js";
import cors from "cors";

dotenv.config();

 
const app = express();
app.use(cors());


app.get('/',(req,res)=>{
    res.send("Hello");
})

PrismaInit()
  .then(() => {
    const server = app.listen(
      process.env.PORT ? process.env.PORT : 3000,
      process.env.HOST ? process.env.HOST : "127.0.0.1",
      console.log(
        `listening on http://localhost:${
          process.env.PORT ? process.env.PORT : 3000
        }/`
      )
    );
  })
  .then(()=>{
    main();
  })
  .catch((err) => {
    console.log(err);
  });


  