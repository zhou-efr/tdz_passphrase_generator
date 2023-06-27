const passphrase_input_field = document.getElementById('passphrase');
const generate_button = document.getElementById('generate');

const handle_click = (e) => {
    e.preventDefault();

    // get five random words from a txt file on url
    const url = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa.txt";
    // separators =  __--0123456789
    const passphrase_separators = [',', '.', '?', '!', ';', ':', '-', '_', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    fetch(url)
        .then(response => response.text())
        .then(text => {
            const words = text.split('\n');
            const passphrase = [];
            for (let i = 0; i < 5; i++) {
                const random_index = Math.floor(Math.random() * words.length);
                passphrase.push(words[random_index]);
            }
            // different separators for each word
            const passphrase_with_separators = [];
            for (let i = 0; i < passphrase.length; i++) {
                const random_index = Math.floor(Math.random() * passphrase_separators.length);
                passphrase_with_separators.push(passphrase[i] + passphrase_separators[random_index]);
            }
            // join the words with the separators
            const passphrase_string = passphrase_with_separators.join('');
            // set the passphrase to the input field
            passphrase_input_field.value = passphrase_string;
        }
        )
}

// link the click event to the button
generate_button.addEventListener('click', handle_click);
