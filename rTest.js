let f1 = true;
let f2 = false;
let f3 = false;
let flags = [true, false, false, false, false, false, false, false, false, false, false, false, false]
let num = -100;
var doc = document.documentElement;
var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
// document.getElementById("mover").style.marginLeft = "-100vw";
let aa = document.getElementsByClassName("mover");
window.addEventListener('scroll', function(){

    if(window.pageYOffset > 800 && flags[0]){
        flags[0] = true;
        flags[1] = true;
        console.log("here");
        console.log(aa.length.toString());
        aa[0].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 850 && flags[1]){
        flags[1] = true;
        flags[2] = true;
        aa[0].style.marginLeft = "-100vw";
        aa[1].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 900 && flags[2]){
        flags[2] = true;
        flags[3] = true;
        aa[1].style.marginLeft = "-100vw";
        aa[2].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 950 && flags[3]){
        flags[3] = true;
        flags[4] = true;
        aa[2].style.marginLeft = "-100vw";
        aa[3].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 1000 && flags[4]){
        flags[4] = true;
        flags[5] = true;
        aa[3].style.marginLeft = "-100vw";
        aa[4].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 1050 && flags[5]){
        flags[5] = true;
        flags[6] = true;
        aa[4].style.marginLeft = "-100vw";
        aa[5].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 1100 && flags[6]){
        flags[6] = true;
        flags[7] = true;
        aa[5].style.marginLeft = "-100vw";
        aa[6].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 1150 && flags[7]){
        flags[7] = true;
        flags[8] = true;
        aa[6].style.marginLeft = "-100vw";
        aa[7].style.marginLeft = "1vw";
    }
    if(window.pageYOffset > 1200 && flags[8]){
        flags[8] = true;
        flags[9] = true;
        aa[7].style.marginLeft = "-100vw";
        aa[8].style.marginLeft = "1vw";
    }
    // if(window.pageYOffset > 1450 && !flag){
    //     flag = true;
    //     console.log(document.getElementById("mover").style.marginLeft);
    //     document.getElementById("mover").style.marginLeft = "-100vw";
    // }
})
console.log("working");
