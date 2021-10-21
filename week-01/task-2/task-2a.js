const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const max = 10;
const min = 1;
const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;

rl.question("podaj liczbe 0-10 ? ", function(userNumber) {
    if(randomNumber === userNumber){
        console.log(`Trafiona twoja liczba to ${userNumber}, wylosowane liczba to ${randomNumber}`)
    }
    else{
        console.log(`Pudło twoja liczba to ${userNumber}, wylosowane liczba to ${randomNumber}`)
    }
rl.close();});

