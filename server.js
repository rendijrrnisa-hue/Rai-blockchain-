const express = require('express')
const path = require('path')
const Blockchain = require('./blockchain')

const app = express()

const rai = new Blockchain()

app.use(express.static('public'))

app.get('/mine/:address',(req,res)=>{

rai.minePendingTransactions(req.params.address)

res.json({
message:'Mining success'
})

})

app.get('/balance/:address',(req,res)=>{

res.json({
balance:rai.getBalance(req.params.address)
})

})

app.get('/chain',(req,res)=>{

res.json(rai)

})

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>{
console.log("RAI Blockchain Running")
})