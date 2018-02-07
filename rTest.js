window.scrollTo(30,0);

let projColorFlag = true;
let proj1Flag = true;
let proj2Flag = true;
let proj3Flag = true;
let proj4Flag = true;

let proj5Flag = true;
let proj6Flag = true;
let proj7Flag = true;
let proj8Flag = true;

let frame = document.getElementById("frame").style;

let frameAbout = document.getElementById("frameAbout").style;

let frameSkills = document.getElementById("frameSkills").style;
//
let frameProjects = document.getElementById("frameProjects").style;
//
let frameLinks = document.getElementById("frameLinks").style;

window.addEventListener('load', function(){
    frame.marginLeft = "0vw";
    frameAbout.marginLeft = "106vw";
    frameSkills.marginLeft = "105vw";
    frameProjects.marginLeft = "103.5vw";
    frameLinks.marginLeft = "106vw";
    console.log(document.getElementById("frameProjects").name);
})
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
let project1 = document.getElementById("proj1");
let project2 = document.getElementById("proj2");
let project3 = document.getElementById("proj3");
let project4 = document.getElementById("proj4");

let project5 = document.getElementById("proj5");
let project6 = document.getElementById("proj6");
let project7 = document.getElementById("proj7");
let project8 = document.getElementById("proj8");



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

let p5 = document.getElementById("proj5").style;
let p6 = document.getElementById("proj6").style;
let p7 = document.getElementById("proj7").style;
let p8 = document.getElementById("proj8").style;

let pos = [33, 53.5, 73.5, 94];

let buttons = [p1, p2, p3, p4];
let buttons1 = [p5, p6, p7, p8];
let a = 1000;

