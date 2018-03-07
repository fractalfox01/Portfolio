/* Javascript for responsive.html
  Author: Thomas Vandivier
  Description: Controls page flow */

//console.log("Script Working");
//$(document).ready(function(){
//  console.log("Jquery Working!");
//})
let win_Width = $.viewportW();
let svgHeader_name = $("#frame");
let svgHeader_about = $("#frameAbout");


$(document).ready(function(){
  svgHeader_name.css("position", "fixed").css("marginTop", "10vh").css("marginLeft", "0vh").css("width", "100vw").css("height", "20vh").css("backgroundColor", "none").css("zIndex", "1");
  console.log(win_Width);
})