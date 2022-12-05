function generateHashtag(str) {
    let res = '#' + str.split(' ')
        .map(word => word.charAt(0)
            .toUpperCase() + word.slice(1))
        .join('');
    return res = res.length > 140 || res.trim() == '' || res == '#' ? false : res;
}

console.log(generateHashtag("h          ello"));
console.log(generateHashtag("h          e        ll           o"));
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag(" Hello there thanks for trying my Katasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"));


