const faq = document.querySelectorAll('.faq');
const btns = document.querySelectorAll('.faq-btn');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        faq[index].classList.toggle('active');
    });
});