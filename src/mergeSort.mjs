/*
Conceptual description: Recursive solution that continuously slices the array in half and saves the data on either side of the mid point. It’ll return when we there are 1 item arrays, then use the merge utility to start building the smaller arrays back into one large array, with every merge sorting them along the way.
Time Complexity: O(n log n)
Space Complexity:  Auxillary space complexity of O(1) (because of swap)
*/

import { merge } from "./utils.mjs";

export const mergeSort = (array) => {
    
    if (array.length <= 1) return array;    
    
    const sortedArray = [...array];
    const mid = Math.floor(sortedArray.length / 2),
    left = mergeSort(sortedArray.slice(0, mid)),
    right = mergeSort(sortedArray.slice(mid));

    return merge(left, right); 
} 


