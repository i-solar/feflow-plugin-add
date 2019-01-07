module.exports = function add (feflow) {
    // 原函数逻辑
    return function (args) {
        const sum = args.reduce((sum, item) => {
            return sum + item
        }, 0)

        // console.log(sum)
        feflow.log.info(sum)
        return sum
    }
}