for(var i = 0; i < buttons.length; i++){
  buttons[i].top = "10vh";
  buttons[i].left = "-20vw";
}
for(var j = 0; j < buttons1.length; j++){
  buttons1[j].top = "10vh";
  buttons1[j].left = "-20vw";
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

//Project 1 Event Listeners--------------------------------------------
project1.addEventListener('mouseover', function(){
    if(projColorFlag){
        p1.backgroundColor = "#fff";
    }
},false);
project1.addEventListener('mouseout', function(){
    if(projColorFlag){
        p1.backgroundColor = "#ddd"
    };
},false);
project1.addEventListener('click', function(){
    if(proj1Flag){
        p1.backgroundColor = "#ddd";
        projColorFlag = false;
        proj1Flag = false;
        p1.width = "50vw";
        p1.height = "50vh";
        p1.marginLeft = "45vw";
        p1.opacity = "1";
        p2.opacity = "0";
        p2.marginLeft = "-20vw";
        p3.opacity = "0";
        p3.marginLeft = "-20vw";
        p4.opacity = "0";
        p4.marginLeft = "-20vw";

        p5.opacity = "0";
        p5.marginLeft = "-20vw";
        p6.opacity = "0";
        p6.marginLeft = "-20vw";
        p7.opacity = "0";
        p7.marginLeft = "-20vw";
        p8.opacity = "0";
        p8.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj1Flag = true;
        p1.width = "15vw";
        p1.height = "20vh";
        p1.marginLeft = pos[0]+"vw";
        p1.opacity = ".65";
        p2.opacity = ".65";
        p2.marginLeft = pos[1]+"vw";
        p3.opacity = ".65";
        p3.marginLeft = pos[2]+"vw";
        p4.opacity = ".65";
        p4.marginLeft = pos[3]+"vw";

        p5.opacity = ".65";
        p5.marginLeft = pos[0]+"vw";
        p6.opacity = ".65";
        p6.marginLeft = pos[1]+"vw";
        p7.opacity = ".65";
        p7.marginLeft = pos[2]+"vw";
        p8.opacity = ".65";
        p8.marginLeft = pos[3]+"vw";
    }
})
// End Project 1 Event Listeners---------------------------------------------
// Start Project 2 Event Listeners-------------------------------------------
project2.addEventListener('mouseover', function(){
    if(projColorFlag){
        p2.backgroundColor = "#fff";
    }
},false);
project2.addEventListener('mouseout', function(){
    if(projColorFlag){
        p2.backgroundColor = "#ddd"
    };
},false);
project2.addEventListener('click', function(){
    if(proj2Flag){
        p2.backgroundColor = "#ddd";
        projColorFlag = false;
        proj2Flag = false;
        p2.width = "50vw";
        p2.height = "50vh";
        p2.marginLeft = "45vw";
        p2.opacity = "1";
        p1.opacity = "0";
        p1.marginLeft = "-20vw";
        p3.opacity = "0";
        p3.marginLeft = "-20vw";
        p4.opacity = "0";
        p4.marginLeft = "-20vw";

        p5.opacity = "0";
        p5.marginLeft = "-20vw";
        p6.opacity = "0";
        p6.marginLeft = "-20vw";
        p7.opacity = "0";
        p7.marginLeft = "-20vw";
        p8.opacity = "0";
        p8.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj2Flag = true;
        p2.width = "15vw";
        p2.height = "20vh";
        p2.marginLeft = pos[1]+"vw";
        p2.opacity = ".65";
        p1.opacity = ".65";
        p1.marginLeft = pos[0]+"vw";
        p3.opacity = ".65";
        p3.marginLeft = pos[2]+"vw";
        p4.opacity = ".65";
        p4.marginLeft = pos[3]+"vw";

        p5.opacity = ".65";
        p5.marginLeft = pos[0]+"vw";
        p6.opacity = ".65";
        p6.marginLeft = pos[1]+"vw";
        p7.opacity = ".65";
        p7.marginLeft = pos[2]+"vw";
        p8.opacity = ".65";
        p8.marginLeft = pos[3]+"vw";
    }
})
// End Project 2 Event Listeners---------------------------------------------
// Start Project 3 Event Listeners-------------------------------------------
project3.addEventListener('mouseover', function(){
    if(projColorFlag){
        p3.backgroundColor = "#fff";
    }
},false);
project3.addEventListener('mouseout', function(){
    if(projColorFlag){
        p3.backgroundColor = "#ddd"
    };
},false);
project3.addEventListener('click', function(){
    if(proj3Flag){
        p3.backgroundColor = "#ddd";
        projColorFlag = false;
        proj3Flag = false;
        p3.width = "50vw";
        p3.height = "50vh";
        p3.marginLeft = "45vw";
        p3.opacity = "1";
        p1.opacity = "0";
        p1.marginLeft = "-20vw";
        p2.opacity = "0";
        p2.marginLeft = "-20vw";
        p4.opacity = "0";
        p4.marginLeft = "-20vw";

        p5.opacity = "0";
        p5.marginLeft = "-20vw";
        p6.opacity = "0";
        p6.marginLeft = "-20vw";
        p7.opacity = "0";
        p7.marginLeft = "-20vw";
        p8.opacity = "0";
        p8.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj3Flag = true;
        p3.width = "15vw";
        p3.height = "20vh";
        p3.marginLeft = pos[2]+"vw";
        p3.opacity = ".65";
        p1.opacity = ".65";
        p1.marginLeft = pos[0]+"vw";
        p2.opacity = ".65";
        p2.marginLeft = pos[1]+"vw";
        p4.opacity = ".65";
        p4.marginLeft = pos[3]+"vw";

        p5.opacity = ".65";
        p5.marginLeft = pos[0]+"vw";
        p6.opacity = ".65";
        p6.marginLeft = pos[1]+"vw";
        p7.opacity = ".65";
        p7.marginLeft = pos[2]+"vw";
        p8.opacity = ".65";
        p8.marginLeft = pos[3]+"vw";
    }
})
// End Project 3 Event Listeners---------------------------------------------
// Start Project 4 Event Listeners-------------------------------------------
project4.addEventListener('mouseover', function(){
    if(projColorFlag){
        p4.backgroundColor = "#fff";
    }
},false);
project4.addEventListener('mouseout', function(){
    if(projColorFlag){
        p4.backgroundColor = "#ddd"
    };
},false);
project4.addEventListener('click', function(){
    if(proj4Flag){
        p4.backgroundColor = "#ddd";
        projColorFlag = false;
        proj4Flag = false;
        p4.width = "50vw";
        p4.height = "50vh";
        p4.marginLeft = "45vw";
        p4.opacity = "1";
        p1.opacity = "0";
        p1.marginLeft = "-20vw";
        p2.opacity = "0";
        p2.marginLeft = "-20vw";
        p3.opacity = "0";
        p3.marginLeft = "-20vw";

        p5.opacity = "0";
        p5.marginLeft = "-20vw";
        p6.opacity = "0";
        p6.marginLeft = "-20vw";
        p7.opacity = "0";
        p7.marginLeft = "-20vw";
        p8.opacity = "0";
        p8.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj4Flag = true;
        p4.width = "15vw";
        p4.height = "20vh";
        p4.marginLeft = pos[3]+"vw";
        p4.opacity = ".65";
        p1.opacity = ".65";
        p1.marginLeft = pos[0]+"vw";
        p2.opacity = ".65";
        p2.marginLeft = pos[1]+"vw";
        p3.opacity = ".65";
        p3.marginLeft = pos[2]+"vw";

        p5.opacity = ".65";
        p5.marginLeft = pos[0]+"vw";
        p6.opacity = ".65";
        p6.marginLeft = pos[1]+"vw";
        p7.opacity = ".65";
        p7.marginLeft = pos[2]+"vw";
        p8.opacity = ".65";
        p8.marginLeft = pos[3]+"vw";
    }
})
    //--------------------------------------------------------------
    //Project 5 Event Listeners-----------------------------------
project5.addEventListener('mouseover', function(){
    if(true){
        p5.backgroundColor = "#fff";
    }
},false);
project5.addEventListener('mouseout', function(){
    if(projColorFlag){
        p5.backgroundColor = "#ddd"
    };
},false);
project5.addEventListener('click', function(){
    if(proj5Flag){
        p5.backgroundColor = "#ddd";
        projColorFlag = false;
        proj5Flag = false;
        p5.width = "50vw";
        p5.height = "50vh";
        p5.marginLeft = "45vw";
        p5.marginTop = "315vh";
        p5.opacity = "1";
        p6.opacity = "0";
        p6.marginLeft = "-20vw";
        p7.opacity = "0";
        p7.marginLeft = "-20vw";
        p8.opacity = "0";
        p8.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj5Flag = true;
        p5.width = "15vw";
        p5.height = "20vh";
        p5.marginLeft = pos[0]+"vw";
        p5.marginTop = "345vh";
        p5.opacity = ".65";
        p6.opacity = ".65";
        p6.marginLeft = pos[1]+"vw";
        p7.opacity = ".65";
        p7.marginLeft = pos[2]+"vw";
        p8.opacity = ".65";
        p8.marginLeft = pos[3]+"vw";
    }
})
//End Project 5 Event Listeners---------------------------------------------
// Start Project 6 Event Listeners-------------------------------------------
project6.addEventListener('mouseover', function(){
    if(projColorFlag){
        p6.backgroundColor = "#fff";
    }
},false);
project6.addEventListener('mouseout', function(){
    if(projColorFlag){
        p6.backgroundColor = "#ddd"
    };
},false);
project6.addEventListener('click', function(){
    if(proj6Flag){
        p6.backgroundColor = "#ddd";
        projColorFlag = false;
        proj6Flag = false;
        p6.width = "50vw";
        p6.height = "50vh";
        p6.marginLeft = "45vw";
        p6.marginTop = "315vh";
        p6.opacity = "1";
        p5.opacity = "0";
        p5.marginLeft = "-20vw";
        p7.opacity = "0";
        p7.marginLeft = "-20vw";
        p8.opacity = "0";
        p8.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj6Flag = true;
        p6.width = "15vw";
        p6.height = "20vh";
        p6.marginLeft = pos[1]+"vw";
        p6.marginTop = "345vh";
        p6.opacity = ".65";
        p5.opacity = ".65";
        p5.marginLeft = pos[0]+"vw";
        p7.opacity = ".65";
        p7.marginLeft = pos[2]+"vw";
        p8.opacity = ".65";
        p8.marginLeft = pos[3]+"vw";
    }
})
// End Project 6 Event Listeners---------------------------------------------
// Start Project 7 Event Listeners-------------------------------------------
project7.addEventListener('mouseover', function(){
    if(projColorFlag){
        p7.backgroundColor = "#fff";
    }
},false);
project7.addEventListener('mouseout', function(){
    if(projColorFlag){
        p7.backgroundColor = "#ddd"
    };
},false);
project7.addEventListener('click', function(){
    if(proj7Flag){
        p7.backgroundColor = "#ddd";
        projColorFlag = false;
        proj7Flag = false;
        p7.width = "50vw";
        p7.height = "50vh";
        p7.marginLeft = "45vw";
        p7.marginTop = "315vh";
        p7.opacity = "1";
        p5.opacity = "0";
        p5.marginLeft = "-20vw";
        p6.opacity = "0";
        p6.marginLeft = "-20vw";
        p8.opacity = "0";
        p8.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj7Flag = true;
        p7.width = "15vw";
        p7.height = "20vh";
        p7.marginLeft = pos[2]+"vw";
        p7.marginTop = "345vh";
        p7.opacity = ".65";
        p5.opacity = ".65";
        p5.marginLeft = pos[0]+"vw";
        p6.opacity = ".65";
        p6.marginLeft = pos[1]+"vw";
        p8.opacity = ".65";
        p8.marginLeft = pos[3]+"vw";
    }
})
// End Project 7 Event Listeners---------------------------------------------
// Start Project 8 Event Listeners-------------------------------------------
project8.addEventListener('mouseover', function(){
    if(projColorFlag){
        p8.backgroundColor = "#fff";
    }
},false);
project8.addEventListener('mouseout', function(){
    if(projColorFlag){
        p8.backgroundColor = "#ddd"
    };
},false);
project8.addEventListener('click', function(){
    if(proj8Flag){
        p8.backgroundColor = "#ddd";
        projColorFlag = false;
        proj8Flag = false;
        p8.width = "50vw";
        p8.height = "50vh";
        p8.marginLeft = "45vw";
        p8.marginTop = "315vh";
        p8.opacity = "1";
        p5.opacity = "0";
        p5.marginLeft = "-20vw";
        p6.opacity = "0";
        p6.marginLeft = "-20vw";
        p7.opacity = "0";
        p7.marginLeft = "-20vw";
    }else{
        projColorFlag = true;
        proj8Flag = true;
        p8.width = "15vw";
        p8.height = "20vh";
        p8.marginLeft = pos[3]+"vw";
        p8.marginTop = "345vh";
        p8.opacity = ".65";
        p5.opacity = ".65";
        p5.marginLeft = pos[0]+"vw";
        p6.opacity = ".65";
        p6.marginLeft = pos[1]+"vw";
        p7.opacity = ".65";
        p7.marginLeft = pos[2]+"vw";
    }
})
// End Project 8 Event Listeners---------------------------------------------

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

        setTimeout(function(){
          animateIt({
            element: p8,
            left: pos[3],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        },10);
        setTimeout(function() {
          animateIt({
            element: p7,
            left: pos[2],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        }, 20);
        setTimeout(function() {
          animateIt({
            element: p6,
            left: pos[1],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        }, 30);
        setTimeout(function() {
          animateIt({
            element: p5,
            left: pos[0],
            begin: -20,
            duration: 2000,
            ease: linearEase
          })
        }, 40);
    }
})
console.log("working");
