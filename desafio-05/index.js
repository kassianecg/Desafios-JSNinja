/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const newArray = [function () { }, 10, "valores", true, { prop1: 'Teste' }]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaArray(arr) {
    return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(retornaArray(newArray)[1])


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndice(arr, indice) {
    return arr[indice]
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let recebeArray = [true, 5, [6, 7, 8, 'nove'], { color: "red" }, 'FinalVar']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(retornaIndice(recebeArray, 0));
console.log(retornaIndice(recebeArray, 1));
console.log(retornaIndice(recebeArray, 2));
console.log(retornaIndice(recebeArray, 3));
console.log(retornaIndice(recebeArray, 4));
console.log(retornaIndice(recebeArray, 5));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/


// Manter um padrão de variaveis para fácil identificação do que ela recebe
function book(bookName) {
    let allBooks = {
        'HarryPotterAndTheOrderOfPhoenix': {
            quantidadePaginas: 10,
            autor: "J.K. Rowling",
            editora: "Rocco"
        },
        'HarryPotterAndTheChamberOfSecrets': {
            quantidadePaginas: 10,
            autor: "J.K. Rowling",
            editora: "Rocco"
        },
        'HarryPotterAndTheGlobetOfFire': {
            quantidadePaginas: 10,
            autor: "J.K. Rowling",
            editora: "Rocco"
        }
    }
    return !bookName ? allBooks : allBooks[bookName]
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro HarryPotterAndTheGlobetOfFire tem ' + book('HarryPotterAndTheGlobetOfFire')?.quantidadePaginas + ' páginas!')


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro HarryPotterAndTheGlobetOfFire é ' + book('HarryPotterAndTheGlobetOfFire')?.autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro HarryPotterAndTheGlobetOfFire foi publicado pela editora ' + book('HarryPotterAndTheGlobetOfFire')?.editora)
