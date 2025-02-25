let tip = document.getElementById('tipPercent');
let bill = document.getElementById('bill');
let total = document.getElementById('total')


const Calculatetip = () => {
    let tipAmount  =  bill.value * (tip.value/100)  
    return total.innerHTML=  Math.round( +bill.value + tipAmount) + ('.00')
}   