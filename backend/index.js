import "dotenv/config";
import express from "express";
import { likeModel } from "./models/like.model.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`servidor Encendido en el puerto http://localhost:${PORT}`);
    })

//GET likeme

app.get("/like", async (req, res) => {
    try {
        const like = await likeModel.findAll();
        return res.json(like);
    }catch (error) {
        console.log(error);
        return res.status(500).json ({ message: "Error interno en el servidor" });
    }
});

// GET likeme by id

app.get("/like/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const like = await likeModel.findById(id);

        if (!like) {
            return res.status(404).json({ message: "Like no esta funcionando"});
        }
        res.json(like);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno en el servidor"});
    }
});

//POST likeme 

app.post("/like", async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;

    if (!titulo) {
        return res.status(400).json({ message: "El titulo es requerido"});
    };

    const newLike = {
        titulo,
        img,
        descripcion,
        likes: likes || 0,
    };
    try {
        const like = await likeModel.create(newLike);
        return res.status(201).json(like);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno en el servidor"});
    }
});
