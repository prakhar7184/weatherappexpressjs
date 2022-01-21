const express=require('express');
const app=express();
const hbs=require('hbs');
const requests=require('requests');

app.set("view engine","hbs")
app.set("views","templates/view")
app.use(express.static("public"));
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.listen(8000,()=>{
    console.log("listen to 8000");
})
