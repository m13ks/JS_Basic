const firstNumber = prompt('Введіть будь яке число');
const secondNumber = prompt('Введіть будь яке число');

let a = parseFloat(firstNumber);
let b = parseFloat(secondNumber);

function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Ви не ввели число!'
  }

  return a + b;
}

function diff(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Ви не ввели число!'
  }

  return a - b;
}

function prod(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Ви не ввели число!'
  }

  return a * b;
}

function prop(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Ви не ввели число!'
  }

  if (b == 0) {
    return 'На нуль ділити не можна!'
  }

  return a / b;
}

const sumResult = sum(a, b);
const diffResult = diff(a, b);
const prodResult = prod(a, b);
const propResult = prop(a, b);

document.write(`
  <h2>Сума цих чисел: <span style="color: ${sumResult >= 0 ? 'green' : 'red'}">${sumResult}</span></h2>
  <h2>Різниця цих чисел: <span style="color: ${diffResult >= 0 ? 'green' : 'red'}">${diffResult}</span></h2>
  <h2>Добуток цих чисел: <span style="color: ${prodResult >= 0 ? 'green' : 'red'}">${prodResult}</span></h2>
  <h2>Часта цих чисел: <span style="color: ${propResult >= 0 ? 'green' : 'red'}">${propResult}</span></h2>
`);




//Найбільше та найменше число
const myArr = new Array(12, 5, 7, 13, 4, 2, 6, 11, 9, 10);

function getMaxClosure() {
  let max = -Infinity;

  return function(number) {
    if (number > max) {
      max = number;
    }

    return max;
  };
}

function findMaxNumber(numbers) {
  const getMax = getMaxClosure();

  for (let i = 0; i < numbers.length; i++) {
    if (!Number(numbers[i])) {
      continue;
    }
    getMax(numbers[i]);
  }

  return getMax();
}

function getMinClosure() {
  let min = Infinity;

  return function(number) {
    if (number < min) {
      min = number;
    }

    return min;
  };
}

function findMinNumber(numbers) {
  const getMin = getMinClosure();

  let i = 0;
  while (i < numbers.length) {
    getMin(numbers[i]);
    i++;
  }

  return getMin();
}

const maxResult = document.createElement("h3");
const minResult = document.createElement("h3");

maxResult.innerHTML = `Максимальне число: ${findMaxNumber(myArr)}`;
minResult.innerHTML = `Мінімальне число: ${findMinNumber(myArr)}`;

document.body.appendChild(maxResult);
document.body.appendChild(minResult);

maxResult.style.color = "black";
minResult.style.color = "gray";



