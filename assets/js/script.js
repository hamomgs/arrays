// EXERCÍCIO COM CONSOLE

// let age = 19;

// if (age > 18) {
//     console.log('Você é maior de idade.');
// }

// let human = true;

// if (age > 18 && human == true) {
//     console.log('Você pode acessar o site. ^^')
// }

// let birthdayMonth = 1;

// if (birthdayMonth == 1 || birthdayMonth == 12) {
//     console.log('Você faz aniversário no mês premiado!');
// } 


// EXERCÍCIO BÔNUS NO CONSOLE

// let name = 'Rafael';
// let lastName = 'Ribeiro';

// if (name[0] == 'R') {
// 	console.log('Seu nome começa com R.');
// } 

// if (lastName.length > 6 || name[0] == 'E') {
// 	console.log('Seu nome começa com E ou seu sobrenome tem 6 letras.');
// }


// EXERCÍCIO COM PROMPT/ALERT/CONFIRM

let name = prompt('Qual seu nome?');
let lastName = prompt('Qual seu sobrenome?');
let age = prompt('Qual sua idade?');

if (age > 18) {
    alert(`Uau você já tem ${age} anos, já não é mais uma criança.`);
} else {
	alert(`Nossa, você tem ${age} anos, cuidado com os sites que acessa.`)
}

let human = confirm(`${name} se você for mesmo humano, selecione OK...`);

if (age > 18 && human == true) {
    alert('Humm então você é humano e maior de idade...');
} else if (human == false) {
	alert('Sempre acreditei em Aliens...')
} else if (human == true) {
	alert('Que bom que você é humano, nunca dúvidei.')
}

alert('Estamos premiando quem faz aniversário nos meses premiados, vejamos se você é um sortudo...')

let birthdayMonth = prompt('Qual mês do seu aniversário? \nResponda com o número do mês ex.: 4');

if (birthdayMonth == 1 || birthdayMonth == 12) {
    alert('Você faz aniversário no mês premiado!');
} else {
    alert('Poxa, seu aniversário não é no mês premiado...');
}

if (name[0] == 'R') {
	alert('Seu nome começa com R, então você ganha uma bala.');
} 

if (lastName.length > 6 || name[0] == 'E') {
	alert('Seu sobre nome é grande ou seu nome começa com E? Você ganha um emoji: 🦆');
}

alert(`${name}, foi um prazer ter você aqui, independente se você ganhou ou perdeu.`);