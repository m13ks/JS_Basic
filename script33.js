// метод піднесення до степеню n
Array.prototype.pow = function(n) {
    return this.map(function(x) {
        return Math.pow(x, n);
    });
};


// метод виконання функції через n мілісекунд
Function.prototype.defer = function(n) {
    setTimeout(this, n);
};
