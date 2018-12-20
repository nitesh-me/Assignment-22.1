const express = require('express');
var router = express.Router();
var Notes = require('../models/notes')



///====================Routes for getting all the post=======================\\\

router.get('/notes',(req,res)=>{
    Notes.find({},(err,allNotes)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(allNotes);
        }
    })

})
///===================Routes for creating new notes=============================\\\
router.post('/notes',(req,res)=>{
    var title= req.body.title;
    console.log(title);
    var content = req.body.content;
    console.log(req.params.title);
    var newNotes ={
        title:title,
        content:content
    }
    console.log(newNotes);
    Notes.create(newNotes,(err, newlycreated)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(newlycreated);
            
            
            res.send(newlycreated);
        }
    })
});

///======================Routes for getting particular notes ==============================\\\
router.get('/notes/:id',(req,res)=>{
    Notes.findById(req.params.id,(err,notes)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(notes);
        }
    })
});

///==================================Routes for updating particular routes =========================\\
router.put('/notes/:id',(req,res)=>{
    var newNotes ={
        title:req.body.title,
        content:req.body.content
    }
    Notes.findByIdAndUpdate(req.params.id,newNotes,(err,notes)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(notes);
        }
    })
});
///==================================Routes for deleating a notes ======================================\\
router.delete('/notes/:id',(req,res)=>{
    Notes.findByIdAndDelete(req.params.id);
    console.log("file deletes");
    res.send("deleted")
})




module.exports = router;
