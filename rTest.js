window.scrollTo(30,0);
let proj1Flag = true;
let proj2Flag = true;
let proj3Flag = true;
let proj4Flag = true;
let f2 = true;
let f3 = true;
let flags = [true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false]
let progMargin = "0vw";
let winH = window.innerHeight;
var doc = document.documentElement;
var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
// document.getElementById("mover").style.marginLeft = "-100vw";
let aa = document.getElementsByClassName("mover");
let bb = document.getElementsByClassName("moverIn");
let python = document.getElementById("pythonInfo").style;
let wordpress = document.getElementById("wordpressInfo").style;
let linux = document.getElementById("linuxInfo").style;
let htmlCss = document.getElementById("hTmlInfo").style;
let boot = document.getElementById("bootstrapInfo").style;
let js = document.getElementById("javascriptInfo").style;
let bash = document.getElementById("bashInfo").style;
let java = document.getElementById("javaInfo").style;
let android = document.getElementById("androidInfo").style;
let cSharp = document.getElementById("cSharpInfo").style;
let apache = document.getElementById("apacheInfo").style;
let about = document.getElementById("about");
let skills = document.getElementById('skills');
let projects = document.getElementById('projects');
let links = document.getElementById('links');
let img = document.getElementById("image");
let hrefProjects = document.getElementById("hrefProjects");
let hrefLinks = document.getElementById("hrefLinks");
let hrefUbuntu = document.getElementById("hrefUbuntu");


function linearEase(start, stop, percent){
  if((start + ((stop - start) * percent))>stop){
    return stop;
  }else{
    return start + ((stop - start) * percent);
  }
}

function animateIt(options){
  let startTime = new Date().getTime();
  let ease = options.ease;
  let elem = options.element;

  function update(){
    let curTime = new Date().getTime();
    let elapsed = curTime - startTime;
    let timeLeft = options.duration - elapsed;
    let percent = 1 + -(timeLeft)/options.duration;
    let move = ease(options.begin, options.left, percent);
    console.log(ease(options.begin, options.left,percent));
    // let elem.left = ease(-100, options.left, )
    elem.marginLeft = move + "vw";
    if(timeLeft > 0){
      setTimeout(update, 33);
    }
  }
  // setTimeout(update, 33);
  update();
}
//
let p1 = document.getElementById("proj1").style;
let p2 = document.getElementById("proj2").style;
let p3 = document.getElementById("proj3").style;
let p4 = document.getElementById("proj4").style;
let pos = [35, 55, 75, 95];

let buttons = [p1, p2, p3, p4];
let a = 1000;

for(var i = 0; i < buttons.length; i++){
  buttons[i].top = "10vh";
  buttons[i].left = "-20vw";
}
//var elem = document.getElementById("animatable");

img.addEventListener('click', function(){
    console.log('clicker');
},false);
links.addEventListener('click', function(){
    window.scrollTo(30, 3000);
},false);
links.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "rgb(0,224,255)";
},false);
links.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = "rgb(227,227,227)";
},false);
projects.addEventListener('click', function(){
    window.scrollTo(30, 2220);
    for(var i = 0; i < 11; i++){
        aa[i].style.marginLeft = "1vw";
    }
    python.opacity = "0";
    apache.opacity = "0";
    java.opacity = "0";
    cSharp.opacity = "0";
    bash.opacity = "0";
    js.opacity = "0";
    boot.opacity = "0";
    htmlCss.opacity = "0";
    linux.opacity = "0";
    wordpress.opacity = "0";

},false);
projects.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "rgb(0,224,255)";
},false);
projects.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = "rgb(227,227,227)";
},false);
skills.addEventListener('click', function(){
    window.scrollTo(30,1173);
},false);
skills.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "rgb(0,224,255)";
},false);
skills.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = "rgb(227,227,227)";
},false);
about.addEventListener('click', function(){
    window.scrollTo(30, 425);
}, false);
about.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "rgb(0,224,255)";
},false);
about.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = "rgb(227,227,227)";
},false);

