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

// Projects vars hidden -----------------------------
let skills_pyText = $("#pythonInfo");
skills_pyText.data("flag", true);
let skills_wpText = $("#wordpressInfo");
skills_wpText.data("flag", true);
let skills_linuxText = $("#linuxInfo");
skills_linuxText.data("flag", true);
let skills_htmlText = $("#hTmlInfo");
skills_htmlText.data("flag", true);
let skills_bootstrapText = $("#bootstrapInfo");
skills_bootstrapText.data("flag", true);

let skills_javascriptText = $("#javascriptInfo");
skills_javascriptText.data("flag", true);
let skills_bashText = $("#bashInfo");
skills_bashText.data("flag", true);
let skills_javaText = $("#javaInfo");
skills_javaText.data("flag", true);
let skills_androidText = $("#androidInfo");
skills_androidText.data("flag", true);
let skills_cSharpText = $("#cSharpInfo");
skills_cSharpText.data("flag", true);
let skills_apacheText = $("#apacheInfo");
skills_apacheText.data("flag", true);
let skills_nodeText = $("#nodeInfo");
skills_nodeText.data("flag", true);

let pyMove = document.getElementById("pythonInfo").offsetTop;
pyMove /= 4;
let wpMove = document.getElementById("wordpressInfo").offsetTop;
wpMove /= 4;
wpMove = wpMove - 0;

let linMove = document.getElementById("linuxInfo").offsetTop;
linMove /= 4;
linMove = linMove - 0;

let htMove = document.getElementById("hTmlInfo").offsetTop;
htMove /= 4;
htMove = htMove - 0;

let move = wpMove - pyMove;
move /= 2;
console.log("move is: " + move);
pyMove += "vh";
wpMove -= move;
wpMove += "vh";
linMove -= (move*2);
linMove += "vh";
htMove -= (move*3);
htMove += "vh";

// -----------------------------------------------------------------------
function skillClose(keep){

};
function skillInfoChange(e){
  // Function displays associated skill info box.
  console.log(JSON.stringify(e));
  if(e.data("flag")){
    e.data("flag", false);
    e.css("opacity", "1").css("zIndex", "0");
  }else{
    e.data("flag", true);
    e.css("opacity", "0").css("zIndex", "-1");
  }
};
// Main Code Block: Jquery -----------------------------------------------
$(document).ready(function(){
  console.log("python top: " + pyMove);
  skills_pyText.css("margin-top", pyMove);
  console.log("wordpress top: " + wpMove);
  skills_wpText.css("margin-top", wpMove);
  console.log("linux top: " + linMove);
  skills_linuxText.css("margin-top", linMove);
  console.log("html top: " + htMove);
  skills_htmlText.css("margin-top", htMove);
//  projects_pyText.css("backgroundColor", "#0f0");

  svgHeader_name.css("position", "fixed").css("marginTop", "2vh").css("marginLeft", "0vh").css("width", "100vw").css("height", "20vh").css("backgroundColor", "none").css("zIndex", "1");

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
  skill_python.on('click', function(){
    skillInfoChange(skills_pyText);
  });

  // --------------------------------------------------------------------
  // wordpress interaction ----------------------------------------------
  skill_wordpress.on('mouseover', function(){
    skill_wordpress.css("opacity", ".75");
  });
  skill_wordpress.on('mouseout', function(){
    skill_wordpress.css("opacity", "1");
  });
  skill_wordpress.on('click', function(){
    skillInfoChange(skills_wpText);
  });
  // --------------------------------------------------------------------
  // Linux interaction --------------------------------------------------
  skill_linux.on('mouseover', function(){
    skill_linux.css("opacity", ".75");
  });
  skill_linux.on('mouseout', function(){
    skill_linux.css("opacity", "1");
  });
  skill_linux.on('click', function(){
    skillInfoChange(skills_linuxText);
  });
  // --------------------------------------------------------------------
  // Html/CSS interaction -----------------------------------------------
  skill_html.on('mouseover', function(){
    skill_html.css("opacity", ".75");
  });
  skill_html.on('mouseout', function(){
    skill_html.css("opacity", "1");
  });
  skill_html.on('click', function(){
    skillInfoChange(skills_htmlText);
  });
  // --------------------------------------------------------------------
  // Bootstrap interaction ----------------------------------------------
  skill_bootstrap.on('mouseover', function(){
    skill_bootstrap.css("opacity", ".75");
  });
  skill_bootstrap.on('mouseout', function(){
    skill_bootstrap.css("opacity", "1");
  });
  skill_bootstrap.on('click', function(){
    skillInfoChange(skills_bootstrapText);
  });
  // --------------------------------------------------------------------
  // Javascript interaction ---------------------------------------------
  skill_javascript.on('mouseover', function(){
    skill_javascript.css("opacity", ".75");
  });
  skill_javascript.on('mouseout', function(){
    skill_javascript.css("opacity", "1");
  });
  skill_javascript.on('click', function(){
    skillInfoChange(skills_javascriptText);
  });
  // --------------------------------------------------------------------
  // Bash interaction ---------------------------------------------------
  skill_bash.on('mouseover', function(){
    skill_bash.css("opacity", ".75");
  });
  skill_bash.on('mouseout', function(){
    skill_bash.css("opacity", "1");
  });
  skill_bash.on('click', function(){
    skillInfoChange(skills_bashText);
  });
  // --------------------------------------------------------------------
  // java interaction ---------------------------------------------------
  skill_java.on('mouseover', function(){
    skill_java.css("opacity", ".75");
  });
  skill_java.on('mouseout', function(){
    skill_java.css("opacity", "1");
  });
  skill_java.on('click', function(){
    skillInfoChange(skills_javaText);
  });
  // --------------------------------------------------------------------
  // Android interaction ------------------------------------------------
  skill_android.on('mouseover', function(){
    skill_android.css("opacity", ".75");
  });
  skill_android.on('mouseout', function(){
    skill_android.css("opacity", "1");
  });
  skill_android.on('click', function(){
    skillInfoChange(skills_androidText);
  });
  // --------------------------------------------------------------------
  // C Sharp interaction ------------------------------------------------
  skill_cSharp.on('mouseover', function(){
    skill_cSharp.css("opacity", ".75");
  });
  skill_cSharp.on('mouseout', function(){
    skill_cSharp.css("opacity", "1");
  });
  skill_cSharp.on('click', function(){
    skillInfoChange(skills_cSharpText);
  });
  // --------------------------------------------------------------------
  // Apache interaction -------------------------------------------------
  skill_apache.on('mouseover', function(){
    skill_apache.css("opacity", ".75");
  });
  skill_apache.on('mouseout', function(){
    skill_apache.css("opacity", "1");
  });
  skill_apache.on('click', function(){
    skillInfoChange(skills_apacheText);
  });
  // --------------------------------------------------------------------
  // Node interaction ---------------------------------------------------
  skill_node.on('mouseover', function(){
    skill_node.css("opacity", ".75");
  });
  skill_node.on('mouseout', function(){
    skill_node.css("opacity", "1");
  });
  skill_node.on('click', function(){
    skillInfoChange(skills_nodeText);
  });
  // --------------------------------------------------------------------
  //============================ End ====================================
})