function trim(str, size) {
    if (str.length <= size) return str;
    if (size > 3) size -= 3;
    return str.substr(0, size) + '...';
}
