const express = require('express')
require('dotenv').config()
console.log(process.env.port);
//can also write like-->  import express from "express"
const app = express()
const port = 4000  //there are about 65k virtual ports available, can choose anywhere among them, 3000 is default

app.get('/',(q,r)=>{
 r.send("hello waddup!!")
})
app.get('/about', (req, res) => {
  res.send('WTF mf kjbi')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login first</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
