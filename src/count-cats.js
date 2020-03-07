module.exports = function countCats(matrix) {
    let j = 0;
    matrix.map((v) => v.map((v2) => { if (v2 === "^^") j++ }));
    return j;
};