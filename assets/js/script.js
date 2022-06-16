function msg() {
  console.log('Exercício 04 - Funções')
}

msg()

function myName(firstName) {
  console.log(`Primeiro nome: ${firstName}`)
}

myName('Brenda')

function info(name, age, musicStyle) {
  console.log(`Nome: ${name}\nIdade: ${age}\nEstilo musical: ${musicStyle}`)
}

info('Brenda Silva', 14, 'Rock')

function recommendation(movie, music) {
  console.log(`Recomendações:\nFilme: ${movie}\nMúsica: ${music}`)
}

recommendation('Silence Voice', 'P.Y.O.B.')

function triple(x) {
  x = x * 3
  return x
}

let value = 14

console.log(`Triplo de ${value} é ${triple(value)}`)
