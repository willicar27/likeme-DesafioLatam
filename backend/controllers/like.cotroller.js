import { likeModel } from "../models/like.model.js";

const read = async (req, res) => {
    try {
        const like = await likeModel.findAll();
        return res.json(like);
    }catch (error) {
        console.log(error);
        return res.status(500).json ({ message: "Error interno en el servidor GET" });
    }
};

const readById = async (req, res) => {
    const id = req.params.id;

    try {
        const like = await likeModel.findById(id);

        if (!like) {
            return res.status(404).json({ message: "Like no esta funcionando"});
        }
        res.json(like);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno en el servidor GET:id"});
    }
};

const create = async (req, res) => {
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
        return res.status(500).json({ message: "Error interno en el servidor Post"});
    }
};

const modify = async(req, res) => {
    const id = req.params.id;

    try {
        const like = await likeModel.update(id);
        if (!like) {
            return res.status(404).json({ message: "No se esta realizando la modificación"});
        }
        return res.json(like);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno en el servidor PUT"})
    }
};

const eliminate = async (res, req) => {
    const id = req.params.id;
    try {
        const like = await likeModel.delete(id);
        if (!like) {
            return res.status(404).json({ message: "No se esta Borrando el Like" });
        }
        return res.json({ message: "Like eliminado"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno en el servidor Delete"});
    }
};

export const likeControler = {
    read,
    readById,
    create,
    modify,
    eliminate,
}