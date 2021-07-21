
$('#generate').on('click', () => {
    const length = +$('#length').val(); // + in place of parseInt()
    const upper = $('#uppercase')[0].checked;
    const lower = $('#lowercase')[0].checked;
    const numbers = $('#numbers')[0].checked;
    const symbols = $('#symbols')[0].checked;

    $('#result').text(generatePassword(length, upper, lower, numbers, symbols));
});

const generatePassword = (
    length,
    upper,
    lower,
    numbers,
    symbols
) => {

    console.log(length, upper, lower, numbers, symbols);

    return 'hello';
};

// character codes - https://net-comber.com/charset.html
const getRandomUppercase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 65));
const getRandomLowercase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 97));
const getRandomNumber = () => JSON.stringify(Math.floor(Math.random() * 10));
const getRandomSymbol = () => {
    const symbols = '!@#$%^&*()-_=+[{]}<>?';
    return symbols[Math.floor(Math.random() * symbols.length)];
};
