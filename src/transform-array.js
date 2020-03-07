module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error();
    if (arr.length < 1) return arr;

    let arrTrans = ["--double-next", "--double-prev", "--discard-next", "--discard-prev"];

    let a = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arrTrans[0]) {
            if (i < arr.length - 1) a.push(arr[i + 1])
            continue;
        } else if (arr[i] === arrTrans[1]) {
            if (i != 0) a.push(arr[i - 1])
            continue;
        } else if (arr[i] === arrTrans[3]) {
            a.pop()
            continue
        } else if (arr[i] === arrTrans[2]) {
            i += 1;
            continue;
        }
        a.push(arr[i])
    }
    return a;

};