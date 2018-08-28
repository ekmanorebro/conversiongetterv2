const getQuoteBtns = document.querySelectorAll('.quote-btn');
const contactLink = document.querySelector('#contact-link');
const contact = document.querySelector('#contact');
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
      document.querySelector('#select-subject').options.selectedIndex = 1;
      service.style.display = "block";
    budget.style.display = "block";
      scrollTo(contact);

  });

}

contactLink.addEventListener('click', function(){
  document.querySelector('#select-subject').options.selectedIndex = null;
  service.style.display = "none";
    budget.style.display = "none";
  scrollTo(contact);
});



