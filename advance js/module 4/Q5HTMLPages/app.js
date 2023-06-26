
const express = require("express");
const app = express()
const path = require("path")

app.get("/",function (req,res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"home.html"))
})


app.get("/about", (req, resp) => {
    // resp.send("This is home page")
    resp.sendFile(path.join(__dirname, "aboutusfile.html"));
})

app.get("/form",(req,resp) => {
    resp.sendFile(path.join(__dirname,"form.html"));
})


app.listen(3000,function (req,res) {
    console.log("server listed on http://localhost:3000");
})