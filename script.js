let firstNumber = prompt ('Введіть будь яке число');
let secondNumber = prompt ('Введіть будь яке число, окрім нуля!!!');

let a = Number(firstNumber);
let b = Number(secondNumber);

let sum = a + b;
let diff = a - b;
let prod = a * b;
let prop = a / b;


alert (`Сума цих чисел: ${sum}
Різниця цих чисел: ${diff}
Добуток цих чисел: ${prod}
Часта цих чисел: ${prop}`);