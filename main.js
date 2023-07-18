// Operadores Matemáticos
const user = prompt('Qual o seu nome?');
alert(`Hello, ${user}`);

let numberOne = Number(prompt(`Digite o primeiro valor, ${user}`));
let numberTwo = Number(prompt(`Digite o segundo valor, ${user}`));

const sum = numberOne + numberTwo;
alert(`${user}, a soma deu: ${sum}`);

const sub = numberOne - numberTwo
alert(`A subtração deu: ${sub}`);

const multi = numberOne * numberTwo
alert(`A multiplicação deu: ${multi}`);

const div = numberOne / numberTwo
alert(`A divisão deu: ${div}`);

// // declarando valores

const declareVariable = prompt("Digite um valor: ");
const numero = Number(declareVariable);

if (!isNaN(numero)) {
    alert("É um número");
} else if (typeof numero === "boolean") {
    alert("É um booleano");
} else if (typeof declareVariable === "string") {
    alert("é uma string");
}

// Par ou impar?

const validatingEvenOdd = Number(prompt(`Descupra se o número é impar ou par, ${user}`))

const evenOdd = validatingEvenOdd % 2

if (evenOdd === 0) {
    alert('O número é par')
} else {
    alert('O número é impar')
}