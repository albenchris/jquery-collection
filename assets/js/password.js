


// character codes - https://net-comber.com/charset.html
const getRandomLowercase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 97));
const getRandomUppercase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 65));
const getRandomNumber = () => JSON.stringify(Math.floor(Math.random() * 10));
const getRandomSymbol = () => String.fromCharCode(Math.floor(Math.random() * 6 + 33));

console.log(getRandomLowercase());
console.log(getRandomUppercase());
console.log(getRandomNumber());
console.log(getRandomSymbol());

