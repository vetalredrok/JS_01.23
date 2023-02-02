function processNumber() {
    while (true) {
        let input = prompt('Enter a valid number:');
        if (isNaN(input) || input % 1 !== 0 || input<0 ||input.length === 0) {
            console.log('Incorrect input!');
            continue;
        }
        input = parseInt(input);
        let factorial = input;
        for (let i = input - 1; i >= 1; i--) {
            factorial *= i;
        }
        const SQUARE = Math.pow(input, 2);
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        let isEven = input % 2 === 0;
        const delimiters = [input];
        for (let i = Math.floor(input/2); i >= 1; i--) {
            if (input % i === 0) {
                delimiters.push(i);
            }
        }
        console.log(`Number: ${input}`);
        console.log(`Factorial: ${factorial}`);
        console.log(`Square: ${SQUARE}`);
        console.log(`isPrime: ${isPrime}`);
        console.log(`isEven: ${isEven}`);
        console.log(`Delimiters: ${delimiters.join(', ')}`);
        break;
    }
}
processNumber();

function table(){
    let symbol, number;

    while (true) {
        symbol = prompt('Enter a first number (1 to 3 characters)');
        if (symbol.length > 0 && symbol.length <= 3 && symbol.trim().length === symbol.length) {
            break;
        }
        console.log('Incorrect input!');
    }

    while (true) {
        number = +prompt('Enter a second number (positive integer less than 10)');
        if (Number.isInteger(number) && number > 0 && number < 10) {
            break;
        }
        console.log('Incorrect input!');
    }
    symbol = `${symbol} `;
    const OUTPUT = symbol.repeat(number);
    let result = '';
    for (let i = 0; i < number; i++) {
        result += `${OUTPUT.trim()}\n`;
        result.trim();
    }
    console.log(result);
}
table();


