const name = "Vineet";
const repoCount = 5;
console.log(name + repoCount + " Value");// old style
console.log(`Hello my name is ${name} and my repo count is $ ${repoCount}`);
const gameName = new String('Vineet-bag');
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newstring2 = gameName.substring(0,4);
console.log(newstring2);
const anotherStrings = gameName.slice(-8, 4);
console.log(anotherStrings);

const newStringOne = "   vineet   ";
console.log(newStringOne);
console.log(newStringOne.trimStart());

const newstring3 = "cat are browns";
console.log(newstring3.split(","));

const url = "https://github.com/Vineetb638/Web-developmment-codes";
console.log(url.replace("developmment","develop"));
console.log(url.includes('Vineet'));
console.log(url.split("/"));


