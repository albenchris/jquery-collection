$('#clipboard').on('click', () => {
    const textarea = document.createElement('textarea');
    const password = $('#result').text();

    if (password === "🤷 You didn't pick anything!") return;

    textarea.value = password;
    $('body').append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});

$('#generate').on('click', () => {
    const length = +$('#length').val(); // "+" in place of "parseInt()"
    const upper = $('#uppercase')[0].checked;
    const lower = $('#lowercase')[0].checked;
    const numbers = $('#numbers')[0].checked;
    const symbols = $('#symbols')[0].checked;

    if (!upper && !lower && !numbers && !symbols) $('#result').text("🤷 You didn't pick anything!");
    else $('#result').text(generatePassword(length, upper, lower, numbers, symbols));
});

const generatePassword = (length, upper, lower, numbers, symbols) => {
    let totalAllowed = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (upper) totalAllowed += alphabet.toUpperCase();
    if (lower) totalAllowed += alphabet;
    if (numbers) totalAllowed += '0123456789';
    if (symbols) totalAllowed += '!@#$%^&*()-_=+[{]}<>?';

    let password = '';
    for (let i=0; i<length; i++) password += totalAllowed[Math.floor(Math.random() * totalAllowed.length)];

    return password;
};

// character codes - https://net-comber.com/charset.html

// const getRandomUppercase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 65));
// const getRandomLowercase = () => String.fromCharCode(Math.floor(Math.random() * 26 + 97));
// const getRandomNumber = () => JSON.stringify(Math.floor(Math.random() * 10));
// const getRandomSymbol = () => {
//     const symbols = '!@#$%^&*()-_=+[{]}<>?';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// };