document.getElementById("proj1").addEventListener('click', function(){
    if(proj1Flag){
        proj1Flag = false;
        p1.width = "50vw";
        p1.height = "50vh";
        p1.marginLeft = "45vw";
        p1.opacity = "1";
        p2.opacity = "0";
        p3.opacity = "0";
        p4.opacity = "0";
    }else{
        proj1Flag = true;
        p1.width = "12vw";
        p1.height = "10vh";
        p1.marginLeft = "32vw";
        p1.opacity = ".65";
        p2.opacity = ".65";
        p3.opacity = ".65";
        p4.opacity = ".65";
    }
})
document.getElementById("proj2").addEventListener('click', function(){
    if(proj2Flag){
        proj2Flag = false;
        p2.width = "50vw";
        p2.height = "50vh";
        p2.marginLeft = "45vw";
        p2.opacity = "1";
        p1.opacity = "0";
        p3.opacity = "0";
        p4.opacity = "0";
    }else{
        proj2Flag = true;
        p2.width = "12vw";
        p2.height = "10vh";
        p2.marginLeft = "55vw";
        p2.opacity = ".65";
        p1.opacity = ".65";
        p3.opacity = ".65";
        p4.opacity = ".65";
    }
})
document.getElementById("proj3").addEventListener('click', function(){
    if(proj3Flag){
        proj3Flag = false;
        p3.width = "50vw";
        p3.height = "50vh";
        p3.marginLeft = "45vw";
        p3.opacity = "1";
        p1.opacity = "0";
        p2.opacity = "0";
        p4.opacity = "0";
    }else{
        proj3Flag = true;
        p3.width = "12vw";
        p3.height = "10vh";
        p3.marginLeft = "75vw";
        p3.opacity = ".65";
        p1.opacity = ".65";
        p2.opacity = ".65";
        p4.opacity = ".65";
    }
})
document.getElementById("proj4").addEventListener('click', function(){
    if(proj4Flag){
        proj4Flag = false;
        p4.width = "50vw";
        p4.height = "50vh";
        p4.marginLeft = "45vw";
        p4.opacity = "1";
        p1.opacity = "0";
        p2.opacity = "0";
        p3.opacity = "0";
    }else{
        proj4Flag = true;
        p4.width = "12vw";
        p4.height = "10vh";
        p4.marginLeft = "95vw";
        p4.opacity = ".65";
        p1.opacity = ".65";
        p2.opacity = ".65";
        p3.opacity = ".65";
    }
})

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 1100 && window.pageYOffset < 1195){
        for(var i = 0; i < 11; i++){
            aa[i].style.marginLeft = progMargin;
        }
        python.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
    }
    if(window.pageYOffset > 1220 && flags[0]){
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        flags[0] = true;
        flags[1] = true;
        console.log("here");
        console.log(aa.length.toString());
        aa[0].style.marginLeft = progMargin;
        python.opacity = ".8";
        wordpress.zIndex = "0";
        python.zIndex = "3";
    }
    if(window.pageYOffset > 1250 && flags[1]){
        f1 = false;
        flags[1] = true;
        flags[2] = true;
//        aa[0].style.marginLeft = "-100vw";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        python.opacity = "0";
        wordpress.opacity = ".8";
        python.zIndex = "0";
        linux.zIndex = "0";
        wordpress.zIndex = "3";
        aa[1].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1300 && flags[2]){
        f2 = false;
        flags[2] = true;
        flags[3] = true;
//        aa[1].style.marginLeft = "-100vw";
        linux.opacity = ".8";
        wordpress.zIndex = "0";
        htmlCss.zIndex = "0";
        linux.zIndex = "3";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
        aa[2].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1350 && flags[3]){
        f3 = false;
        flags[3] = true;
        flags[4] = true;
        htmlCss.opacity = ".8";
        linux.zIndex = "0";
        boot.zIndex = "0";
        htmlCss.zIndex = "3";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
//        aa[2].style.marginLeft = "-100vw";
        aa[3].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1400 && flags[4]){
        flags[4] = true;
        flags[5] = true;
        boot.opacity = ".8";
        htmlCss.zIndex = "0";
        js.zIndex = "0";
        boot.zIndex = "3";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
//        aa[3].style.marginLeft = "-100vw";
        aa[4].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1450 && flags[5]){
        flags[5] = true;
        flags[6] = true;
        js.opacity = ".8";
        boot.zIndex = "0";
        bash.zIndex = "0";
        js.zIndex = "3";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
//        aa[4].style.marginLeft = "-100vw";
        aa[5].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1500 && flags[6]){
        flags[6] = true;
        flags[7] = true;
        bash.opacity = ".8";
        js.zIndex = "0";
        java.zIndex = "0";
        bash.zIndex = "3";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
//        aa[5].style.marginLeft = "-100vw";
        aa[6].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1550 && flags[7]){
        flags[7] = true;
        flags[8] = true;
        java.opacity = ".8";
        bash.zIndex = "0";
        android.zIndex = "0";
        java.zIndex = "3";
        android.opacity = "0";
        apache.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
//        aa[6].style.marginLeft = "-100vw";
        aa[7].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1600 && flags[8]){
        flags[8] = true;
        flags[9] = true;
        android.opacity = ".8";
        java.zIndex = "0";
        cSharp.zIndex = "0";
        android.zIndex = "3";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
//        aa[7].style.marginLeft = "-100vw";
        aa[8].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1650 && flags[8]){
        cSharp.opacity = ".8";
        android.zIndex = "0";
        apache.zIndex = "0";
        cSharp.zIndex = "3";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
        flags[9] = true;
        flags[10] = true;
//        aa[8].style.marginLeft = "-100vw";
        aa[9].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1700 && flags[10]){
        apache.opacity = ".8";
        cSharp.zIndex = "0";
        apache.zIndex = "3";
        android.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
        flags[10] = false;
        flags[11] = true;
//        aa[9].style.marginLeft = "-100vw";
        aa[10].style.marginLeft = progMargin;
    }
    if(window.pageYOffset > 1900 && flags[11]){
        for(var j = 1; j < 11; j++){
            flags[j] = false;
        }

        apache.zIndex = "0";
        android.opacity = "0";
        apache.opacity = "0";
        java.opacity = "0";
        cSharp.opacity = "0";
        bash.opacity = "0";
        js.opacity = "0";
        boot.opacity = "0";
        htmlCss.opacity = "0";
        linux.opacity = "0";
        wordpress.opacity = "0";
        python.opacity = "0";
//        aa[10].style.marginLeft = "-100vw";

    }
    if((window.pageYOffset > 2100) && (window.pageYOffset < 2300) && flags[12]){
        flags[12] = false;
        flags[11] = true;
        setTimeout(function(){
          animateIt({
            element: p4,
            left: pos[3],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        },10);
        setTimeout(function() {
          animateIt({
            element: p3,
            left: pos[2],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        }, 20);
        setTimeout(function() {
          animateIt({
            element: p2,
            left: pos[1],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        }, 30);
        setTimeout(function() {
          animateIt({
            element: p1,
            left: pos[0],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        }, 40);
    }
})
console.log("working");
