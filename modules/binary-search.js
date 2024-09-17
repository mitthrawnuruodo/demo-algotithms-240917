export function binarySearch (arr, target) {
    let left = 0; // Set left boundry, initially first element
    let right = arr.length - 1; // set right boundry, initially last element
    while (left <= right) {
        let middle = Math.floor((left+right)/2); // Find middle element's index
        if (arr[middle] < target) // If the middle value is less than target
            left = middle + 1; // ...then search right side of array
        else if (arr[middle] > target) // if the middle value is larger that target
            right = middle - 1; // ...search the left side of the array
        else // if middle equals target
        return middle; // ...return the index of the element
    }
    return -1; // If target not found, return -1
}