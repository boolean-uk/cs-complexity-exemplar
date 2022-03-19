/*
Conceptual description: Conceptual description: A distributed sorting algorithm that separates the elements into different buckets, or smaller arrays, and then uses a simpler sorting algorithm to sort each bucket. This algorithm works best when the elements can be distributed into even buckets. If the elements are largely sparse, then using more buckets is better, and vice versa.
Time Complexity: Best: O(n + k), Worst: O(n^2)
Space Complexity: O(n + k)
*/
export const bucketSort = (array) => {
    const min = Math.min(...array);
    const max = Math.max(...array);
    const size = array.length;
    const buckets = Array.from(
        { length: Math.floor((max - min) / size) + 1 },
        () => []
    );

    //It would be useful to uncomment this and then coment on why, given the input data ;)
    //console.log('bucks', size, min, max, Math.floor((max - min) / size) + 1, buckets)

    array.forEach(val => {
        buckets[Math.floor((val - min) / size)].push(val);
    });
    
    return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
}


