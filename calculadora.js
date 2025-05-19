function calcular(a, b, operacao) {
    if (operacao === 'soma') {
        return a + b;
    } else if (operacao === 'subtração') {
        return a - b;
    } else if (operacao === 'multiplicação') {
        return a * b;
    } else if (operacao === 'divisão') {
        return a / b;

    }
}

console.log(calcular(5, 3, 'soma'));
console.log(calcular(5, 3, 'subtração'));
console.log(calcular(5, 3, 'multiplicação'));
console.log(calcular(5, 3, 'divisão'));