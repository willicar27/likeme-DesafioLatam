import "dotenv/config";
import express from "express";
import cors from "cors";
import likeRouter from "./routes/like.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/like", likeRouter);

app.listen(PORT, () =>{
    console.log(`servidor Encendido en el puerto http://localhost:${PORT}`);
    })

