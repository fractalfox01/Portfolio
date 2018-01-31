let f1 = true;
let f2 = true;
let f3 = true;
let flags = [true, false, false, false, false, false, false, false, false, false, false, false, false]
let winH = window.innerHeight;
var doc = document.documentElement;
var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
// document.getElementById("mover").style.marginLeft = "-100vw";
let aa = document.getElementsByClassName("mover");
let bb = document.getElementsByClassName("moverIn");
let python = document.getElementById("pythonInfo").style;
let wordpress = document.getElementById("wordpressInfo").style;
let linux = document.getElementById("linuxInfo").style;
window.addEventListener('scroll', function(){
    console.log(winH + " <--");
    $("#about").text(winH);
    if(window.pageYOffset > 2000 && flags[0]){
        flags[0] = true;
        flags[1] = true;
        console.log("here");
        console.log(aa.length.toString());
        aa[0].style.marginLeft = "1vw";
        if(f1){
            python.opacity = "1";
        }
        wordpress.opacity = "0";
    }
    if(window.pageYOffset > 2050 && flags[1]){
        f1 = false;
        flags[1] = true;
        flags[2] = true;
        aa[0].style.marginLeft = "-100vw";
        python.opacity = "0";
        if(f2){
            wordpress.opacity = "1";
        }
        linux.opacity = "0";
        aa[1].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2100 && flags[2]){
        f2 = false;
        flags[2] = true;
        flags[3] = true;
        aa[1].style.marginLeft = "-100vw";
        if(f3){
            linux.opacity = "1";
        }
        wordpress.opacity = "0";
        aa[2].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2150 && flags[3]){
        f3 = false;
        flags[3] = true;
        flags[4] = true;
        linux.opacity = "0";
        aa[2].style.marginLeft = "-100vw";
        aa[3].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2200 && flags[4]){
        flags[4] = true;
        flags[5] = true;
        aa[3].style.marginLeft = "-100vw";
        aa[4].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2250 && flags[5]){
        flags[5] = true;
        flags[6] = true;
        aa[4].style.marginLeft = "-100vw";
        aa[5].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2300 && flags[6]){
        flags[6] = true;
        flags[7] = true;
        aa[5].style.marginLeft = "-100vw";
        aa[6].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2350 && flags[7]){
        flags[7] = true;
        flags[8] = true;
        aa[6].style.marginLeft = "-100vw";
        aa[7].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2400 && flags[8]){
        flags[8] = true;
        flags[9] = true;
        aa[7].style.marginLeft = "-100vw";
        aa[8].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 2450){
        aa[8].style.marginLeft = "-100vw";
    }
})
console.log("working");
