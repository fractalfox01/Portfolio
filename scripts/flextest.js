//console.log("javascript Working");
let about = $("#b1");
let skills = $("#b2");
let projects = $("#b3");
let links = $("#b4");
let education = $("#b5");
let num = window.innerWidth;
let carousel = $(".carousel");
let left = $(".goleft");
let right = $(".goright");
let deg = 0;
let xdeg = -5;

console.log("num is " + num);

$(document).ready(function(){
//  console.log("jQuery Working");
  about.on('click', function(){
    if(num > 500){
      window.scrollTo(0, 320);
    }
  });
  skills.on('click', function(){
    if(num > 500){
      window.scrollTo(0, 1500);
    }
  });
  projects.on('click', function(){
    if(num > 500){
      window.scrollTo(0, 0);
    }
  });
  links.on('click', function(){
    if(num > 500){
      window.scrollTo(50, 2600);
    }
  });
  education.on('click', function(){
    if(num > 500){
      window.scrollTo(0, 0);
    }
  });
  left.on('click', function(){
    console.log("")
    deg = deg - 72;
    carousel.css("transform", "rotateX(" + xdeg + "deg) rotateY("+ (deg) +"deg)");
  });
  right.on('click', function(){
    deg = deg + 72;
    carousel.css("transform", "rotateX(" + xdeg + "deg) rotateY("+ (deg) +"deg)");
  });
})
