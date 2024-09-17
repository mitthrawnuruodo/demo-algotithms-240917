export function findMaxNumber (arr) {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Testing
// let a = [];
// console.log("Maks av a: " + findMaxNumber(a)); // Maks av a: undefined
// let b = [42];
// console.log("Maks av b: " + findMaxNumber(b)); // Maks av b: 42

// let c = Array.from({ length: 50 }, () => Math.ceil(Math.random() * 100));
// console.log("Maks av c: " + findMaxNumber(c)); // Maks av c: n (Normally 95-100)
// console.log(c);