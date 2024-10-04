import express from "express";
import { MovieIndex, 
    MovieCreate, 
    MovieUpdate, 
    MovieDelete } from "../controllers/movie.controller.js";

const router = express.Router();


//R- reading
router.get("/", MovieIndex );

//c for creating

router.post("/", MovieCreate );


//u for updating

router.put("/:id", MovieUpdate);

//d for delete
router.delete("/:id", MovieDelete);

export default router;