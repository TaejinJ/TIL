
function rot13(str) {
    let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    return str.replace(/[a-z]/gi, (check) => {
        return output[input.indexOf(check)];
    });
}
console.log(rot13("hello my name is samuel!!!"));
