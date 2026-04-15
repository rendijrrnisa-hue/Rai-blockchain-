// Create Wallet
function createWallet(){

const wallet = "RAI" + Math.random().toString(36).substring(2,12)
const privateKey = "PK" + Math.random().toString(36).substring(2,20)

localStorage.setItem("wallet", wallet)
localStorage.setItem("privateKey", privateKey)
localStorage.setItem("balance", 0)

location.reload()

}

let balance = localStorage.getItem("balance") || 0
let mining = false

let wallet = localStorage.getItem("wallet")

if(!wallet){
createWallet()
}

document.getElementById("wallet").innerText = wallet
document.getElementById("balance").innerText = parseFloat(balance).toFixed(2)

// Start Mining
function startMining(){

if(mining) return

mining = true

setInterval(()=>{

balance = parseFloat(balance) + 0.10

localStorage.setItem("balance", balance)

raiChain.mineBlock({
wallet:wallet,
reward:0.10
})

document.getElementById("balance").innerText =
parseFloat(balance).toFixed(2)

},10000)

}

// Withdraw
function withdraw(){

alert("Withdraw Request Sent")

}

// Referral System
let ref = window.location.origin + "?ref=" + wallet

document.getElementById("refLink").value = ref

// Referral Bonus
const urlParams = new URLSearchParams(window.location.search)
const refUser = urlParams.get("ref")

if(refUser && !localStorage.getItem("refBonus")){

balance = parseFloat(balance) + 1

localStorage.setItem("balance", balance)
localStorage.setItem("refBonus", true)

}

// Show Private Key
function showKey(){

const key = localStorage.getItem("privateKey")

alert("Private Key:\n" + key)

}