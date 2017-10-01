//Mój kod osobisty zanim przesunąłem stronę w dół
var manNames = ['Michał','Tomasz', 'Maciek', 'Mietek', 'Zdzisław'];
var womanNames = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Agnieszka', 'Ania'];
var allNames1 = manNames.concat(womanNames);
allNames1.push('Edyta');

console.log(manNames);
console.log(womanNames);
console.log(allNames1);

//Poniżej kod z zadania
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';
var indexOf = allNames.indexOf(newName);
console.log('The search value is on ' + indexOf + ' position');

if 	(allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}
console.log(allNames);
