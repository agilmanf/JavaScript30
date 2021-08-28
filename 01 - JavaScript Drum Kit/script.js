function PlayAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
    key.addEventListener('transitionend', function(){
        key.classList.remove('playing');
    })
}


window.addEventListener('keydown', PlayAudio);