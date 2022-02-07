// --------chnange images-------------

const navBtn = document.querySelector('.nav-links');
const mainImg = document.querySelector('.main-container');

function changeImage(event) {

    playBtn.classList.add('pause-btn');

            if (event.target.classList.contains('solovei')) {
                mainImg.style.backgroundImage = 'url(assets/img/solovey.jpg)';
                audio.src='assets/audio/solovey.mp3';
                audio.play();
               

            } else if (event.target.classList.contains('drozd')) {
                mainImg.style.backgroundImage = 'url(assets/img/drozd.jpg)';
                audio.src='assets/audio/drozd.mp3';
                audio.play();
            
              
            } else if (event.target.classList.contains('malinovka')) {
                mainImg.style.backgroundImage = 'url(assets/img/zarynka.jpg)';
                audio.src='assets/audio/zarynka.mp3';
                audio.play();
              
               
            } else if (event.target.classList.contains('zhavoronok')) {
                mainImg.style.backgroundImage = 'url(assets/img/javoronok.jpg)';
                audio.src='assets/audio/javoronok.mp3';
                audio.play();
               
            } else if (event.target.classList.contains('slavka')) {
                mainImg.style.backgroundImage = 'url(assets/img/slavka.jpg)';
                audio.src='assets/audio/slavka.mp3';
                audio.play();
            }
        
    }


navBtn.addEventListener("click", changeImage);



//-----------active nav-link-----------------

const navLinks = document.querySelectorAll('.nav-links-item');

const navLinkAvtive = () => {
    navLinks.forEach(element => {
        element.addEventListener('click', item => {
          document.querySelectorAll('.nav-links-item').forEach(element => element.classList.remove('nav-links-item-active'));
          item.target.classList.add('nav-links-item-active');
        })
      })
}

navLinkAvtive();


// --------chnange play button-------------


const playBtn = document.querySelector('.main-btn');

const stopPlaying = () => {
    if (playBtn.classList.contains('pause-btn')) {
        playBtn.classList.remove('pause-btn');
        audio.pause();
    } else {
        playBtn.classList.add('pause-btn');
        audio.play()
    }
}

playBtn.addEventListener('click', stopPlaying);



// ------------------play music-------------------


const audio = document.querySelector('audio');
const pauseBtn = document.querySelector('.pause-btn');

let isPlay = false;

function playAudio() {
    if (isPlay === false) {
        audio.currentTime = 0;
        audio.play();
        playBtn.addEventListener('click', playAudio);
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
}

function playAlwaysAudio() {
    audio.play();
}


// pauseBtn.addEventListener('click', pauseAudio);