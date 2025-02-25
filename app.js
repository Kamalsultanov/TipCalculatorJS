let tip = document.getElementById('tipPercent');
let bill = document.getElementById('bill');



const Calculatetip = () => {
    let tipAmount  =  (bill.value/ tip.value)/100      
    return tipAmount
}   