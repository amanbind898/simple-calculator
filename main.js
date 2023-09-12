document.addEventListener('DOMContentLoaded', function () {
    let string = '';
    let buttons = document.querySelectorAll('.button');
    let inputField = document.querySelector('.input');
    let keypressSound = document.getElementById('keypressSound');

    // Preload the audio file
    keypressSound.preload = 'auto';

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerHTML;

            // Play the keypress sound immediately
            keypressSound.currentTime = 0;
            keypressSound.play();

            if (buttonText === 'X') {
                buttonText = '*';
            }
            
            if (buttonText === '=') {
                try {
                    string = eval(string);
                    inputField.value = string;
                } catch (error) {
                    inputField.value = 'Error';
                }
            } else if (buttonText === 'DEL') {
                string = string.substring(0, string.length - 1);
                inputField.value = string;
            } else if (buttonText === 'AC') {
                string = '0'; // Set the input to '0' on All Clear
                inputField.value = string;
            } else {
                if (string === '0') {
                    string = buttonText; // Replace '0' with the new button value
                } else {
                    string = string + buttonText;
                }
                inputField.value = string;
            }
        });
    });
});
