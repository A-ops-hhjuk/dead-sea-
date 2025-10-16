
const bars = document.getElementById('barss');
const body = document.querySelector('body');
const closes = document.getElementById('close');
const menu = document.getElementById('menu-list'); 
bars.addEventListener("click", () => {
    body.classList.add('show-list');
});

closes.addEventListener("click",()=>{
    body.classList.remove('show-list');
});

 document.addEventListener('click', function(e){
  if (!menu.contains(e.target) && !bars.contains(e.target)) {
   body.classList.remove('show-list');
  }
});


const header = document.querySelector('header');
window.addEventListener("scroll",()=>{
    if(window.scrollY > 20){
        body.classList.add('header-mode');
    }else{
        body.classList.remove('header-mode');
    }
})


const videos = document.getElementById('video');
const icon = document.getElementById('icon');
const play = document.getElementById('play');

play.addEventListener('click',()=>{
    if(videos.paused){
        videos.play();
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');
    }else{
        videos.pause();
         icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
})


if(videos.paused){
   play.classList.add('fa-play');
}

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById("menu-list");
    body.classList.remove('show-list');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
moon.addEventListener('click',()=>{
    body.classList.add('dark-mode');
    moon.style.display='none';
    sun.style.display='block';
});

sun.addEventListener('click',function(){
    body.classList.remove('dark-mode');
    sun.style.display='none';
    moon.style.display='block';
})


const sr = ScrollReveal({
    distance:'60px',
    duration:2800,
})

sr.reveal('.home .top',{
     origin: 'top',
     interval:100
})

sr.reveal('.best',{
     origin: 'bottom',
     interval:100
})

sr.reveal('.about .left',{
     origin: 'left',
     interval:100
})

sr.reveal('.about .right',{
     origin: 'bottom',
     interval:100
})

sr.reveal('.discover',{
     origin: 'left',
     interval:100
})

sr.reveal('.place',{
     origin: 'top',
     interval:100
})


