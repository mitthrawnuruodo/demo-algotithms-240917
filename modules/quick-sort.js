function partition(arr, start, end){
    // Taking the last element as the pivot
    // console.log(arr, start, end);
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

/** "public" function */
export function quickSort (arr) {
    const rArr = [...arr]; // Preserve original
    quickSortRecursive(rArr, 0, rArr.length-1); // sort the copy
    return rArr; 
}

// Testing
// const randomArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
// console.log(randomArray);

// let sortedArr = quickSort(randomArray);
// console.log("QS: " + sortedArr);