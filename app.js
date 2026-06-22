/*------------------------ Cached Element References ------------------------*/
const numberElements = document.querySelectorAll('.number')

const operatorElements = document.querySelectorAll('.operator')

const equalsElement = document.querySelector('.equals')

const displayElement = document.querySelector('.display')


console.log(numberElements)
console.log(operatorElements)
console.log(equalsElement)
console.log(displayElement)
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let number1 = null
let number2 = null
let operator = null

/*-------------------------------- Functions --------------------------------*/
function handleNumber(event){
    console.log(`Clicked on ${event.target.textContent}`)

    if(!number1 && !number2 && !operator){
        number1 = event.target.textContent
        displayElement.textContent = number1
    }
    else if(number1 && !number2 && !operator){
        number1 = number1 + event.target.textContent
        displayElement.textContent = number1

    }


    console.log(`Number1: ${number1}`)
    console.log(`Number2: ${number2}`)
    console.log(`Operator: ${operator}`)
}

function handleOperator(event){
    console.log(`Clicked on ${event.target.textContent}`)
    if(number1 && !operator && !number2){
        operator = event.target.textContent
    }
    else if(number1 && operator && !number2){
        operator = event.target.textContent

    }
    displayElement.textContent = operator


    console.log(`Number1: ${number1}`)
    console.log(`Number2: ${number2}`)
    console.log(`Operator: ${operator}`)

}

function handleEquals(event){
    console.log('Equals Button Clicked')
}

/*----------------------------- Event Listeners -----------------------------*/

equalsElement.addEventListener('click',handleEquals)

for(let oneNumberElement of numberElements){
    oneNumberElement.addEventListener('click',handleNumber)
}

for(let oneOperatorElement of operatorElements){
    oneOperatorElement.addEventListener('click',handleOperator)
}