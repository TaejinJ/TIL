function josephusSurvivor(n, k) {
    var member = [],
        p = 0;
    for (var i = 0; i < n; i++) {
        member.push(i + 1);
    }
    while (member.length > 1) {
        p = (p + k - 1) % member.length;
        member.splice(p, 1);
    }
    return member.pop();
}
console.log(josephusSurvivor(7,3));