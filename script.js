const cardNumber = document.getElementById('card-number')
const cardName = document.getElementById('card-name')
const cardExp = document.getElementById('card-exp')
const cardCvc = document.getElementById('card-cvc')

document.getElementById('holder-name').addEventListener('input', (e) =>{
    cardName.textContent = e.target.value 
})

document.getElementById('cardNumber').addEventListener('input', (e) =>{
    cardNumber.textContent = e.target.value;
})

document.getElementById('expMonth').addEventListener('input', updateExpiry)
document.getElementById('expYear').addEventListener('input', updateExpiry)

function updateExpiry() {
    const month = document.getElementById('expMonth').value;
    const year = document.getElementById('expYear').value
    cardExp.textContent = `${month} / ${year}`
}

document.getElementById('cvc').addEventListener('input', (e) => {
    cardCvc.textContent = e.target.value;
})