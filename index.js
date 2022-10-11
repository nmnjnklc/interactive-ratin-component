document.querySelector('.submit').addEventListener('click', () => {
    document.querySelector('.main').classList.add('hidden');
    document.querySelector('.thank-you').style.display = 'flex';
})

const rates = document.querySelectorAll('.rating-button');

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        document.querySelector('#rate').innerHTML = rate.innerHTML;
    });
});