function removeNb(n) {
    /** conditions
     *  A friend of mine takes the sequence of all numbers from 1 to n(where n > 0).
    Within that sequence, he chooses two numbers, a and b.
    He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
    Given a number n, could you tell me the numbers he excluded from the sequence ?
    */

    //1. sum= (n*(n+1))/2
    let sum = (n * (n + 1)) / 2;
    let result = [];

    for (let b = n; b > 0; b--) {
        //2-1. a*b= sum-a-b;
        //2-2. a*b+a=sum-b;
        //2-3. a(b+1)= sum-b;
        //3.  a=(sum-b)/(b+1);
        const a = (sum - b) / (b + 1);
        if (a < n && Number.isInteger(a)) {
            result.push([a, b]);
        }

    }
    return result;

}
console.log(removeNb(26)); //[15, 21] [21, 15]
