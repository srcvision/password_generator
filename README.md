# Password Generator

## Project Description
This project is a dynamic and secure password generator built with HTML, CSS, and JavaScript. It allows users to create strong and random passwords to enhance their online security. The generated passwords include uppercase letters, lowercase letters, numbers, and special characters, ensuring compliance with common password requirements.

## Features
- **Random Password Generation**: Creates a password with at least one character from each category (uppercase, lowercase, number, special character).
- **Customizable Length**: Generates passwords of a fixed length (default is 8 characters).
- **Clipboard Copy**: Users can copy the generated password to their clipboard with a single click.
- **Responsive Design**: Ensures a user-friendly interface on different devices.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the UI.
- **JavaScript**: For password generation logic and clipboard functionality.

## How to Use
1. Open the project in a browser.
2. Click the "Generate Password" button to create a new random password.
3. Click the "Copy Password" button to copy the generated password to the clipboard.

## Code Highlights
### Password Generation Logic
```javascript
const passwordBox = document.getElementById('password');
const length = 8;
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const specialChar = '!@#$%^&*(),.?":{}|<>';

const allchar = uppercase + lowercase + number + specialChar;

function createPassword() {
    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while (password.length < length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');
    passwordBox.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => alert('Password copied to clipboard!'))
        .catch((error) => console.error('Failed to copy password:', error));
}
```

## Getting Started
To use this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/srcvision/password_generator.git
   ```
2. Open the project folder.
3. Open `index.html` in your browser to run the application.

## Future Enhancements
- Allow users to customize password length.
- Provide options to include/exclude specific character types.
- Add dark mode for better user experience.

## Contribution
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more information.

