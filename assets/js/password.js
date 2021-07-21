$('#clipboard').on('click', () => {
    const password = $('#result').text();
    if (password === "🤷 You didn't pick anything!") return;

    // create a textarea to copy to clipboard, then remove textarea
    const textarea = document.createElement('textarea');
    textarea.value = password;
    $('body').append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    // alert the user
    $('#result').text('Copied to clipboard!');
    setTimeout(() => $('#result').text(password), 1500);
});

$('#generate').on('click', () => {
    const length = +$('#length').val(); // "+" in place of "parseInt()"
    const upper = $('#uppercase')[0].checked; // boolean value
    const lower = $('#lowercase')[0].checked; // boolean value
    const numbers = $('#numbers')[0].checked; // boolean value
    const symbols = $('#symbols')[0].checked; // boolean value

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
