// --------chnange images-------------

const navBtn = document.querySelector('.nav-links');
const mainImg = document.querySelector('.main-container');

function changeImage(event) {

    if (event.target.classList.contains('nav-links-item')) {
        {
            if (event.target.classList.contains('solovei')) {
                mainImg.style.backgroundImage = 'url(assets/img/solovey.jpg)';
            } else if (event.target.classList.contains('drozd')) {
                mainImg.style.backgroundImage = 'url(assets/img/drozd.jpg)';
            } else if (event.target.classList.contains('malinovka')) {
                mainImg.style.backgroundImage = 'url(assets/img/zarynka.jpg)';
            } else if (event.target.classList.contains('zhavoronok')) {
                mainImg.style.backgroundImage = 'url(assets/img/javoronok.jpg)';
            } else if (event.target.classList.contains('slavka')) {
                mainImg.style.backgroundImage = 'url(assets/img/slavka.jpg)';
            }
        }
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
        playBtn.classList.toggle('pause-btn');
    } else {
        playBtn.classList.add('pause-btn');

    }
}

playBtn.addEventListener('click', stopPlaying);