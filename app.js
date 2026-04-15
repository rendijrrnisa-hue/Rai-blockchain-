let balance=0
let mining=false

let wallet=localStorage.getItem("wallet")

if(!wallet){
wallet="RAI"+Math.random().toString(36).substring(2)
localStorage.setItem("wallet",wallet)
}

document.getElementById("wallet").innerText=wallet

function startMining(){

if(mining) return

mining=true

setInterval(()=>{

balance+=0.05

raiChain.mineBlock({
wallet:wallet,
reward:0.05
})

document.getElementById("balance").innerText=balance.toFixed(2)

},5000)

}

function withdraw(){
alert("Withdraw Request Sent")
}

// Referral
let ref=window.location.href+"?ref="+wallet

document.getElementById("refLink").value=ref