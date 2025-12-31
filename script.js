function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function yes() {
    show('screen3');
}

function no() {
    show('screen2');
}

function back() {
    show('screen1');
}

function next() {
    show('screen4');
}

function next2() {
    show('screen5');
}
