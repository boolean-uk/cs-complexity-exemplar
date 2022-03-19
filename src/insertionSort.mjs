/*
Conceptual description: An insertion sort compares values in turn, starting with the second value in the list. If this value is greater than the value to the left of it, no changes are made. Otherwise this value is repeatedly moved left until it meets a value that is less than it. The sort process then starts again with the next value.
Time Complexity: O(n^2)
Space Complexity: Auxillary space complexity of O(1) (because of swap and temporary index). Also, I don't sort in place, so O(n)
*/
export const insertionSort = (array) => {
    const sortedArray = [...array];
    let i, key, j; 
    for (i = 1; i < sortedArray.length; i++)
    { 
        key = sortedArray[i]; 
        j = i - 1; 
   
        while (j >= 0 && sortedArray[j] > key)
        { 
            sortedArray[j + 1] = sortedArray[j]; 
            j = j - 1; 
        } 
        sortedArray[j + 1] = key; 
    } 
    return sortedArray;
} 


