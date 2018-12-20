const express = require('express');
const mongoose  = require('mongoose');

const bodyParser = require('body-parser')
const Notes = require('./models/notes');
const notesRoute = require('./routes/notes')
const port = process.env.PORT || 8000;;
mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser:true});
const app  = express();
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(notesRoute);
app.get('/',(req,res)=>{
    res.send('ssdafs');
});

app.listen(port,()=>{
    console.log("hewwllo dfsaajfbnbnswnfin fuiewi");
});