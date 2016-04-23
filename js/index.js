
window.onload = function initialize() {
	init();
};

function init() {
    var label = document.getElementById('discrete');
    if (label) {
        label.addEventListener('click', helloWorld);
    }
    
    var btnChangeUl = document.getElementById('change-ul');
    if (btnChangeUl) {
        btnChangeUl.addEventListener('click', changeUlAppearence);
    }    
};

function helloWorld() {
    alert('Mantenha o JavaScript discreto :)');
};

function changeUlAppearence() {
    var mutableUl = document.getElementById('ul-mutable');
    if (mutableUl) {
        if (mutableUl.className.match(/english/)) {
            mutableUl.className = mutableUl.className.replace('english', '');
        } else {
            mutableUl.className = mutableUl.className.trim().concat(' english');
        }
    }
};