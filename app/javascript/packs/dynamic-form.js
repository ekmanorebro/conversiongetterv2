const subj2 = document.querySelector('#select-subject');
const service2 = document.querySelector('#select-service');
const budget2 = document.querySelector('#select-budget');

subj.addEventListener('change', function(){

  if(subj2.options.selectedIndex == 2 || subj2.options.selectedIndex == 3){
    service2.style.display = "none";
    budget2.style.display = "none";
  }

  if(subj2.options.selectedIndex == 1){
    service2.style.display = "block";
    budget2.style.display = "block";
  }

});