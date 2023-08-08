const express = require('express')

const app = new express()

app.get('/server',(req,res)=>{
    // cores跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    res.send("hello world")
})

app.post('/server1',(req,res)=>{
        // cores跨域
        res.setHeader('Access-Control-Allow-Origin','*')
        //设置响应体
        res.send("hello POST")
})

app.listen('3000',()=>{
    console.log("正在监听3000端口号......")
})