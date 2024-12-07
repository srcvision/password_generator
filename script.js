const passwordBox = document.getElementById('password');
const length = 8; // Fixed typo from `lenght` to `length`
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const specialChar = '!@#$%^&*(),.?":{}|<>';

const allchar = uppercase + lowercase + number + specialChar;

function createPassword() {
    let password = '';
    // Ensure at least one character from each category
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    // Fill the rest of the password
    while (password.length < length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    // Shuffle the password to randomize character positions
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
}
