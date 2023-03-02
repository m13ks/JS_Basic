const firstNumber = prompt ('Введіть будь яке число');
const secondNumber = prompt ('Введіть будь яке число');


if (firstNumber == "" || secondNumber == "") {
    alert ('Ви пропустили ввід числа');
} else{
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    if (b == 0) {
        alert ('На нуль ділити не можна!');
    } else {
        let sum = a + b;
        let diff = a - b;
        let prod = a * b;
        let prop = a / b;
    
        const result = `Сума цих чисел: ${sum}
        Різниця цих чисел: ${diff}
        Добуток цих чисел: ${prod}
        Часта цих чисел: ${prop}`
    
        if (a < b) {
            let difference = confirm('Ви впевнені, що хочете продовжити операцію?');
            if(difference) {
            alert(result);
            }
        } else {
            alert(result);
        }
            
    }

}




