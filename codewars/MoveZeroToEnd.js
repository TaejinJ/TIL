//     Write an algorithm that takes an array and moves all of the zeros to the end,
//     preserving the order of the other elements.
//     moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    //1.for문으로 arr의 길이만큼 돌고,
    for (var i = arr.length; i--;) {
        //2.만약 i번째 오는 숫자가 0이라면 
        if (arr[i] === 0) {
            //3. splice를 통해 지워주고, 
            arr.splice(i, 1);
            //4.그자리에 0을 넣어준다.
            arr.push(0);
        }
    }
    //5.true가 아니면 arr을 반환
    return arr;



    return arr;
}
