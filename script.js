//console.log(window.innerWidth)

const article = document.querySelectorAll(".slider-container article");
const button = document.querySelectorAll(".slider-container button");

let currentSlide = 0;

setInterval(nextImage, 5000);

function nextImage() {
   article[currentSlide].classList.remove("active");
  button[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % article.length;

  article[currentSlide].classList.add("active");
  button[currentSlide].classList.add("active");
}






const newNav = function (n) {
  article.forEach((sect) => {
    sect.classList.remove("active");
  });
  button.forEach((btn) => {
    btn.classList.remove("active");
  });

  article[n].classList.add("active");
  button[n].classList.add("active");
};

button.forEach((btn, i) => {
  btn.addEventListener("mouseover", () => {
    newNav(i);
    currentSlide = i;
  });
});



