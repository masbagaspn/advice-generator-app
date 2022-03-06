const button = document.querySelector('.btn');
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const diceIcon = document.getElementById('dice-icon');

const apiUrl = 'https://api.adviceslip.com/advice';

const fetchAdvice = async() => {
    diceIcon.classList.add('bounce');
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
        diceIcon.classList.remove('bounce');
    }, 2000);

    const response = await fetch(apiUrl);
    const parseJSON = await response.json();
    const slip = parseJSON.slip;

    adviceId.innerHTML = `advice #${slip.id}`;
    adviceText.innerHTML = `"${slip.advice}"`;

}



button.addEventListener('click', fetchAdvice);
