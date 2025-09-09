import { likeControler } from "../controllers/like.cotroller.js";

import { Router } from "express";

const likeRouter = Router();

//GET likeme

likeRouter.get("/", likeControler.read );

// GET likeme by id

likeRouter.get("/:id", likeControler.readById );

//POST likeme 

likeRouter.post("/", likeControler.create);

//PUT likeme

likeRouter.put("/:id", likeControler.modify);

//DELETE likeme

likeRouter.delete("/:id", likeControler.eliminate);

export default likeRouter;