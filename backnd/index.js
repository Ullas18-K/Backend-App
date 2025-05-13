// const express = require('express')
import express from "express"
// require('dotenv').config()
import 'dotenv/config'
console.log(process.env.port);
//can also write like-->  import express from "express"
const app = express()
const port = 4000  //there are about 65k virtual ports available, can choose anywhere among them, 3000 is default
const jokes = [
  {
    id: 1,
    category: "Programming",
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs!",
    likes: 0
  },
  {
    id: 2,
    category: "Pun",
    setup: "Did you hear about the claustrophobic astronaut?",
    punchline: "He just needed a little space.",
    likes: 0
  },
  {
    id: 3,
    category: "Dad Joke",
    setup: "How do you organize a space party?",
    punchline: "You planet!",
    likes: 0
  },
  {
    id: 4,
    category: "Programming",
    setup: "Why did the developer go broke?",
    punchline: "Because he used up all his cache!",
    likes: 0
  },
  {
    id: 5,
    category: "Animal",
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    likes: 0
  }
];
app.use(cors());

app.get('/',(q,r)=>{
 r.send("hello waddup!!")
})

app.get('/about', (req, res) => {
  res.send('WTF mf kjbi')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login first</h1>')
})

app.get('/api/jokes',(req,res)=>{ //statndard syntax for apis --> /api/
  res.json(jokes)
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
