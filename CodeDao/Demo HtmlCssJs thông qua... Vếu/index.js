function playSound() {
    const audio = new Audio('./audio/BadGuy-BillieEilish-5936021.mp3');
    audio.play();
}

const left = document.querySelector('#b-left');
const status = document.querySelector('#status')

left.onclick = () => {
    playSound();
    left.style.top = '-10px';
    setTimeout(() => {
        left.style.top = '0px';
    }, 1000);
}

left.onmouseover = () => {
    left.style.width = '200px';
    status.innerText = "Touch";
}

left.onmouseleave = () => {
    left.style.width = '150px';
    status.innerText = 'Leave'
}