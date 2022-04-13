const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRaiting = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        for(let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove('active');
        }
        e.target.parentNode.classList.add('active');
        
        if (e.target == e.target.parentNode.lastElementChild) {
            selectedRaiting = e.target.innerHTML;
        } else {
            selectedRaiting = e.target.nextElementSibling.innerHTML;
        }
    }
    if(e.target.classList.contains('rating')) {
        for(let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove('active');
        }
        e.target.classList.add('active');
        selectedRaiting = e.target.lastElementChild.innerHTML;
    }
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class='fas fa-heart'></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRaiting}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});