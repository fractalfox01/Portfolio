/* Javascript for responsive.html
  Author: Thomas Vandivier
  Description: Controls page flow */

console.log("Script Working");
//$(document).ready(function(){
//  console.log("Jquery Working!");
//})

// Declare Variables ----------------------------------------------------
let svgHeader_name = $("#frame");
let svgClickFlag_about = true;
let svgHeader_about = $("#frameAbout");
let svgHeader_skills = $("#frameSkills");
let svgHeader_projects = $("#frameProjects");
let svgHeader_links = $("#frameLinks");
let svgHeader_education = $("#frameEducation");

let skill_python = $(".p-top");
let skill_wordpress = $(".p-2");
let skill_linux = $(".p-3");
let skill_html = $(".p-4");
let skill_bootstrap = $(".p-5");
let skill_javascript = $(".p-6");
let skill_bash = $(".p-7");
let skill_java = $(".p-8");
let skill_android = $(".p-9");
let skill_cSharp = $(".p-10");
let skill_apache = $(".p-11");
let skill_node = $(".p-12");

// -----------------------------------------------------------------------

// Main Code Block: Jquery -----------------------------------------------
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
  // ====================================================================
  // ========================= Skills Area ==============================
  // ====================================================================
  // Python interaction -------------------------------------------------
  skill_python.on('mouseover', function(){
    skill_python.css("opacity", ".75");
  });
  skill_python.on('mouseout', function(){
    skill_python.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // wordpress interaction ----------------------------------------------
  skill_wordpress.on('mouseover', function(){
    skill_wordpress.css("opacity", ".75");
  });
  skill_wordpress.on('mouseout', function(){
    skill_wordpress.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // Linux interaction --------------------------------------------------
  skill_linux.on('mouseover', function(){
    skill_linux.css("opacity", ".75");
  });
  skill_linux.on('mouseout', function(){
    skill_linux.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // Html/CSS interaction -----------------------------------------------
  skill_html.on('mouseover', function(){
    skill_html.css("opacity", ".75");
  });
  skill_html.on('mouseout', function(){
    skill_html.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // Bootstrap interaction ----------------------------------------------
  skill_bootstrap.on('mouseover', function(){
    skill_bootstrap.css("opacity", ".75");
  });
  skill_bootstrap.on('mouseout', function(){
    skill_bootstrap.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // Javascript interaction ---------------------------------------------
  skill_javascript.on('mouseover', function(){
    skill_javascript.css("opacity", ".75");
  });
  skill_javascript.on('mouseout', function(){
    skill_javascript.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // Bash interaction ---------------------------------------------------
  skill_bash.on('mouseover', function(){
    skill_bash.css("opacity", ".75");
  });
  skill_bash.on('mouseout', function(){
    skill_bash.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // java interaction ---------------------------------------------------
  skill_java.on('mouseover', function(){
    skill_java.css("opacity", ".75");
  });
  skill_java.on('mouseout', function(){
    skill_java.css("opacity", "1");
  });
  // --------------------------------------------------------------------
  // Android interaction ------------------------------------------------
  skill_android.on('mouseover', function(){
    skill_android.css("opacity", ".75");
  });
  skill_android.on('mouseout', function(){
    skill_android.css("opacity", "1");
  });
  // --------------------------------------------------------------------
})