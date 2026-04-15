const crypto = require('crypto')

class Block{

constructor(index,timestamp,data,previousHash=''){

this.index=index
this.timestamp=timestamp
this.data=data
this.previousHash=previousHash
this.hash=this.calculateHash()
this.nonce=0

}

calculateHash(){
return crypto.createHash('sha256')
.update(
this.index+
this.previousHash+
this.timestamp+
JSON.stringify(this.data)+
this.nonce
).digest('hex')
}

mineBlock(difficulty){

while(this.hash.substring(0,difficulty)!=='0'.repeat(difficulty)){
this.nonce++
this.hash=this.calculateHash()
}

console.log('Block Mined:',this.hash)

}

}

class Blockchain{

constructor(){

this.chain=[this.createGenesisBlock()]
this.difficulty=3
this.pendingTransactions=[]
this.miningReward=0.5

}

createGenesisBlock(){
return new Block(0,Date.now(),'Genesis Block','0')
}

getLatestBlock(){
return this.chain[this.chain.length-1]
}

minePendingTransactions(minerAddress){

let block = new Block(
this.chain.length,
Date.now(),
this.pendingTransactions,
this.getLatestBlock().hash
)

block.mineBlock(this.difficulty)

this.chain.push(block)

this.pendingTransactions=[{
from:null,
to:minerAddress,
amount:this.miningReward
}]

}

createTransaction(transaction){
this.pendingTransactions.push(transaction)
}

getBalance(address){

let balance=0

for(const block of this.chain){

for(const trans of block.data){

if(trans.from===address){
balance-=trans.amount
}

if(trans.to===address){
balance+=trans.amount
}

}

}

return balance

}

}

module.exports = Blockchain
