import { findMaxNumber } from "./modules/find-max.js";
import { makeRandomList } from "./modules/utils.js";
import { linearSearch } from "./modules/linear-search.js";
import { binarySearch } from "./modules/binary-search.js";

// Making a large array to search
let randArr = makeRandomList(10_000_000, 1_000_000);
//console.log (randArr);

// Find max
console.time("Find max");
let max = findMaxNumber(randArr);
console.timeEnd("Find max");
console.log("Max = " + max);

// Needle to search for note should be less than the maxValue in makeRandomList(totalElements, maxValue)
let needle = 942_042;
let result;

// Linear Search, on unsorted
console.time ("Linear Search unsorted");
result = linearSearch(randArr, needle);
console.log(result);
console.timeEnd ("Linear Search unsorted");

// Standard sort with toSorted()
console.time ("Standard sort")
let sortedArr = randArr.toSorted((a,b)=>a-b);
console.timeEnd ("Standard sort")
//console.log(sortedArr);

// Linear Search, on sorted
console.time ("Linear Search sorted");
result = linearSearch(sortedArr, needle);
console.log(result);
console.timeEnd ("Linear Search sorted");

// Binary Search
console.time ("Binary Search");
result = binarySearch(sortedArr, needle);
console.log(result);
console.timeEnd ("Binary Search");