let sum = (a, b) => a + b;

let sumResult = sum(10, 20) + 5;
console.log(sumResult); // 35

let variableWithoutValue;

let setVariableWithValue = () => "VALOR";

variableWithoutValue = setVariableWithValue();
console.log(variableWithoutValue); // "VALOR"

function anyFunction(arg1, arg2, arg3) {
    if (arg1 === undefined || arg2 === undefined || arg3 === undefined) {
        return "Preencha todos os valores corretamente!";
    }

    return arg1 * arg2 * arg3 + 2;
}

console.log(anyFunction(1, 2)); // "Preencha todos os valores corretamente!"
console.log(anyFunction(1, 2, 3)); // 8

function anyFunction2(arg1, arg2, arg3) {
    const args = [arg1, arg2, arg3].filter(arg => arg !== undefined);

    if (args.length === 0) {
        return false;
    }
    if (args.length === 1) {
        return args[0];
    }
    if (args.length === 2) {
        return args[0] + args[1];
    }
    if (args.length === 3) {
        return (args[0] + args[1]) / args[2];
    }
    return null;
}

console.log(anyFunction2()); // false
console.log(anyFunction2(5)); // 5
console.log(anyFunction2(5, 10)); // 15
console.log(anyFunction2(5, 10, 3)); // 5