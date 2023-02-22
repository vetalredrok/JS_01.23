const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = '';

for (const key of keys) {
    const value = key.dataset.key;

    key.addEventListener('click', ()=>{
        if (value === 'clear'){
            input = '';
            display_input.innerHTML = '';
            display_output.innerHTML = '';
        } else if (value === 'backspace'){
            input = input.slice(0, -1);
            display_input.innerHTML = cleanInput(input);
        } else if (value === '='){
            let result = Function('return ' + input)();

            display_output.innerHTML = cleanOutput(result);
        } else if (value === 'brackets'){
            if (input.indexOf('(') === -1 ||
                input.indexOf('(') !== -1 && input.indexOf(')') !== -1 && input.lastIndexOf('(') < input.lastIndexOf(')')){
                input += '(';
                input = input.replace(/(\d+)\(/g, '$1*(');
            } else if (input.indexOf('(') !== -1 && input.indexOf(')') === -1 ||
                input.indexOf('(') !== -1 && input.indexOf(')') !== -1 && input.lastIndexOf('(') > input.lastIndexOf(')')){
                input += ')';
            }

            display_input.innerHTML = cleanInput(input);
        }
        else {
            if (validateInput(value)){
                input += value;
                display_input.innerHTML = cleanInput(input);
            }
        }
    })
}

function cleanInput(input) {
    let inputArray = input.split('');
    let inputArrayLength = inputArray.length;

    for (let i = 0; i < inputArrayLength; i++){
        if (inputArray[i] === '*'){
            inputArray[i] = `<span class='operator'>x</span>`;
        } else if (inputArray[i] === '/'){
            inputArray[i] = `<span class='operator'>÷</span>`;
        } else if (inputArray[i] === '+'){
            inputArray[i] = `<span class='operator'>+</span>`;
        } else if (inputArray[i] === '-'){
            inputArray[i] = `<span class='operator'>-</span>`;
        } else if (inputArray[i] === '('){
            inputArray[i] = `<span class='brackets'>(</span>`;
        } else if (inputArray[i] === ')'){
            inputArray[i] = `<span class='brackets'>)</span>`;
        } else if (inputArray[i] === '%'){
            inputArray[i] = `<span class='percent'>%</span>`;
        }
    }

    return inputArray.join('');
}

function cleanOutput(output){

    let outputString = output.toString();

    if (outputString.length>9){
        output = output.toFixed(9 - outputString.indexOf('.') - 1);
    }

    outputString = output.toString();

    let decimal = outputString.split(".")[1];
    outputString = outputString.split('.')[0];

    let outputArray = outputString.split('');

    if (outputArray.length > 3){
        for (let i = outputArray.length - 3; i > 0; i -= 3){
            outputArray.splice(i, 0, ',');
        }
    }

    if (decimal){
        outputArray.push('.');
        outputArray.push(decimal);
    }

    return outputArray.join('');
}

function validateInput (value){
    let lastInput = input.slice(-1);

    let operators = ['+', '-', '*', '/']

    if (value === '.' && lastInput === '.' || value === '%' && lastInput === '%') {
        return false;
    }


    if (value === '.'){
        let check = input.split((/[*\/+\-]/));
        let lastCheck = check[check.length - 1];
        if (lastCheck.includes('.')){
            return false
        }

        if (/^\.*$/.test(lastCheck)){
            input += '0'
        }
    }

    if (operators.includes(value)){

        if (operators.includes(lastInput)){
            return false;
        } else {
            return true;
        }
    }
    return true;
}

function prepareInput(input) {
    let inputArray = input.split('');

    for (let i=0; i < inputArray.length; i++){
        if (inputArray[i] === '%'){
            inputArray[i] = '/100';
        }
    }
    return inputArray.join('');
}



