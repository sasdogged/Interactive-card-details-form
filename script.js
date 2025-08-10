
// Displaying card details
const cardNumber = document.getElementById('card-number')
const cardName = document.getElementById('card-name')
const cardExp = document.getElementById('card-exp')
const cardCvc = document.getElementById('card-cvc')

document.getElementById('holder-name').addEventListener('input', (e) =>{
    cardName.textContent = e.target.value 
})

document.getElementById('cardNumber').addEventListener('input', (e) =>{
    // cardNumber.textContent = e.target.value;
     let input = e.target.value.replace(/\D/g, '').slice(0, 16);
    let formatted = input.replace(/(.{4})/g, '$1 ').trim();
    cardNumber.textContent = formatted || "0000 0000 0000 0000";
    e.target.value = formatted;
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

// Verifying input details

const form = document.getElementById('form')
const btn = document.getElementsByTagName('button')
const numberError = document.getElementById('err-num')
const cvcErr = document.getElementById('cvc-err')
let expMonth = document.getElementById('expMonth')
let expYear = document.getElementById('expYear')
const monthErr = document.getElementById('month-err')
const yearErr = document.getElementById('year-err')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const cardNumberInput = document.getElementById('cardNumber').value;
    const cvcInput = document.getElementById('cvc')
    const monthExp = Number(expMonth.value)
    const yearExp = Number(expYear.value)
    let isValid = true;

const cardNumberInputRaw = cardNumberInput.replace(/\D/g, ''); 

if (!cardNumberInputRaw || !Number.isFinite(Number(cardNumberInputRaw))) {
    numberError.textContent = 'Wrong format, numbers only';
    isValid = false;
} else if (cardNumberInputRaw.length < 16) {
    numberError.textContent = 'Number must be at least 16 digits';
    isValid = false;
} else {
    numberError.textContent = '';
}

// Month input
if(!Number.isInteger(monthExp) ||monthExp < 1 || monthExp > 12){
    monthErr.textContent = 'Not valid';
    isValid = false;
} else {
    monthErr.textContent = '';
    expMonth.style.marginBottom = '.7em'
}

// Year Input
const currentYear = new Date().getFullYear();
 const currentYearTwoDigit = currentYear % 100;
if(!Number.isInteger(yearExp) || yearExp < currentYearTwoDigit || yearExp > currentYearTwoDigit + 10 || expYear.value.trim() === ''){
    yearErr.textContent = 'Not valid'
    isValid = false;
} else{
    yearErr.textContent = '';
}

// CVC number input
    if(cvcInput.value.trim() === '') {
        cvcErr.textContent = "Can't be blank"
        isValid = false;
    } 
    else if(cvcInput.value.length < 3) {
        cvcErr.textContent = "Not valid"
        isValid = false;
    }
    else{
        cvcErr.textContent = " "
    }

    if(!isValid) {
        e.preventDefault();
    } else {
        window.location.href = 'completed.html'
    }


})
