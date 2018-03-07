/* Javascript for responsive.html
  Author: Thomas Vandivier
  Description: Controls page flow */

console.log("Script Working");
//$(document).ready(function(){
//  console.log("Jquery Working!");
//})

let svgHeader_name = $("#frame");
let svgClickFlag_about = true;
let svgHeader_about = $("#frameAbout");
let svgHeader_skills = $("#frameSkills");
let svgHeader_projects = $("#frameProjects");
let svgHeader_links = $("#frameLinks");
let svgHeader_education = $("#frameEducation");

$(document).ready(function(){
  svgHeader_name.css("position", "fixed").css("marginTop", "10vh").css("marginLeft", "0vh").css("width", "100vw").css("height", "20vh").css("backgroundColor", "none").css("zIndex", "1");

  // Svg Header Button: About -------------------------------------------
  svgHeader_about.on('mouseover', function(){
    svgHeader_about.css("backgroundColor", "#070").css("opacity", "1");
  });
  svgHeader_about.on('mouseout',function(){
    svgHeader_about.css("backgroundColor", "").css("opacity", "1");
  });
  svgHeader_about.on('click', function(){

  });
  // --------------------------------------------------------------------
  //Svg Header Button: Skills -------------------------------------------
  svgHeader_skills.on('mouseover', function(){
    svgHeader_skills.css("backgroundColor", "#070").css("opacity", "1");
  });
  svgHeader_skills.on('mouseout', function(){
    svgHeader_skills.css("backgroundColor", "").css("opacity", "1");
  });
  svgHeader_skills.on('click', function(){

  });
  // --------------------------------------------------------------------
  // Svg Header Button: Projects ----------------------------------------
  svgHeader_projects.on('mouseover', function(){
    svgHeader_projects.css("backgroundColor", "#070").css("opacity", "1");
  });
  svgHeader_projects.on('mouseout', function(){
    svgHeader_projects.css("backgroundColor", "").css("opacity", "1");
  });
  svgHeader_projects.on('click', function(){

  });
  // --------------------------------------------------------------------
  // Svg Header Button: Links -------------------------------------------
  svgHeader_links.on('mouseover', function(){
    svgHeader_links.css("backgroundColor", "#070").css("opacity", "1");
  });
  svgHeader_links.on('mouseout', function(){
    svgHeader_links.css("backgroundColor", "").css("opacity", "1");
  });
  svgHeader_links.on('click', function(){

  });
  // --------------------------------------------------------------------
  // Svg Header Button: Education ---------------------------------------
  svgHeader_education.on('mouseover', function(){
    svgHeader_education.css("backgroundColor", "#070").css("opacity", "1");
  });
  svgHeader_education.on('mouseout', function(){
    svgHeader_education.css("backgroundColor", "").css("opacity", "1");
  });
  svgHeader_education.on('click', function(){

  });
  // --------------------------------------------------------------------
})