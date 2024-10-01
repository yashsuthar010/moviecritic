import { Request, Response } from "express";
import pool from "../db";

export const getMovies = async (req: Request, res :Response) => {
    const [movies] = await pool.query('select * from movies');
    res.json(movies);   

}