const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length
    },
    addLink(value) {
        this.arr.push(value)
        return this
    },
    removeLink(position) {
        if (typeof(position) !== 'number' || arguments.length === 0 || position <= 0 || (this.arr.length - 1) < position) {
            this.arr = []
            throw Error("throws an Error on removing wrong link")
        }
        this.arr.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.arr.reverse()
        return this
    },
    finishChain() {
        let temp = this.arr.map(v => `( ${v} )`).join("~~")
        this.arr = []
        return temp
    }
};

module.exports = chainMaker;