/*
Conceptual description: Initialise an auxiliary count array that holds the count of each number, which you create by looping through the input array and incrementing the “count” for each value whenever you encounter that number in the array. Now, the auxiliary array holds the count of each element in the input array. The last step is to loop from the minimum value to the maximum value in the auxillary count array, and add in sequential order the elements who’s count is greater than 0 to the output array. You add each item to the output array by using a secondary incrementing variable, then increasing that second incrementing variable so the next item is placed in the next highest array index, and at each step you decrease the value of the current item in the count array so that you don’t add too many of elements that value. 

Nice visualisation: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html

Time Complexity: O(n + k), where n is the numbers of integers in your original array and k is the range of your min and max values. 
Space Complexity: O(n + k)
*/
export const countingSort = (array) => {
    
    const sortedArray = [];
    const min = Math.min(...array);
    const max = Math.max(...array);

    const count = new Array(max + min).fill(0);  
    for (let i = 0; i < array.length; i++) {
        count[array[i]] += 1;
    }  

    for (let [i, j] = [min, 0]; i <= max; i++) {
        while (count[i] > 0) {
            sortedArray[j] = i;
            j++;
            count[i]--;
        }
    }    
    
    return sortedArray;
} 


