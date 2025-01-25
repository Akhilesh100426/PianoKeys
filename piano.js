const keys = document.querySelectorAll('.key');
const whitekeys = document.querySelectorAll('.key.white');
const blackkeys = document.querySelectorAll('.key.black');

keys.forEach(key => key.addEventListener('click',handleKeyClick));

function handleKeyClick() {
    playkey(this);
}

function playkey(key) {
    const keyAudio = document.getElementById(key.dataset.note);
    keyAudio.currentTime = 0;
    keyAudio.play();
    key.classList.add('active');
    keyAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}
// Add keyboard support
const keyMap = {
    "a": "c",  // Example: Pressing 'A' plays 'C'
    "w": "db", // 'W' plays 'Db'
    "s": "d",
    "e": "eb",
    "d": "e",
    "f": "f",
    "t": "gb",
    "g": "g",
    "y": "ab",
    "h": "a",
    "u": "bb",
    "j": "b"
};

// Add keyboard support
document.addEventListener("keydown", (event) => {
    const note = keyMap[event.key.toLowerCase()];
    if (note) {
        const key = document.querySelector(`[data-note="${note}"]`);
        if (key) playkey(key); // Using the correct function name
    }
});