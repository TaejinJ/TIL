function generateHashtag(str) {
    if (str === "" || str.length > 141) {
        return false;
    }
    let change = str.replace(/(\s*)/g, "");
    return "#" + change;
}
console.log(generateHashtag("h          ello"));
console.log(generateHashtag("h          e        ll           o"));
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag(" Hello there thanks for trying my Katasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"));


