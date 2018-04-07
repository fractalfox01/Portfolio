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
let footerText = $("#footerText");
let linkMe = $(".l1");
let linkFCC = $(".l2");
let linkLinkedin = $(".l3");
let linkGithub = $(".l4");
let projSimon = $(".simonWrap");
let copyrightDate = new Date();
let refinedCopyright = copyrightDate.getFullYear();
let deg = 0;
let xdeg = -5;

console.log("num is " + num);

$(document).ready(function(){
//  console.log("jQuery Working");
  console.log("copyright Date: " + refinedCopyright);
  footerText.append(" " + refinedCopyright);

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
      window.scrollTo(0, 2400);
    }
  });
  links.on('click', function(){
    if(num > 500){
      window.scrollTo(50, 3220);
    }
  });
  education.on('click', function(){
    if(num > 500){
      window.scrollTo(0, 3900);
    }
  });
  left.on('click', function(){
    deg = deg - 72;
    carousel.css("transform", "rotateX(" + xdeg + "deg) rotateY("+ (deg) +"deg)");
  });
  right.on('click', function(){
    deg = deg + 72;
    carousel.css("transform", "rotateX(" + xdeg + "deg) rotateY("+ (deg) +"deg)");
  });

//  Link buttons --------------------------------------------------------
  linkMe.on('click', function(){
    // Button does Nothing
    console.log("my link clicked");
  });
  linkFCC.on('click', function(){
    window.open("https://www.freecodecamp.org/fractalfox01");
  });
  linkLinkedin.on('click', function(){
    window.open("https://www.linkedin.com/in/thomas-v-6517aa111");
  });
  linkGithub.on('click', function(){
    window.open("https://github.com/fractalfox01/");
  });

//  Project element clicks -----------------------------------------------
  projSimon.on('click', function(){
  });
})
