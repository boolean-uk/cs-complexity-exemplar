/*
Conceptual description: swap adjacent elements if the first element is greater than the second. Hence the name - the largest value "bubbles" to the top.
Time Complexity: Worst case, O(n^2)
Space Complexity: Auxillary space complexity of O(1) (because of swap). Also, I don't sort in place, so O(n)
*/
import { inplaceSwap } from "./utils.mjs";

export const bubbleSort = (array) => {
    const sortedArray = [...array];
    for (let i = 0; i < sortedArray.length; i++) {
        // Last i elements are already in place 
        for (let j = 0; j < (sortedArray.length - i - 1); j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                inplaceSwap(sortedArray, j, j + 1)
            }
        }
    }
    return sortedArray;
} 


