const numberElement = document.getElementById('number');
const numberTwoElement = document.getElementById('number-two');
const numberThreeElement = document.getElementById('number-three');

const targetNumber = 200;
const targetNumberTwo = 351;
const targetNumberThree = 4.5;

const duration = 1500; // Duration of the animation in milliseconds

const animateNumber = () => {
    let startTimestamp = null;
    const startNumber = 0;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        numberElement.textContent = Math.floor(progress * targetNumber);
        numberTwoElement.textContent = Math.floor(progress * targetNumberTwo);
        numberThreeElement.textContent = (progress * targetNumberThree).toFixed(1);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};

const handleScroll = () => {
    const rect = numberElement.getBoundingClientRect();
    const rectTwo = numberTwoElement.getBoundingClientRect();
    const rectThree = numberThreeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animateNumber();
        window.removeEventListener('scroll', handleScroll);
    }

    if (rectTwo.top < window.innerHeight && rectTwo.bottom >= 0) {
        animateNumber();
        window.removeEventListener('scroll', handleScroll);
    }

    if (rectThree.top < window.innerHeight && rectThree.bottom >= 0) {
        animateNumber();
        window.removeEventListener('scroll', handleScroll);
    }
};

window.addEventListener('scroll', handleScroll);