export const MovieIndex = (req, res)=>{
    res.send ("get all the movies");
};

export const MovieCreate = (req, res)=>{
    //  id tittle,desc
    console.log(req.body);  
     return res.json(req.body);
};

export const MovieUpdate = (req, res)=>{
    res.send("Update tha movie");
};

export const MovieDelete = (req, res)=>{
    res.send("delet the movie");

};
