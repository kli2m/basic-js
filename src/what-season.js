module.exports = function getSeason(date) {
    if (date === null || date === undefined) return "Unable to determine the time of year!"
    if (!date.getTime()) throw Error("throws an error on tricky moment")
    if (Number.isNaN(Date.parse(date))) throw Error("throws an error on tricky moment")
    const month = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"]
    let d = new Date(date)
    return month[d.getMonth()]
};