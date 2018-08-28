const getQuoteBtns = document.querySelectorAll('.quote-btn');
const auditBtn = document.querySelector('.audit-btn');
const servicesLink = document.querySelector('#services-link');
const services = document.querySelector('#services');
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
      service.style.display = "block";
    budget.style.display = "block";
      document.querySelector('#select-subject').options.selectedIndex = 1;
      scrollTo(contact);
      
  });

}

auditBtn.addEventListener('click', function(){
  service.style.display = "none";
    budget.style.display = "none";
  document.querySelector('#select-subject').options.selectedIndex = 2;
  scrollTo(contact);

});

servicesLink.addEventListener('click', function(){
  scrollTo(services);
});

contactLink.addEventListener('click', function(){
  document.querySelector('#select-subject').options.selectedIndex = null;
    service.style.display = "none";
    budget.style.display = "none";
    scrollTo(contact);
});


