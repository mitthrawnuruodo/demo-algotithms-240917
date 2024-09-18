export function insertionSort(array) {
    const arr = array.slice(); // Make a copy, could do [...array]
    // console.log(arr);
    let x, j; // declearing helpers
    // outer loop, staring at second element:
    for (let i = 1; i < arr.length; i++) { 
        x = arr[i]; // pick out value of the current element
        // inner loop, checking the sorted part:
        for (j = i-1; j >= 0 && arr[j] > x; j--) { 
            // moving element to the right as long as it's value is less than x:
            arr[j+1] = arr[j]; 
        }
        arr[j+1] = x; // insert value in place
    }
    return arr;
}

// Testing
// const randomArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
// console.log(randomArray);

// let sortedArr = insertionSort(randomArray);
// console.log("IS: " + sortedArr);