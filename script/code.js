// Operands
let firstOp = 0;
let operator = "";
let result = document.querySelector('#output');
// Display
function display(value) {
    result.value
    += value;
} 
// backspace
document.querySelector('#backspace').
addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})
// Operators
document.querySelector('#division')
.addEventListener('click', ()=>{
    firstOp = result.value;
    operator = "/";
    clear();
})

// equal
document.querySelector('#equal')
.addEventListener('click', ()=>{
    let secondOp = result.value;
    switch(operator){
        case '/':
            result.value = 
            eval(`${firstOp}/${secondOp}`).toFixed(2)
        break;
    }
})

function clear() {
    result.value = "";
}

// Clear button
document.querySelector('#clear')
.addEventListener('click', ()=>{
    clear();
})