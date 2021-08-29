function PlayAudio(e) {
    let key;
    let audio;

    if(e.target.parentElement.classList.contains('key')){
        // mouse pressed
        const code = e.target.parentElement.getAttribute('data-key');
        key = document.querySelector(`.key[data-key="${code}"]`);
        audio = document.querySelector(`audio[data-key="${code}"]`);
    }
    else if(e.keyCode) {
        // keyboard pressed
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    }

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
    key.addEventListener('transitionend', function(){
        key.classList.remove('playing');
    })

}

window.addEventListener('click', PlayAudio);
window.addEventListener('keydown', PlayAudio);