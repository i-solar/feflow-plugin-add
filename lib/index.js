const calculate = require('./calculate')(feflow)

// 注册一个 add 命令
feflow.cmd.register('add', '加法运算器', function(args) {
    // args 是 add 后面的参数，已被 minimist 库解析
    // 例如 `feflow add 1 2 3`，args 就是 { _: [1, 2, 3] }，
    // 再比如 `feflow add -x 1 -y 2 --z-value 3 4 5 6`，args 就是 { _: [ 4, 5, 6 ], x: 1, y: 2, 'z-value': 3 }
    // 调用主要的逻辑
    return calculate.add(args._);
});

// 注册乘、除、减三个命令
feflow.cmd.register('multiply', '乘法运算器', args => calculate.multiply(args._));
feflow.cmd.register('minus', '乘法运算器', args => calculate.minus(args._));
feflow.cmd.register('divide', '乘法运算器', args => calculate.divide(args._));


