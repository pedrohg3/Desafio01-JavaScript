// Desafio Rocketseat, Stage 04 

alert("Insira dois números!")

let userNumber = prompt("Digite o primeiro número!")
let userNumber2 = prompt("Digite o segundo número!")

userNumber = Number(userNumber)
userNumber2 = Number(userNumber2)

const sum = (userNumber + userNumber2)
const sub = (userNumber - userNumber2)
const multi = (userNumber * userNumber2)
const div = (userNumber / userNumber2).toFixed(2)
const restDiv = (userNumber % userNumber2)


alert(`Soma : ${sum} `)
alert(`Subtração : ${sub} `)
alert(`Multiplicação : ${multi} `)
alert(`Divisão : ${div} `)
alert(`Resto da divisão : ${restDiv} `)


if ((userNumber + userNumber2) % 2 == 0) {
    alert(`A soma dos dois números é par: ${sum} `)
} else {
    alert(`A soma dos dois números é ímpar: ${sum} `)
}


if (userNumber == userNumber2) {
    alert("Os números que você escolheu são iguais!")
} else {
    alert("Os números que você escolheu não são iguais!")
}





