
window.onload = function initialize() {
	init();
};

function init() {
    var label = document.getElementById('discrete');
    if (label) {
        label.addEventListener('click', helloWorld);
    }
};

function helloWorld() {
    alert('Mantenha o JavaScript discreto :)');
};