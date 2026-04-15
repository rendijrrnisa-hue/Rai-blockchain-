const express = require('express')
const Blockchain = require('./blockchain')

const app = express()

const rai = new Blockchain()

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

app.listen(3000)
