// Scrolling panels function

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
      panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
     });
});

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
})

function removeActiveClasses() {
      panels.forEach(panel => {
      panel.classList.remove('active')});
}

// Key press audio and button animation

window.addEventListener('keydown', event => playSound(event.keyCode));
window.addEventListener('keyup', event => buttonAnimate(event.keyCode)); 

function playSound(keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const btndown = document.querySelector(`.active .btn[data-key="${keyCode}"]`);
    
    btndown.classList.add('playing');
    audio.currentTime = 0;
    audio.play();  
}

function buttonAnimate(keyCode){
      console.log('test', `.btn[data-key="${keyCode}"]`)
   const btnup = document.querySelector(`.btn[data-key="${keyCode}"]`);
   btnup.classList.remove('playing');
}


// Piano Keyboard

const keys = document.querySelectorAll('.key');
btns.forEach(key => {
      key.addEventListener('mousedown', event => {
            const keyCode = event.currentTarget.getAttribute('data-key');
            playSound(keyCode);
      });
      key.addEventListener('mouseup', event => {
            const keyCode = event.currentTarget.getAttribute('data-key');
            buttonAnimate(keyCode);
      });
})

function removeActiveClasses() {
      panels.forEach(panel => {
      panel.classList.remove('active')});
}



