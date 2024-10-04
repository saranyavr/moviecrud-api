import express from "express";

const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    res.json({msg: "Hello World!"});

});

app.listen(port, (req, res )=> {
    console.log(`your server is running on http://localhost:${port}`);
});