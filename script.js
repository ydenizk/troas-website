/* //console.log(window.innerWidth)

 const article = document.querySelectorAll(".slider-container article");
const button = document.querySelectorAll(".slider-container button");
const ppAnima=document.querySelectorAll(".img-desc")
const roof=document.querySelectorAll("main")
const footerrBtn=document.querySelector(".footer-btn")

footerrBtn.click("click",()=>{
  roof.scrollIntoView()

})


let currentSlide = 0;


 const kartal=(article)=>{
  article.classList.contains("active ")
    ? ppAnima.classList.add("anima")
    : ppAnima.classList.remove("anima"); 
} 
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


//viewport a gelince yazı animasyonu
 const element = document.querySelector(".bilgi-title");
const observer = new IntersectionObserver((entries) => {
  element.classList.toggle("bilgi-title-anima", entries[0].isIntersecting);
});

observer.observe(element);







 */

console.log(window.innerWidth)