//signup bar
  let signUp = document.getElementById("signUp");
  let signUpClose = document.querySelector(".signUpClose");
  
  signUpClose.addEventListener("click", function () {
    signUp.classList.add("hidden");
  })


//sidebar
  let sidebar = document.querySelector(".sidebar");
  let navbarToggle = document.querySelector(".navbar-toggle");
  let navbarClose = document.querySelector(".navbar-close");
  
  navbarToggle.addEventListener("click", function () {
    sidebar.classList.remove("-left-1/2");
    sidebar.classList.add('left-0');
  })
  
  navbarClose.addEventListener("click", function () {
    sidebar.classList.add("-left-1/2");
    sidebar.classList.remove('left-0');
  })


//slider
let sliderTrack = document.querySelector(".slider-image-container");
let slides = document.querySelectorAll(".slider-image");
let nextButton = document.querySelector(".slider-right-button");
let prevButton = document.querySelector(".slider-left-button");
let index = 0;
let totalSlides = slides.length;

//container width
sliderTrack.style.width = `calc(100% * ${totalSlides})`

// set initial width of each slide
slides.forEach((slide) => {
  slide.style.width = '33.33%';
})

//function to handle click events
function updateSlider() {
  sliderTrack.style.transform = `translateX(-${index * 33.33}%)`;
}

nextButton.addEventListener("click",()=>{
  index = (index + 1) % totalSlides;
  updateSlider();
})

prevButton.addEventListener("click",()=>{
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
})


function favBtn(event) {
  if (event.target.src.includes('blackheart.png')) {
    event.target.src = "images/icons/redheart.png";
  }
  else {
    event.target.src = "images/icons/blackheart.png";
  }
}

document.querySelector(".scrollBar").addEventListener("click", favBtn);


const hiddenContainer = document.querySelectorAll(".Container");

window.addEventListener("scroll", () => {

  hiddenContainer.forEach(container => {
    const containerHeight = container.getBoundingClientRect().top;// distance of element from top of screen
    const windowHeight = window.innerHeight;// total height of screen

    if (containerHeight < windowHeight) {
      container.classList.remove('opacity-0', 'translate-y-10');
      container.classList.add('opacity-100', 'translate-y-0');
    }
  });
})
