let yourName = "Johnathan Ortiz-Flores" 

let gb = 0 
let cc = 0 
let sugar = 0 
let qty = document.getElementById('qty-gb')
let qtycc = document.getElementById('qty-cc')
let qtysugar = document.getElementById('qty-sugar')

let overallTotalEl = document.getElementById('qty-total')
let overallTotal = gb + cc + sugar

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector("#minus-gb")
const ccMinusBtn = document.querySelector("#minus-cc")
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn =document.querySelector("#minus-sugar")


credit.textContent = `Created by ${yourName}`

gbMinusBtn.addEventListener('click', ()=>{
    if (gb > 0){
        gb --;
        overallTotal --;
        overallTotalEl.innerHTML = overallTotal
        qty.innerHTML = gb;
        
    }
})
gbPlusBtn.addEventListener('click', ()=>{
    gb ++; 
    overallTotal ++;
    overallTotalEl.innerHTML = overallTotal
    qty.innerHTML = gb;
    
})
////////////////////////////////////////////////////////////////////////////////////////////////////

ccMinusBtn.addEventListener('click', ()=>{
    if (cc > 0){
        cc --;
        overallTotal --;
        overallTotalEl.innerHTML = overallTotal
        qtycc.innerHTML = cc;
        
    }
})
ccPlusBtn.addEventListener('click', ()=>{
    cc ++; 
    overallTotal ++;
    overallTotalEl.innerHTML = overallTotal
    qtycc.innerHTML = cc;
    
})
////////////////////////////////////////////////////////////////////////////////////////////////////

sugarMinusBtn.addEventListener('click', ()=>{
    if (sugar > 0){
        sugar --;
        overallTotal --;
        overallTotalEl.innerHTML = overallTotal
        qtysugar.innerHTML = sugar;
        
    }
})
sugarPlusBtn.addEventListener('click', ()=>{
    sugar ++; 
    overallTotal ++;
    overallTotalEl.innerHTML = overallTotal
    qtysugar.innerHTML = sugar;
   
})

