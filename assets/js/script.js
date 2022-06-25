// Crie um array que receba 5 itens e exiba no console.

let games = ['Minecraft', 'Arena of Valor', 'League of Legends', 'Valorant', 'Genshin Impact']
console.log(games)

// Utilize um método para adicionar um nome ao inicio do array.

games.unshift('Overwatch')
console.log(games)

// Utilize um método para remover o último nome do array.

games.pop()
console.log(games)

// Utilize um método para adicionar dois nomes ao fim do array.

games.push('Fall Guys', 'Gotham Knights')
console.log(games)

// Utilize um método para remover o primeiro nome do array.

games.shift()
console.log(games)

// Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a, b) {
  return a-b
})

console.log(numbers)