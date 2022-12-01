// Pete likes to bake some cakes.He has some recipes and ingredients.Unfortunately he is not good in maths.Can you help him to find out, how many cakes he could bake considering his recipes ?

//     Write a function cakes(), which takes the recipe(object) and the available ingredients(also an object) and returns the maximum number of cakes Pete can bake(integer).
//     For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
//     Ingredients that are not present in the objects, can be considered as 0




function cakes(recipe, available) {
    var CanMake = [];
    //1. recipe와 available을  비교
    for (var key in recipe) {
        //2. 비교했을때 key값이 일치 하는지 다 돌려보고 일치하면
        // 2-1 CanMake베열에 나눈값 넣어주기
        if (recipe.hasOwnProperty(key)) {
            if (key in available) {
                CanMake.push(Math.floor(available[key] / recipe[key]));

                // console.log(CanMake); 배열안에 나눈 값이 push됨  // [24,60,10]
            } else {
                //2-2) 비교시 하나라도 없으면 return 0
                return 0;
            }
        }
    }
    // CanMake의 최솟값 찾기 === 만들수 있는 갯수찾기
    return Math.min.apply(null, CanMake);

}
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 12000, sugar: 12000, eggs: 10, milk: 200000 }));
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { apple: 12000, sugar: 12000, eggs: 10, milk: 200000 }));