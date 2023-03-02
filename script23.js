const arr = new Array(12, 5, 7, 13, 4, 2, 6, 11, 9, 10);

//сума елементів масиву
let sum = 0;
for (let i=0; i<arr.length; i++) {
    if (!Number(arr[i])) {
        continue;
    }
    sum = sum + arr[i];
}
console.log(sum);

//мінімальне та максимальне значення елементів масиву
let max = arr[0];
let min = arr[0];
for (let i=0; i<arr.length; i++) {
    if (!Number(arr[i])) {
        continue;
    }
    if ( max < arr[i]) {
        max = arr[i];
    }
    if ( min > arr[i]) {
        min = arr[i];
    }
}
console.log(max);
console.log(min);

//драбина
let a = '#';
let b = a;
for (let i=0; i<5; i++){
    console.log(b);
    b += a;  
}