class Block{
constructor(index,timestamp,data,previousHash=''){
this.index=index
this.timestamp=timestamp
this.data=data
this.previousHash=previousHash
this.hash=this.calculateHash()
}

calculateHash(){
return btoa(this.index + this.timestamp + JSON.stringify(this.data))
}
}

class Blockchain{
constructor(){
this.chain=[this.createGenesisBlock()]
this.supply=100000000
}

createGenesisBlock(){
return new Block(0,Date.now(),"Genesis","0")
}

getLatestBlock(){
return this.chain[this.chain.length-1]
}

mineBlock(data){
const block=new Block(
this.chain.length,
Date.now(),
data,
this.getLatestBlock().hash
)

this.chain.push(block)
}
}

const raiChain=new Blockchain()