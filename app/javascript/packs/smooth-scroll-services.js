const getQuoteBtns = document.querySelectorAll('.quote-btn');
const ourProcessBtn = document.querySelector('.our-process-btn')
const ourProcess = document.querySelector('#our-process');
const contactLink = document.querySelector('#contact-link');
const subj = document.querySelector('#select-subject');
const service = document.querySelector('#select-service');
const budget = document.querySelector('#select-budget');

function scrollTo(element){
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
};


for(let i = 0; i < getQuoteBtns.length; i++){

  getQuoteBtns[i].addEventListener('click', function(){
      service.style.display = "block";
    budget.style.display = "block";
      document.querySelector('#select-subject').options.selectedIndex = 1;
      scrollTo(contact);
  });


};


ourProcessBtn.addEventListener('click', function(){
  scrollTo(ourProcess);
});

contactLink.addEventListener('click', function(){
  service.style.display = "none";
    budget.style.display = "none";
  document.querySelector('#select-subject').options.selectedIndex = null;
  scrollTo(contact);
});