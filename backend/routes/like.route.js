import { likeControler } from "../controllers/like.cotroller";

import { Router } from "express";

const likeRouter = Router();

//GET likeme

app.get("/", likeControler.read );

// GET likeme by id

app.get("/:id", likeControler.readById );

//POST likeme 

app.post("/", likeControler.create);

//PUT likeme

app.put("/:id", likeControler.modify);

//DELETE likeme

app.delete("/:id", likeControler.eliminate);

export default likeRouter;