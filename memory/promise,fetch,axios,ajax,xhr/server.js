const express = require('express')

var app = express()

app.get('/first',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send("hello Ajax1")
})

app.get('/second',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send("hello Ajax2")
})

app.get('/third',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send("hello Ajax3")
})

app.listen(8080,function(){
    console.log("8080端口已开启")
})