export const makeRandomList = (totalElements = 1000, maxValue = 100) => {
    let label = `making list with ${totalElements} elements`;

    const arr = [];

    console.time(label);
    for (let i = 0; i < totalElements; i++) {
        arr.push(Math.floor(Math.random() * maxValue) + 1);
    }
    console.timeEnd(label);

    return arr;
}