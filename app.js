//important: settimeout(function(){console.log("hello")}, 5000) 

/*------------------------ Cached Element References ------------------------*/
const numberElements = document.querySelectorAll('.number')

const operatorElements = document.querySelectorAll('.operator')

const equalsElement = document.querySelector('.equals')

const displayElement = document.querySelector('.display')

const calculator = document.querySelector('#calculator');
console.log(calculator)


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
    console.log('Clicked on '+event.target.textContent)

    if(!number1 && !number2 && !operator){
      number1= event.target.textContent
      displayElement.textContent=number1
    }
    else if(number1 && !number2 && !operator){ //adding another digit
        number1 = number1 + event.target.textContent
        displayElement.textContent = number1

    }else if(number1 && operator && !number2){
        number2 = event.target.textContent
        displayElement.textContent=number2
    }
    else if(number1 && operator && number2){
        number2 = number2 + event.target.textContent
        displayElement.textContent = number2
    }else{
        console.log('Error')
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
    console.log( event.target+'Equals Button Clicked')
    let num1= Number(number1)
        let num2= Number(number2)
        let result
    if(number1&&number2&&operator){
        

        if(operator==='+'){
            result=num1+num2
        }else if(operator==='*'){
            result=num1*num2
        }else if(operator==='-'){
            result=num1-num2
        }else if(operator==='/'){
            result=num1/num2
        }
    } displayElement.textContent=result

}
function handleClear(){
    displayElement.textContent= ''
    number1=''
    number2=''
    operator=''
   
}

/*----------------------------- Event Listeners -----------------------------*/

/*equalsElement.addEventListener('click',handleEquals)

for(let oneNumberElement of numberElements){
    oneNumberElement.addEventListener('click',handleNumber)
}

for(let oneOperatorElement of operatorElements){
    oneOperatorElement.addEventListener('click',handleOperator)
}*/

calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText); //this print in js console the text inside the button we clicked in 

    if(event.target.classList.contains('number')){
        console.log('number') //if what we press is number, print "number". otherwise nothing
    }
    if(event.target.innerText==='C'){
        handleClear() 
    }
    if(event.target.classList.contains('number')){
        handleNumber(event)
    }
    if(event.target.classList.contains('operator')){
        handleOperator(event)
    }
    if(event.target.classList.contains('equals')){
        handleEquals(event)
    }



})