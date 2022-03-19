export const inplaceSwap = (array, indexFirst, indexSecond) => {
    const temp = array[indexFirst];
    array[indexFirst] = array[indexSecond];
    array[indexSecond] = temp;
}

/*
As long as there are items in either array, check if the first item in either array is smaller, then throw it into a sorted array and remove that item from the array with shift(). When that’s done, concatenate any leftovers (perhaps when one array is larger than the other) onto the end of the sorted array. Return the sorted array.
*/
export const merge = (arrayFirst, arraySecond) => {
    const sorted = [];

    while (arrayFirst.length && arraySecond.length) {
        if (arrayFirst[0] < arraySecond[0]) sorted.push(arrayFirst.shift());
        else sorted.push(arraySecond.shift());
    };

    return sorted.concat(arrayFirst.slice().concat(arraySecond.slice()));
}