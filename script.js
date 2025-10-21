document.addEventListener('DOMContentLoaded', () => {
    // --- Screen Elements ---
    const loginScreen = document.getElementById('login-screen');
    const questionScreen = document.getElementById('question-screen');
    const messageScreen = document.getElementById('message-screen');

    // --- Login Screen Elements ---
    const nicknameInput = document.getElementById('nickname-input');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');
    
    // Accepted nicknames (case-insensitive)
    const acceptedNicknames = ['roy', 'be', 'beb', 'mahal', 'buba', 'bebeb', 'baby'];

    // --- Question Screen Elements ---
    const sobraButton = document.getElementById('sobra-button');
    const hindiButton = document.getElementById('hindi-button');

    // --- Function to switch screens ---
    function showScreen(screenToShow) {
        loginScreen.classList.add('hidden');
        questionScreen.classList.add('hidden');
        messageScreen.classList.add('hidden');
        screenToShow.classList.remove('hidden');
    }

    // --- Login Logic ---
    loginButton.addEventListener('click', () => {
        const inputNickname = nicknameInput.value.trim().toLowerCase();
        
        if (acceptedNicknames.includes(inputNickname)) {
            errorMessage.textContent = '';
            showScreen(questionScreen);
        } else {
            errorMessage.textContent = 'Nickname is incorrect. Try again, love! 😊';
        }
    });

    // Allows pressing Enter to login
    nicknameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginButton.click();
        }
    });

    // --- Question Logic ---
    hindiButton.addEventListener('click', () => {
        // Loop back to the question screen, you can also add a shake effect or a fun message here
        alert("Oh no! Try again. The answer must be 'SOBRA' for us to continue! 😉");
    });

    sobraButton.addEventListener('click', () => {
        showScreen(messageScreen);
    });

    // --- Floating Hearts Animation Logic ---
    const heartContainer = document.querySelector('.heart-container');
    const numberOfHearts = 20;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖'; 
        
        // Randomize position and animation delay
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 8 + 6}s`; // 6s to 14s duration
        heart.style.animationDelay = `-${Math.random() * 10}s`; // Start off-screen
        heart.style.fontSize = `${Math.random() * 1.5 + 1.5}em`; // 1.5em to 3em size

        heartContainer.appendChild(heart);

        // Remove heart after it's done animating to save memory
        setTimeout(() => {
            heart.remove();
        }, (parseFloat(heart.style.animationDuration) * 1000) + 100);
    }

    // Generate hearts initially and then continuously
    for (let i = 0; i < numberOfHearts; i++) {
        createHeart();
    }

    // Keep generating new hearts every second
    setInterval(createHeart, 1000); 

});
