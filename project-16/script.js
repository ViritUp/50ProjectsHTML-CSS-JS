const smallCups = document.querySelectorAll('.cup-small'),
      liters = document.querySelector('#liters'),
      percentage = document.querySelector('#percentage'),
      remained = document.querySelector('#remained');


updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx);
    });
});

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') && idx + 1 == smallCups.length || smallCups[idx].classList.contains('full') && !smallCups[idx+1].classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, i) => { 
        if(i <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerHTML = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerHTML = `${(totalCups * 0.25) - (250 * fullCups / 1000)} L`;
    }
}