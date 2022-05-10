/*
    Input: A sequence of n numbers (a1, a2, ..., an)
    Output: A sequence of n numbers (a1', a2', ..., an') of the input sequence such that a1' <= a2' <= ... <= an'
*/

//let a = [5, 2, 4, 6, 1, 3];
let a = [31, 41, 59, 26, 41, 58];

// Non decreasing order
for (let j = 1; j < a.length; j++) {
    let key = a[j];

    let i = j-1;

    while (i >= 0 && a[i] > key) {
        a[i+1] = a[i];
        i--;
    }

    a[i+1] = key;
}


console.log(a);

// Non Increasing order
for (let j = 1; j < a.length; j++) {
    let key = a[j];

    let i = j-1;

    while (i >= 0 && a[i] < key) {
        a[i+1] = a[i];
        i--;
    }

    a[i+1] = key;
}

console.log(a);

/*
    Loop Invariant:
       Initialization (It is true prior to the first iteration of the loop.):
          j = 1; The subarray a[0..j-1] consists of just the single element a[0] which is in fact the original element in a[0].
          Moreover this subarray is sorted trivially which shows that the loop invariant holds prior to the first iteration.

       Maintenance (It is true before an iteration of the loop. It remains true before the next iteration of the loop.):
          Each iteration maintains the loop invariant. The body of the for loop works by moving A[j-1], A[j-2], A[j-3],
          and so on by one position to the right until it finds the proper position for A[j] at which point it inserts the value
          A[j] into the array. The subarray A[1...j] now consists of the original elements of the A[j...1] but in sorted order.
          Incrementing j for the next iteration then preserves the loop invariance.

       Termination (When the loop terminates, the invariant gives us a useful property that helps show that the algorithm is correct):
          The loop terminates when j > A.length = n. Because each loop iteration increases j by one, we must have j = n + 1 at that time.
          Substituting n + 1 for j in the wording of loop invariant we have that the subarray A[1...n] consist of the original elements of A[1...n]
          but in sorted order. By observing the entire array A[1...n] we can see that it is sorted and we can conclude that the algorithm is correct.

*/
// ---------------------------------------------------------------------------------------------------------------------
/*
 Exercise 2.1-3:
    Input: A sequence of n numbers (a1, a2, ..., an) and a value v.
    Output: An index i such that v = A[i] or the special value null if does not appear in A.
*/

let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let v = 4;
let index = null;
let i = a.length - 1;

while (i >= 0) {
    if (A[i] === v) {
        index = i;
        break;
    }

    i--;
}

console.log(index);

/*
    Loop Invariant:
       Initialization (It is true prior to the first iteration of the loop.):
          i =0; The subarray a[0..i-1] consists of just the single element a[0] which is in fact the original element in a[0].
          Moreover the initial value of the input v is the original value of the input v.

       Maintenance (It is true before an iteration of the loop. It remains true before the next iteration of the loop.):
          Each iteration maintains the loop invariant. The body of the for loop works by iterating through the array A[0...n] comparing at each iteration if the value v is equal to A[i].

       Termination (When the loop terminates, the invariant gives us a useful property that helps show that the algorithm is correct):
         The loop terminates if the iterator i is equal to A.length - 1. Because each loop iteration increases i by one, we must have i = n - 1 at that time.
         Moreover on the termination of the loop the index result has either an index of type number which represents the position of the value v in the array A[0...n] or the special value null if v does not appear in A[0...n].

*/
// ---------------------------------------------------------------------------------------------------------------------
/*
 Exercise 2.1-4:
    Input: A[0...n] bit integer, B[0...n] bit integer
    Output: An C[0, n+1] bit integer


    Loop Invariant:
       Initialization (It is true prior to the first iteration of the loop.):
          i = A.length - 1; the subarray A[0...i-1] consists of just the single element A[A.length - 1] which is in fact the original element in A[A.length - 1] and the subarray B[0...i-1] consists of just the single element B[A.length - 1] which is in fact the original element in B[A.length - 1].
          Moreover the initial value of the Array C[0...n+1] is the empty array.
       Maintenance (It is true before an iteration of the loop. It remains true before the next iteration of the loop.):
           Each iteration maintains the loop invariant. The body of the for loop works by iterating through the array A[0...n] and B[0...n], adding at each iteration the value A[i] and B[i] in binary system to the array C[0...n+1].
       Termination (When the loop terminates, the invariant gives us a useful property that helps show that the algorithm is correct):
         The loop terminates if the iterator i = 0 and the carryOver is stored in C[n+1]. Because each loop iteration decreases i by one, we must have i = A.length - 1 at that time.
*/


let aVector = [1,0,1,0,1,0,1,0];
let BVector = [1,1,0,0,1,1,0,0];
let cVector = [];
let carryOver = 0;

for (let i = aVector.length - 1; i >= 0; i--) {
    let result = aVector[i] + BVector[i] + carryOver;

    if (result === 2) {
        carryOver = 1;
        result = 0;
    } else if (result === 3) {
        carryOver = 1;
        result = 1;
    } else {
        carryOver = 0;
    }

    cVector.unshift(result);
}

cVector.unshift(carryOver);

console.log('C: ', cVector);
// 0101110110
