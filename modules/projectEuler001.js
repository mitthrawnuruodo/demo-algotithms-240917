export function finnSum (n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(finnSum(10)); // Skal gi 23
console.log(finnSum(1000)); // Skal gi 233168
