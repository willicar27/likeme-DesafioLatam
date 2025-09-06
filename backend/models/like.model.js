import { pool } from "../Database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
};

const findById = async (id) => {
    const query = "SELECT * FROM posts WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0]
};

const create = async (like) => {
    const query = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const { rows } = await pool.query(query, [like.titulo, like.img, like.descripcion, like.likes]);
    return rows[0];
};

const update = async (id, titulo, img, descripcion, likes) => {
    const query = 
    "UPDATE posts SET titulo = COALESCE($2, titulo), img = COALESCE($3, img), descripcion = COALESCE($4, descripcion), likes = COALESCE($5, likes) WHERE id = $1 RETURNING *"
    const values = [id, titulo, img, descripcion, likes];
    const { rows } = await pool.query(query, values);
    return rows[0];
;}

const remove = async (id) => {
    const query = "DELETE FROM posts WHERE id = $1 RETURNING *"
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

export const likeModel = {
    findAll,
    findById,
    create,
    update,
    remove,
};