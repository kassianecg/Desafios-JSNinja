function soma(x, y) {
    return x + y;
}
var somar = soma(4, 6) + 5;
console.log('O valor da soma é: ', somar);


var novoValor;
function addValor() {
    novoValor = 30;
    //Usando crase é possível utilizar valores de variáveis direto.
    return `O novo valor é: ${novoValor}`;
}
console.log(addValor());
/* O valor da variável é 30.*/


function novaFun(x, y, z) {
    if (x === undefined || y === undefined || z === undefined) {
        return 'Preencha todos os valores corretamente!';
    }
    return (x * y * z) + 2;
}

console.log('Primeira chamada: ', novaFun(1, 2))
console.log('Segunda chamada: ', novaFun(3, 4, 5))


function segundaFun(x, y, z) {
    if (x !== undefined && y !== undefined && z !== undefined) {
        return x;

    } else if (x !== undefined && y !== undefined && z === undefined) {
        return x + y;

    } else if (x !== undefined && y !== undefined && z === undefined) {
        return (x + y) / z;
    }
    else if (x === undefined && y === undefined && z === undefined) {
        return false;
    }
    else {
        return null;
    }
}

console.log('1° chamada: ', segundaFun())
console.log('2° chamada: ', segundaFun(1))
console.log('3° chamada: ', segundaFun(2, 3))
console.log('4° chamada: ', segundaFun(4, 5, 6))
