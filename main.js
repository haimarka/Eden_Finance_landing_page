// dark mode

const body = document.querySelector('body'),
sidebar = document.querySelector('.sidebar'),
toggle = document.querySelector('.toggle'),
searchBtn = document.querySelector('.search-box'),
modeSwitch = document.querySelector('.toggle-swith'),
modeText = document.querySelector('.mode-text'),
menulinks = document.querySelector('.menu-links');
// firstsection = document.querySelector('.first-section');

toggle.addEventListener('click', ()=>{
    sidebar.classList.toggle('close')
});

menulinks.addEventListener('click', ()=>{
    sidebar.classList.toggle('close')
});


// firstsection.addEventListener('click', ()=>{
//     sidebar.classList.toggle('close')
// });

searchBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('close')
});

modeSwitch.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        modeText.innerText = 'Light Mode'
    }else{
        modeText.innerText = 'Dark Mode'
    }
});

// search input

function search(){
    let textToSearch = document.getElementById('text-to-search').value;
    let paragraph_one = document.getElementById('paragraph_one'),
        paragraph_two = document.getElementById('paragraph_two')
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern_one = new RegExp(`${textToSearch}`,"gi");
    paragraph_one.innerHTML = paragraph_one.textContent.replace(pattern_one, match => `<mark>${match}</mark>`)

    let pattern_two = new RegExp(`${textToSearch}`,"gi");
    paragraph_two.innerHTML = paragraph_two.textContent.replace(pattern_two, match => `<mark>${match}</mark>`)
}

// appears of elements

const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.first-img, .therd-content`, {
    origin: 'top',
    interval: 200
})

sr.reveal(`#paragraph_one, .swiper,.second-content`, {
    origin: 'left'
})

sr.reveal(`.send_img`, {
    origin: 'right'
})


// smooth links slide

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// slider

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


