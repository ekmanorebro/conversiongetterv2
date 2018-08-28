const course = document.querySelectorAll('.course-container');

for(let i = 0; i < course.length; i++){

  course[i].addEventListener('click', function(event){
    
    let target = event.target;
    let header = target.parentNode;
    let body = header.nextElementSibling;

    if(target.className == "col-ex"){

      if(body.style.maxHeight){
        body.style.maxHeight = null;
        target.textContent = "EXPAND";
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
        target.textContent = "COLLAPSE";
;      }

    }
  });
  
}