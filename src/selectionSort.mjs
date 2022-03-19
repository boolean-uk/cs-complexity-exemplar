/*
Conceptual description: Sorts an array by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. 
Time Complexity: O(n^2)
Space Complexity: Auxillary space complexity of O(1) (because of swap and temporary index). Also, I don't sort in place, so O(n)
*/
import { inplaceSwap } from "./utils.mjs";

export const selectionSort = (array) => {
    const sortedArray = [...array];
    let i, j, minIndex;
  
    for (i = 0; i < sortedArray.length - 1; i++)
    {
        minIndex = i;
        for (j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;  
            }
        }
        // Swap the found minimum element with the first element
        inplaceSwap(sortedArray, minIndex, i);
    }
    return sortedArray;
} 
