import { pool } from "../Database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
};

const findById = async (id) => {
    const query = "SELECT * FROM posts WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0]
}

const create = async (like) => {
    const query = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
    const { rows } = await pool.query(query, [like.titulo, like.img, like.descripcion, like.likes]);
    return rows[0];
};

export const likeModel = {
    findAll,
    findById,
    create,
};