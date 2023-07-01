// Scrolling panels functions //

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}

// Sounds to button on click //

const kick = new Audio();
kick.src = 'assets/sounds/library-1/Kick.wav';

const snare = new Audio();
snare.src = 'assets/sounds/library-1/snare.wav';

const chh = new Audio();
chh.src = 'assets/sounds/library-1/ClosedHH.wav';

const hh = new Audio();
hh.src = 'assets/sounds/library-1/HH.wav';

const crash = new Audio();
crash.src = 'assets/sounds/library-1/Crash.wav';

const clap = new Audio();
clap.src = 'assets/sounds/library-1/clap.wav';

const conga = new Audio();
conga.src = 'assets/sounds/library-1/Conga.wav';

const cowbell = new Audio();
cowbell.src = 'assets/sounds/library-1/Cowbell.wav';

const shaker = new Audio();
shaker.src = 'assets/sounds/library-1/Shaker.wav';

