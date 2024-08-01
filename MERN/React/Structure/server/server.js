const express = require('express');
const app = express();
const port= 8000;
require("./config/mongoose.config");
//app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
//app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
//const cors = require ('cors')
//app.use(cors())

app.get ("/api",(req,res) =>{
    res.json({message : "Hello worlddddddddd API"});
});

app.get ("/api/te",(req,res) =>{
    res.json({message : "Hello world te"});
});

app.get ("/api/test",(req,res) =>{
    res.json({message : "Hello world testtesttest"});
});

app.get ("/api/L",(req,res) =>{
    res.json({message : "Hello world LEFTER"});
});

app.get ("/api/J",(req,res) =>{
    res.json({message : "Hello world Joana"});
});

app.get ("/api/A",(req,res) =>{
    res.json({message : "Hello world Arjan"});
});

app.get ("/api/M",(req,res) =>{
    res.json({message : "Hello world Mozaaa"});
});
app.get ("/api/LINA",(req,res) =>{
    res.json({message : "Hello world lINA"});
});

app.get ("/api/Sofia",(req,res) =>{
    res.json({message : "Hello world Sofia"});
});

app.get ("/api/Lefi",(req,res) =>{
    res.json({message : "Hello world Lefi"});
});

app.get ("/api/Fati",(req,res) =>{
    res.json({message : "Hello world Fatmiri"});
});
app.get ("/api/Alen",(req,res) =>{
    res.json({message : "Hello world Aleniiiiiiiiiii"});
});

app.get ("/api/Fl",(req,res) =>{
    res.json({message : "Hello dasdaasdasa Flooraaa"});
});

app.get ("/api/Lo",(req,res) =>{
    res.json({message : "Hello Londra"});
});

app.get ("/api/Tr",(req,res) =>{
    res.json({message : "Hello T"});
});
app.get ("/api/El",(req,res) =>{
    res.json({message : "Hello Elbasa"});
});

app.get ("/api/Be",(req,res) =>{
    res.json({message : "Hello Berati21323132"});
});

require("./routes/user.routes");(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

