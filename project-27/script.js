const btn = document.querySelector('#btn');
const container = document.querySelector('#toasts');


const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5'
];

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = `${messages[Math.floor(Math.random() * messages.length) ]}`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 2000);
}