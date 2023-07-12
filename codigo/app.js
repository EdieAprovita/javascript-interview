var today = new Date();
today.getMonth();
var person = {
    name: 'Max',
    age: 30
};
var squareDigits = function (num) {
    return num.toString().split('').map(Number).map(function (x) { return x * x; }).reduce(function (a, b) { return a + b; });
};
console.log(squareDigits(9119));
