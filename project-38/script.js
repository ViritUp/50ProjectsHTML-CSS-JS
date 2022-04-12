const imgs = document.querySelectorAll('.phone .content');
const tabs = document.querySelectorAll('.phone nav ul li');

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');

        imgs.forEach(img => img.classList.remove('show'));
        imgs[idx].classList.add('show');
    });
});