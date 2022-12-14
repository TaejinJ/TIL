function pigIt(str) {
    //1. str을 단어 단위로 쪼개주기(배열로 나옴);
    var arr = str.split(' ');
    //2.쪼개준 배열을 돌면서 글자면 +앞에글자를 뒤로 보내고 뒤에 ay를 붙여주기 아니면 그냥 word 반납(특문이나 띄워쓰기일경우를 봄)
    return arr
        .map((word) => {
            return word.match(/[A-z]/i)
                ? `${word.substr(1)}${word.substr(0, 1)}ay`
                : word

        })
        .join(' ')


}
console.log(pigIt(" Pig latin is cool ! ! ! "));