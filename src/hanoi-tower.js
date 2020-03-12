module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 2 ** disksNumber - 1
    let temp = turnsSpeed / 3600
    return { turns: turns, seconds: turns / temp }
}