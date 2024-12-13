let nome = window.prompt('Qual é o seu nome?')

const myH1 = document.getElementById("myH1");
const myLabel = document.getElementById("myLabel");
const myBtn = document.getElementById("myBtn");
let randomNumber;
const min = 1;
const max = 100;

myH1.textContent = `Olá ${nome}, gere seu número da sorte abaixo:`;
myBtn.onclick = function() {
    randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNumber;
    myH1.textContent = `Parabéns ${nome}! seu número da sorte é`
}