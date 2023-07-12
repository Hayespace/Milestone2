// Scrolling panels function

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
      panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
     });
});

function removeActiveClasses() {
      panels.forEach(panel => {
      panel.classList.remove('active')});
};

// Mouse click playing

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
      btn.addEventListener('mousedown', event => {
            const keyCode = event.currentTarget.getAttribute('data-key');
            playSound(keyCode);
      });
      btn.addEventListener('mouseup', event => {
            const keyCode = event.currentTarget.getAttribute('data-key');
            buttonAnimate(keyCode);
      });     
});


// Key press audio and button animation

window.addEventListener('keydown', event => playSound(event.keyCode));
window.addEventListener('keyup', event => buttonAnimate(event.keyCode)); 

function playSound(keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const btndown = document.querySelector(`.active .btn[data-key="${keyCode}"]`);
    
    btndown.classList.add('playing');
    audio.currentTime = 0;
    audio.play();  
};

function buttonAnimate(keyCode){
    const btnup = document.querySelector(`.btn[data-key="${keyCode}"]`);

    btnup.classList.remove('playing');
};


// Piano Mouse

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
      key.addEventListener('mousedown', event => {
            const keyCode = event.currentTarget.getAttribute('data-key');
            playPiano(keyCode);
      });
      key.addEventListener('mouseup', event => {
            const keyCode = event.currentTarget.getAttribute('data-key');
            keyAnimate(keyCode);
      });     
});


// Piano Keyboard

window.addEventListener('keydown', event => playPiano(event.keyCode));
window.addEventListener('keyup', event => keyAnimate(event.keyCode)); 

function playPiano(keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const keyDown = document.querySelector(`.active .key[data-key="${keyCode}"]`);
    
    keyDown.classList.add('key-playing');
    audio.currentTime = 0;
    audio.play();  
};

function keyAnimate(keyCode){
    const keyUp = document.querySelector(`.key[data-key="${keyCode}"]`);

    keyUp.classList.remove('key-playing');
};





