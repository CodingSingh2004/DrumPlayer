
// Now this code will be ready for the Phone and pc Both responsive as well as logical.

var tom1 = document.querySelector('.w')
var tom2 = document.querySelector('.a'); 
var tom3 = document.querySelector('.s')
var tom4 = document.querySelector('.d');
var snare = document.querySelector('.j')
var crash = document.querySelector('.k')
var kick = document.querySelector('.l')


tom1.addEventListener('click', function () {
    tom1.style.color = "White";
    var audio1 = new Audio('sounds/tom-1.mp3');
    audio1.play();
})
tom2.addEventListener('click', function () {
    tom2.style.color = "White";
    var audio2 = new Audio('sounds/tom-2.mp3');
    audio2.play();
})
tom3.addEventListener('click', function () {
    var tom3 = document.querySelector('.s')
    tom3.style.color = "White";
    var audio3 = new Audio('sounds/tom-3.mp3');
    audio3.play();
})
tom4.addEventListener('click', function () {
    tom4.style.color = "White";
    var audio4 = new Audio('sounds/tom-4.mp3');
    audio4.play();
})
snare.addEventListener('click', function () {
    snare.style.color = "White";
    var audio5 = new Audio('sounds/snare.mp3');
    audio5.play();
})
crash.addEventListener('click', function () {
    crash.style.color = "White";
    var audio6 = new Audio('sounds/crash.mp3');
    audio6.play();
})
kick.addEventListener('click', function () {
    kick.style.color = "White";
    var audio7 = new Audio('sounds/kick-bass.mp3');
    audio7.play();
})
var keyboard = document.addEventListener('keydown', handleKey)

function handleKey(event) {
    switch (event.key) {
        case 'w':
        let tom1 = document.querySelector('.w')
            tom1.style.color = "White";
        let audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
        case 'a':
        let tom2 = document.querySelector('.a');
            tom2.style.color = "White";
        let audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        case 's':
        let tom3 = document.querySelector('.s')
            tom3.style.color = "White";
        let audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
        case 'd':
            let tom4 = document.querySelector('.d');
            tom4.style.color = "White";
        let audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        case 'j':
        let snare = document.querySelector('.j');
            snare.style.color = "White";
        let audio5 = new Audio('sounds/snare.mp3');
            audio5.play();
            break;
        case 'k':
        let crash = document.querySelector('.k');
            crash.style.color = "White";
        let audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;
        case 'l':
        let kick = document.querySelector('.l');
            kick.style.color = "White";
        let audio7 = new Audio('sounds/kick-bass.mp3');
            audio7.play();
            break;
        default:
            break;
    }
}