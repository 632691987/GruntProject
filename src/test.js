//let count = 0;

// function calBi(count) {
//     if (count === 1 || count === 2) {
//         return 1;
//     } else {
//         return calBi(count - 2) + calBi(count - 1);
//     }
// }

// console.log(calBi(30));

function fib(n) {
    var fib_n = function(curr, next, n) {
        if (n == 0) {
            return curr;
        } else {
            return fib_n(next, curr + next, n - 1);
        }
    }
    return fib_n(0, 1, n);
}
console.log(fib(30));