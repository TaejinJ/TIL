// DESCRIPTION:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxsequence(arr){
    let currentsum=0;
    let maxsum = 0;
    for (let i = 0; i < arr.length; i++) {
        // 0과 currentsum과 arr[i]더한것중 큰걸 저장

        currentsum  = Math.max(0,currentsum+arr[i]);
        ///연속부분 배열중 최대합과 현재 인덱스에서 끝나는 연속부분 배열의 합중에서 큰걸 저장.
        maxsum = Math.max(maxsum,currentsum);
        
    }
    return maxsum;
}