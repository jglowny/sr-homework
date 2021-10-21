const prompt = require('prompt');

const max = 10;
const min = 1;
const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;

const properties = [{
    name: 'userNumber',
    validator: /^[0-9]+$/,
    warning: 'userNumber must be only number'
}];

prompt.start();

prompt.get(properties, function (err, result) {
    if (randomNumber === parseInt(result.userNumber)) {
        console.log(`Trafiona twoja liczba to ${result.userNumber}, wylosowane liczba to ${randomNumber}`)
    } else {
        console.log(`Pudło twoja liczba to ${result.userNumber}, wylosowane liczba to ${randomNumber}`)
    }
});
