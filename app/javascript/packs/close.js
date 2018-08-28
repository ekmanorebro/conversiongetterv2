const notice = document.querySelector('.notice');
const success = document.querySelector('.success');
const close = document.querySelector('.close');
const contact2 = document.querySelector('#contact');

function scrollTo(element){
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
};

close.addEventListener('click', function(){

  if(success){
    success.style.display = "none";

  } else {
    if(contact2){
      scrollTo(contact2)
    }
    notice.style.display = "none";

  }

});
