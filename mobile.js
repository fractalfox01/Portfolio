let f1 = true;
let f2 = true;
let f3 = true;
let flags = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
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
window.addEventListener('scroll', function(){
    console.log(winH + " <--");
    $("#about").text(window.pageYOffset);
    if(window.pageYOffset > 1800 && window.pageYOffset < 2000){
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
    }
    if(window.pageYOffset > 2000 && flags[0]){
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
        aa[0].style.marginLeft = "1vw";
        python.opacity = "1";
    }
//    if(window.pageYOffset > 2050 && flags[1]){
//        f1 = false;
//        flags[1] = true;
//        flags[2] = true;
//        aa[0].style.marginLeft = "-100vw";
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        python.opacity = "0";
//        wordpress.opacity = ".8";
//        aa[1].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 2100 && flags[2]){
//        f2 = false;
//        flags[2] = true;
//        flags[3] = true;
//        aa[1].style.marginLeft = "-100vw";
//        linux.opacity = ".8";
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[2].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 3150 && flags[3]){
//        f3 = false;
//        flags[3] = true;
//        flags[4] = true;
//        htmlCss.opacity = ".8";
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[2].style.marginLeft = "-100vw";
//        aa[3].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1400 && flags[4]){
//        flags[4] = true;
//        flags[5] = true;
//        boot.opacity = ".8";
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[3].style.marginLeft = "-100vw";
//        aa[4].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1450 && flags[5]){
//        flags[5] = true;
//        flags[6] = true;
//        js.opacity = ".8";
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[4].style.marginLeft = "-100vw";
//        aa[5].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1500 && flags[6]){
//        flags[6] = true;
//        flags[7] = true;
//        bash.opacity = ".8";
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[5].style.marginLeft = "-100vw";
//        aa[6].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1550 && flags[7]){
//        flags[7] = true;
//        flags[8] = true;
//        java.opacity = ".8";
//        android.opacity = "0";
//        apache.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[6].style.marginLeft = "-100vw";
//        aa[7].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1600 && flags[8]){
//        flags[8] = true;
//        flags[9] = true;
//        android.opacity = ".8";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[7].style.marginLeft = "-100vw";
//        aa[8].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1650 && flags[8]){
//        cSharp.opacity = ".8";
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        flags[9] = true;
//        flags[10] = true;
//        aa[8].style.marginLeft = "-100vw";
//        aa[9].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1700 && flags[10]){
//        apache.opacity = ".8";
//        android.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        flags[10] = true;
//        flags[11] = true;
//        aa[9].style.marginLeft = "-100vw";
//        aa[10].style.marginLeft = "1vw";
//    }
//    if(window.pageYOffset > 1800){
//        android.opacity = "0";
//        apache.opacity = "0";
//        java.opacity = "0";
//        cSharp.opacity = "0";
//        bash.opacity = "0";
//        js.opacity = "0";
//        boot.opacity = "0";
//        htmlCss.opacity = "0";
//        linux.opacity = "0";
//        wordpress.opacity = "0";
//        python.opacity = "0";
//        aa[10].style.marginLeft = "-100vw";
//    }

})

console.log("working");
