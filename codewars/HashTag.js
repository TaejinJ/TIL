function generateHashtag(str) {
    let res = '#' + str.split(' ')
        .map(word => word.charAt(0)
            .toUpperCase() + word.slice(1))
        .join('');

    return res = res.length > 140 || res.trim() == '' || res == '#' ? false : res;
}


// 다시짜봄 
function generateHashtag(str) {
    const output = str.trim().length > 0 &&
        '#' + str.split(' ').map(word => word && (word[0].toUpperCase() + word.slice(1))).join('');

    return output.length < 141 && output;
}






console.log(generateHashtag("h          ello"));


