/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/

const sum = function calculateSum(x, y) {
    return x + y
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/

console.log(`A soma de 22 + 25 é igual a ${sum(22, 25)}`);


/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/

console.log(`O nome da função que faz a soma é ${sum}`);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/

function showName() {
    return 'Kassiane Braga'
}


/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/

let varShowName = showName


/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/

console.log(`A função varShowName retorna ${varShowName()}`);

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(op) {
    return function (x, y) {
        switch (op) {
            case '+':
                return `Resultado da operação: ${x} ${op} ${y} = ${x + y}`
            case '-':
                return `Resultado da operação: ${x} ${op} ${y} = ${x - y}`
            case '*':
                return `Resultado da operação: ${x} ${op} ${y} = ${x * y}`
            case '/':
                return `Resultado da operação: ${x} ${op} ${y} = ${x / y}`
            case '%':
                return `Resultado da operação: ${x} ${op} ${y} = ${x % y}`

            default:
                return 'Operação inválida'
        }
    }
    // return resultado(20, 10)
}


/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/

const sum2 = calculator('+')

/*
Agora `sum2` é uma função. Mostre no console a soma de dois números, usando ela.
*/

console.log(sum2(10, 20))

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/

const sub = calculator('-')
const mult = calculator('*')
const div = calculator('/')
const mod = calculator('%')

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/

console.log(sub(22, 7))
console.log(mult(8, 9))
console.log(div(144, 12))
console.log(mod(15, 3))