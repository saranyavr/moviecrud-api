import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

connectDB;

app.get("/", (req, res)=> {
    res.json({msg: "HEllo World!"});
});

//curd functinality of movies

app.use("/movies",  movieRoutes);




app.listen(port, (req, res )=> {
    console.log(`your server is running on http://localhost:${port}`);
});