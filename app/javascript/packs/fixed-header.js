const bigHeader = document.querySelector('.big-header');
const header = document.querySelector('header');
const body = document.querySelector('body');
const section = document.querySelector('section');

document.addEventListener('scroll', function(){

  if(scrollY > bigHeader.offsetHeight){
    header.classList.add("fixed");
    header.style.maxHeight = header.scrollHeight + "px";
    section.style.marginTop = "150px";

  } else {
    header.classList.remove("fixed");
    header.style.maxHeight = null;
    section.style.marginTop = null;
  }

});