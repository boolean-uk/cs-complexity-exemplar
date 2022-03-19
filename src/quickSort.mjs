/*
Conceptual description: Uses a divide-and-conquer strategy to break down the problem into simple subproblems until they become simple enough to solve directly. The idea is basically:

1. Select an element of the array to be a pivot. Most often this element is either the first or the last element in the array.
2. Partition the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot.If an element is equal to the pivot, it doesn't matter on which side it goes.
3. Repeat this process individually for the left and right side of the pivot, until the array is sorted.

Time Complexity: The worst-case time complexity of Quick Sort is O(n^2). The average case time complexity is O(n log n). The weak spot of the Quicksort algorithm is the choice of the pivot. Choosing a bad pivot (one that is greater than/less than most elements) every time, would give us the worst-case time complexity. While repeatedly choosing a pivot that has a roughly equal number of elements that are less than/greater than the pivot would give us a time complexity of O(n log n).

Space Complexity: In place alternative - O(log n). This one: O(n)
*/
export const quickSort = (array) => {
    if(array.length <= 1){
        return array;
    }
    
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for(let i=0; i < array.length-1;i++){
        if(array[i] < pivot){
            leftArr.push(array[i]);
        }
        else{
            rightArr.push(array[i])
        }
    }

    return [...quickSort(leftArr) ,pivot,...quickSort(rightArr)];
} 
