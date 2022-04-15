const screens = document.querySelectorAll('.screen');
const choose_naruto_btns = document.querySelectorAll('.choose-naruto-btn');
const start_btn = document.querySelector('#start-btn');
const game_container = document.querySelector('.game-container');
const timeEl = document.querySelector('#time');
const scoreEl = document.querySelector('#score');
const messageEl = document.querySelector('#message');

let seconds = 0;
let score = 0;
let selected_naruto = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_naruto_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_naruto = {src, alt};
        screens[1].classList.add('up');
        setTimeout(createNaruto, 1000);
        startGame();
    });
});

function startGame(){
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function createNaruto() {
    const naruto = document.createElement('div');
    naruto.classList.add('naruto');
    const {x, y} = getRandomLocation();
    naruto.style.top = `${y}px`;
    naruto.style.left = `${x}px`;
    naruto.innerHTML = `<img src="${selected_naruto.src}" alt="${selected_naruto.alt}">`;
    /* style="transform: rotate(${Math.random() * 360}deg)" */

    naruto.addEventListener('click', catchNaruto);

    game_container.append(naruto);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 100) + 100;
    const y = Math.random() * (height - 100) + 100;
    return {x, y};
}

function catchNaruto() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    addNaruto();
}

function addNaruto() {
    setTimeout(createNaruto, 1000);
    setTimeout(createNaruto, 1500);
}

function increaseScore() {
    score++;
    scoreEl.innerHTML = `Score: ${score}`;

    if(score > 29) {
        messageEl.classList.add('visible');
    }

    if(score > 50) {
        messageEl.innerText = 'Stupid?!';
    }

    if(score > 70) {
        messageEl.innerText = 'STOP PLEASE!';
    }

    if(score > 100) {
        messageEl.innerText = "I'll kill you!!!!";
    }

    if(score > 149) {
        messageEl.innerText = "Glory to Ukraine!";
        messageEl.style.fontSize = '200px';
        messageEl.style.transform = 'translate(-50%, 0%)';
        messageEl.style.height = '100vh';
        messageEl.style.paddingTop = '35vh';

    }
}


window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        screens.forEach(screen => {
            if(screen.classList.contains('up')) {
                screen.classList.remove('up');
            }
        });
    }
});