const firstNumber = prompt ('Введіть будь яке число');
const secondNumber = prompt ('Введіть будь яке число');

let a = parseFloat(firstNumber);
let b = parseFloat(secondNumber);

function sum (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Ви не ввели число!'
    }

    return a + b
}

function diff (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Ви не ввели число!'
    }

    return a - b
}

function prod (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Ви не ввели число!'
    }

    return a * b
}

function prop (a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Ви не ввели число!'
    }

    if (b == 0) {
        return 'На нуль ділити не можна!'
    }

    return a / b
}


alert (`Сума цих чисел: ${sum(a, b)}
Різниця цих чисел: ${diff(a, b)}
Добуток цих чисел: ${prod(a, b)}
Часта цих чисел: ${prop(a, b)}`)


//Найбільше та найменше число
const myArr = new Array(12, 5, 7, 13, 4, 2, 6, 11, 9, 10);

function getMaxClosure() {
    let max = -Infinity;

    return function (number) {
        if(number > max) {
            max = number;
        }

        return max;
    }
}

function findMaxNumber(numbers) {
    const getMax = getMaxClosure();

    for(let i = 0; i < numbers.length; i++) {
        if (!Number(numbers[i])) {
            continue;
        }
        getMax(numbers[i]);
    }

    return getMax();
}

function getMinClosure() {
    let max = Infinity;

    return function (number) {
        if(number < max) {
            max = number;
        }

        return max;
    }
}

function findMinNumber(numbers) {
    const getMin = getMinClosure();

    let i = 0;
    while (i < numbers.length) {
        getMin(numbers[i])
        i++   
    }
    
    return getMin();
}

console.log(findMaxNumber(myArr));
console.log(findMinNumber(myArr));
