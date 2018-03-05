/* Javascript for responsive.html
  Author: Thomas Vandivier
  Description: Controls page flow */

//console.log("Script Working");
//$(document).ready(function(){
//  console.log("Jquery Working!");
//})

let svgHeader_name = $("#frameAbout");

$(document).ready(function(){
  svgHeader_name.css("position", "fixed").css("marginTop", "10vh").css("marginLeft", "0vh").css("width", "100vw").css("height", "30vh").css("backgroundColor", "none").css("zIndex", "1");
})