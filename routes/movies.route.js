import express from "express";

const router = express.Router();


//R- reading
router.get("/",(req, res)=>{
    res.send("Get all the Movies");

});

//c for creating

router.post("/",(req, res)=>{

    res.send("Create a Movie");
});


//u for updating

router.put("/:id",(req, res)=>{
    res.send("Update tha movie");
});

//d for delete
router.delete("/:id",(req, res)=>{
    res.send("delet the movie");

});

export default router;