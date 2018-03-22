//console.log("javascript Working");
let about = $("#b1");
let skills = $("#b2");
let projects = $("b3");
let links = $("#b4");
let education = $("#b5");
let num = window.innerWidth;
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
})
