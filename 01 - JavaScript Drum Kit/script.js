// Music Player
const song = document.querySelector('.song');
const playButton = document.querySelector('.play-button');
const slider = document.querySelector('.music-duration');
let isPlaying = false;
let duration;

playButton.addEventListener('click',PlaySong);

function PlaySong() {
    if(!isPlaying) {
        song.play();
        isPlaying = true;
        playButton.innerHTML = "Pause";
        duration = song.duration;
        slider.max = duration;
        Crowd();
    }
    else {
        song.pause();
        isPlaying = false;
        playButton.innerHTML = "Play";
        Crowd();
    }

    slider.addEventListener('change',function(){
        song.currentTime = slider.value;
    })

    song.addEventListener('timeupdate', function(){
        slider.value = song.currentTime;
    })
}
// Crowd Animation
const crowd = document.querySelector('.crowd');
function Crowd(){
    crowd.classList.toggle('crowd-anim');

    crowd.addEventListener('transitionend',function(){
        crowd.classList.toggle('crowd-anim');
    })
    
}


//////////////////////////////////////
function PlayAudio(e) {
    let key;
    let audio;

    //alert('a');

    if(e.target.classList.contains('key')){
        // mouse pressed
        const code = e.target.getAttribute('data-key');
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