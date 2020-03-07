module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    return members.filter(v => typeof(v) === "string").map(v => v.trim().toUpperCase()).map(v => v[0]).sort().join("");
};