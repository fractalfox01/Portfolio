$(document).ready(function() {
  var count = 0;

  var clk = $("#clock");
  var oneT = $(".oneT");
  var oneB = $(".oneB");
  var fiveT = $(".fiveT");
  var fiveB = $(".fiveB");
  var tenT = $(".tenT");
  var tenB = $(".tenB");
  var fifthteenT = $(".fifthteenT");
  var fifthteenB = $(".fifthteenB");
  var twentyT = $(".twentyT");
  var twentyB = $(".twentyB");
  var twentyfiveT = $(".twentyfiveT");
  var twentyfiveB = $(".twentyfiveB");
  var now = 0;
  var blue = "rgb(0, 0, 255)";

  $(".A").on('click', function(){
    var startT = $("#startTime").val();
    clk.animate();
    if(oneT.css("color") == blue){
      clk.css("background-image", "url('./Images/myShip1.jpg')");
      clk.css("background-size", "300px 200px").css("margin-left", "-5vw");
      clk.animate({
        marginLeft: "500",
        color: "red",
        backgroundColor: "#555555"
      }, 60000, function(){
        clk.html("done...");

        if(oneB.css("color") == blue){
          clk.css("background-image", "");
          clk.animate({
            marginLeft: "0",
            color: "white",
            backgroundColor: "black"
          }, 60000, function(){
            clk.html("<p>One Minute</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(fiveB.css("color") == blue){
          clk.css("background-image", "");
          clk.animate({
            marginLeft: "0",
            color: "white",
            backgroundColor: "black"
          }, 300000, function(){
            clk.html("<p>Five Minutes</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(tenB.css("color") == blue){
          clk.css("background-image", "");
          clk.animate({
            marginLeft: "0",
            color: "white",
            backgroundColor: "black"
          }, 600000, function(){
            clk.html("<p>Ten Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(fifthteenB.css("color") == blue){
          clk.css("background-image", "");
          clk.animate({
            marginLeft: "0",
            color: "white",
            backgroundColor: "black"
          }, 900000, function(){
            clk.html("<p>Fifthteen Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyB.css("color") == blue){
          clk.css("background-image", "");
          clk.animate({
            marginLeft: "0",
            color: "white",
            backgroundColor: "black"
          }, 1200000, function(){
            clk.html("<p>Twenty Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyfiveB.css("color") == blue){
          clk.css("background-image", "");
          clk.animate({
            marginLeft: "0",
            color: "white",
            backgroundColor: "black"
          }, 1500000, function(){
            clk.html("<p>TwentyFive Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        clk.html("Break");
        clk.css("background-image", "url('./Images/myShip1.jpg')");
        clk.css("background-size", "300px 200px");
      });
      clk.html("");
    }

    if(fiveT.css("color") == blue){
      clk.css("background-image", "url('./Images/myShip2.jpg')");
      clk.css("background-size", "300px 200px");
      clk.animate({
        marginLeft: "500",
        color: "red"
      }, 300000, function(){
        clk.html("done...");

        if(oneB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 60000, function(){
            clk.html("<p>One Minute</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(fiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 300000, function(){
            clk.html("<p>Five Minutes</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(tenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 600000, function(){
            clk.html("<p>Ten Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(fifthteenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 900000, function(){
            clk.html("<p>Fifthteen Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1200000, function(){
            clk.html("<p>Twenty Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyfiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1500000, function(){
            clk.html("<p>TwentyFive Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        clk.html("Break");
        clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip2.jpg')");
        clk.css("background-size", "300px 200px");
      });
      clk.html("");
    }

    if(tenT.css("color") == blue){
      clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip1.jpg')");
      clk.css("background-size", "300px 200px");
      clk.animate({
        marginLeft: "500",
        color: "red",
        backgroundColor: "#555555"
      }, 600000, function(){
        clk.html("done...");

        if(oneB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 60000, function(){
            clk.html("<p>One Minute</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(fiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 300000, function(){
            clk.html("<p>Five Minutes</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(tenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 600000, function(){
            clk.html("<p>Ten Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(fifthteenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 900000, function(){
            clk.html("<p>Fifthteen Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1200000, function(){
            clk.html("<p>Twenty Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyfiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1500000, function(){
            clk.html("<p>TwentyFive Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        clk.html("Break");
        clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip2.jpg')");
        clk.css("background-size", "300px 200px");
      });
      clk.html("");
    }
    if(fifthteenT.css("color") == blue){
      clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip1.jpg')");
      clk.css("background-size", "300px 200px");
      clk.animate({
        marginLeft: "500",
        color: "red",
      }, 900000, function(){
        clk.html("done...");

        if(oneB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 60000, function(){
            clk.html("<p>One Minute</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(fiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 300000, function(){
            clk.html("<p>Five Minutes</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(tenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 600000, function(){
            clk.html("<p>Ten Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(fifthteenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 900000, function(){
            clk.html("<p>Fifthteen Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1200000, function(){
            clk.html("<p>Twenty Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyfiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1500000, function(){
            clk.html("<p>TwentyFive Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        clk.html("Break");
        clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip2.jpg')");
        clk.css("background-size", "300px 200px");
      });
      clk.html("");
    }
    if(twentyT.css("color") == blue){
      clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip1.jpg')");
      clk.css("background-size", "300px 200px");
      clk.animate({
        marginLeft: "500",
        color: "red"
      }, 1200000, function(){
        clk.html("done...");

        if(oneB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 60000, function(){
            clk.html("One minute done...");
            clk.css("margin-left", "0px");
          });
        }
        if(fiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 300000, function(){
            clk.html("<p>Five Minutes</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(tenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "whhite"
          }, 600000, function(){
            clk.html("<p>Ten Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(fifthteenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 900000, function(){
            clk.html("<p>Fifthteen Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1200000, function(){
            clk.html("<p>Twenty Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyfiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1500000, function(){
            clk.html("<p>TwentyFive Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        clk.html("Break");
        clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip2.jpg')");
        clk.css("background-size", "300px 200px");
      });
      clk.html("");
    }
    if(twentyfiveT.css("color") == "rgb(0, 0, 255)"){
      clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip1.jpg')");
      clk.css("background-size", "300px 200px");
      clk.animate({
        marginLeft: "500",
        color: "red"
      }, 1500000, function(){
        clk.html("done...");

        if(oneB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 60000, function(){
            clk.html("done...");
            clk.css("margin-left", "0px");
          });
        }
        if(fiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 300000, function(){
            clk.html("<p>Five Minutes</p>done...");
            clk.css("margin-left", "0px");
          });
        }
        if(tenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 600000, function(){
            clk.html("<p>Ten Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(fifthteenB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 900000, function(){
            clk.html("<p>Fifthteen Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1200000, function(){
            clk.html("<p>Twenty Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        if(twentyfiveB.css("color") == blue){
          clk.animate({
            marginLeft: "0",
            color: "white"
          }, 1500000, function(){
            clk.html("<p>TwentyFive Minutes</p>done...");
            clk.css("margin-left", "0px");
          });

        }
        clk.html("Break");
        clk.css("background-image", "url('https://raw.githubusercontent.com/fractalfox01/Portfolio/master/myShip2.jpg')");
        clk.css("background-size", "300px 200px");
      });
      clk.html("");
    }
  });
  $(".B").on('click', function(){
    var stopT = $("#stopTime").val();
    var t = JSON.stringify(clk.animate);
    clk.stop();
    clk.css("margin-left", "0px");
    clk.css("background-image", "");
    clk.css("background-color", "black");
    $("#clock").html("Stopped...");
  });

  $(".oneT").on('click', function(){
    if(fiveT.css("color") == blue){
      fiveT.css("color", "#555555");
    }
    if(tenT.css("color") == blue){
      tenT.css("color", "#555555");
    }
    if(fifthteenT.css("color") == blue){
      fifthteenT.css("color", "#555555");
    }
    if(twentyT.css("color") == blue){
      twentyT.css("color", "#555555");
    }
    if(twentyfiveT.css("color") == blue){
      twentyfiveT.css("color", "#555555");
    }
    if((oneT.css("color") == "rgb(255, 255, 255)") || (oneT.css("color") == "rgb(85, 85, 85)")){
      oneT.css("color", "blue");
    }else{
      oneT.css("color", "#555555");

    }
  });
  $(".oneB").on('click', function(){
    if(fiveB.css("color") == blue){
      fiveB.css("color", "#555555");
    }
    if(tenB.css("color") == blue){
      tenB.css("color", "#555555");
    }
    if(fifthteenB.css("color") == blue){
      fifthteenB.css("color", "#555555");
    }
    if(twentyB.css("color") == blue){
      twentyB.css("color", "#555555");
    }
    if(twentyfiveB.css("color") == blue){
      twentyfiveB.css("color", "#555555");
    }

    if((oneB.css("color") == "rgb(255, 255, 255)") || (oneB.css("color") == "rgb(85, 85, 85)")){
      oneB.css("color", "blue");
    }else{
      oneB.css("color", "#555555");
    }
  });
  $(".fiveT").on('click', function(){
    if(oneT.css("color") == "rgb(0, 0, 255)"){
      oneT.css("color", "#555555");
    }
    if(tenT.css("color") == "rgb(0, 0, 255)"){
      tenT.css("color", "#555555");
    }
    if(fifthteenT.css("color") == "rgb(0, 0, 255)"){
      fifthteenT.css("color", "#555555");
    }
    if(twentyT.css("color") == "rgb(0, 0, 255)"){
      twentyT.css("color", "#555555");
    }
    if(twentyfiveT.css("color") == "rgb(0, 0, 255)"){
      twentyfiveT.css("color", "#555555");
    }

    if((fiveT.css("color") == "rgb(255, 255, 255)") || (fiveT.css("color") == "rgb(85, 85, 85)")){
      fiveT.css("color", "blue");
    }else{
      fiveT.css("color", "#555555");
    }
  });
  $(".fiveB").on('click', function(){
    if(oneB.css("color") == "rgb(0, 0, 255)"){
      oneB.css("color", "#555555");
    }
    if(tenB.css("color") == "rgb(0, 0, 255)"){
      tenB.css("color", "#555555");
    }
    if(fifthteenB.css("color") == "rgb(0, 0, 255)"){
      fifthteenB.css("color", "#555555");
    }
    if(twentyB.css("color") == "rgb(0, 0, 255)"){
      twentyB.css("color", "#555555");
    }
    if(twentyfiveB.css("color") == "rgb(0, 0, 255)"){
      twentyfiveB.css("color", "#555555");
    }

    if((fiveB.css("color") == "rgb(255, 255, 255)") || (fiveB.css("color") == "rgb(85, 85, 85)")){
      fiveB.css("color", "blue");
    }else{
      fiveB.css("color", "#555555");
    }
  });
  $(".tenT").on('click', function(){
    if(oneT.css("color") == "rgb(0, 0, 255)"){
      oneT.css("color", "#555555");
    }
    if(fiveT.css("color") == "rgb(0, 0, 255)"){
      fiveT.css("color", "#555555");
    }
    if(fifthteenT.css("color") == "rgb(0, 0, 255)"){
      fifthteenT.css("color", "#555555");
    }
    if(twentyT.css("color") == "rgb(0, 0, 255)"){
      twentyT.css("color", "#555555");
    }
    if(twentyfiveT.css("color") == "rgb(0, 0, 255)"){
      twentyfiveT.css("color", "#555555");
    }

    if((tenT.css("color") == "rgb(255, 255, 255)") || (tenT.css("color") == "rgb(85, 85, 85)")){
      tenT.css("color", "blue");
    }else{
      tenT.css("color", "#555555");
    }
  });
  $(".tenB").on('click', function(){
    if(oneB.css("color") == "rgb(0, 0, 255)"){
      oneB.css("color", "#555555");
    }
    if(fiveB.css("color") == "rgb(0, 0, 255)"){
      fiveB.css("color", "#555555");
    }
    if(fifthteenB.css("color") == "rgb(0, 0, 255)"){
      fifthteenB.css("color", "#555555");
    }
    if(twentyB.css("color") == "rgb(0, 0, 255)"){
      twentyB.css("color", "#555555");
    }
    if(twentyfiveB.css("color") == "rgb(0, 0, 255)"){
      twentyfiveB.css("color", "#555555");
    }

    if((tenB.css("color") == "rgb(255, 255, 255)") || (tenB.css("color") == "rgb(85, 85, 85)")){
      tenB.css("color", "blue");
    }else{
      tenB.css("color", "#555555");
    }
  });

  $(".fifthteenT").on('click', function(){
    if(oneT.css("color") == "rgb(0, 0, 255)"){
      oneT.css("color", "#555555");
    }
    if(fiveT.css("color") == "rgb(0, 0, 255)"){
      fiveT.css("color", "#555555");
    }
    if(tenT.css("color") == "rgb(0, 0, 255)"){
      tenT.css("color", "#555555");
    }
    if(twentyT.css("color") == "rgb(0, 0, 255)"){
      twentyT.css("color", "#555555");
    }
    if(twentyfiveT.css("color") == "rgb(0, 0, 255)"){
      twentyfiveT.css("color", "#555555");
    }

    if((fifthteenT.css("color") == "rgb(255, 255, 255)") || (fifthteenT.css("color") == "rgb(85, 85, 85)")){
      fifthteenT.css("color", "blue");
    }else{
      fifthteenT.css("color", "#555555");
    }
  });
  $(".fifthteenB").on('click', function(){
    if(oneB.css("color") == "rgb(0, 0, 255)"){
      oneB.css("color", "#555555");
    }
    if(fiveB.css("color") == "rgb(0, 0, 255)"){
      fiveB.css("color", "#555555");
    }
    if(tenB.css("color") == "rgb(0, 0, 255)"){
      tenB.css("color", "#555555");
    }
    if(twentyB.css("color") == "rgb(0, 0, 255)"){
      twentyB.css("color", "#555555");
    }
    if(twentyfiveB.css("color") == "rgb(0, 0, 255)"){
      twentyfiveB.css("color", "#555555");
    }

    if((fifthteenB.css("color") == "rgb(255, 255, 255)") || (fifthteenB.css("color") == "rgb(85, 85, 85)")){
      fifthteenB.css("color", "blue");
    }else{
      fifthteenB.css("color", "#555555");
    }
  });

  $(".twentyT").on('click', function(){
    if(oneT.css("color") == "rgb(0, 0, 255)"){
      oneT.css("color", "#555555");
    }
    if(fiveT.css("color") == "rgb(0, 0, 255)"){
      fiveT.css("color", "#555555");
    }
    if(tenT.css("color") == "rgb(0, 0, 255)"){
      tenT.css("color", "#555555");
    }
    if(fifthteenT.css("color") == "rgb(0, 0, 255)"){
      fifthteenT.css("color", "#555555");
    }
    if(twentyfiveT.css("color") == "rgb(0, 0, 255)"){
      twentyfiveT.css("color", "#555555");
    }

    if((twentyT.css("color") == "rgb(255, 255, 255)") || (twentyT.css("color") == "rgb(85, 85, 85)")){
      twentyT.css("color", "blue");
    }else{
      twentyT.css("color", "#555555");
    }
  });
  $(".twentyB").on('click', function(){
    if(oneB.css("color") == "rgb(0, 0, 255)"){
      oneB.css("color", "#555555");
    }
    if(fiveB.css("color") == "rgb(0, 0, 255)"){
      fiveB.css("color", "#555555");
    }
    if(tenB.css("color") == "rgb(0, 0, 255)"){
      tenB.css("color", "#555555");
    }
    if(fifthteenB.css("color") == "rgb(0, 0, 255)"){
      fifthteenB.css("color", "#555555");
    }
    if(twentyfiveB.css("color") == "rgb(0, 0, 255)"){
      twentyfiveB.css("color", "#555555");
    }

    if((twentyB.css("color") == "rgb(255, 255, 255)") || (twentyB.css("color") == "rgb(85, 85, 85)")){
      twentyB.css("color", "blue");
    }else{
      twentyB.css("color", "#555555");
    }
  });

  $(".twentyfiveT").on('click', function(){
    if(oneT.css("color") == "rgb(0, 0, 255)"){
      oneT.css("color", "#555555");
    }
    if(fiveT.css("color") == "rgb(0, 0, 255)"){
      fiveT.css("color", "#555555");
    }
    if(tenT.css("color") == "rgb(0, 0, 255)"){
      tenT.css("color", "#555555");
    }
    if(fifthteenT.css("color") == "rgb(0, 0, 255)"){
      fifthteenT.css("color", "#555555");
    }
    if(twentyT.css("color") == "rgb(0, 0, 255)"){
      twentyT.css("color", "#555555");
    }

    if((twentyfiveT.css("color") == "rgb(255, 255, 255)") || (twentyfiveT.css("color") == "rgb(85, 85, 85)")){
      twentyfiveT.css("color", "blue");
    }else{
      twentyfiveT.css("color", "#555555");
    }
  });
  $(".twentyfiveB").on('click', function(){
    if(oneB.css("color") == "rgb(0, 0, 255)"){
      oneB.css("color", "#555555");
    }
    if(fiveB.css("color") == "rgb(0, 0, 255)"){
      fiveB.css("color", "#555555");
    }
    if(tenB.css("color") == "rgb(0, 0, 255)"){
      tenB.css("color", "#555555");
    }
    if(fifthteenB.css("color") == "rgb(0, 0, 255)"){
      fifthteenB.css("color", "#555555");
    }
    if(twentyB.css("color") == "rgb(0, 0, 255)"){
      twentyB.css("color", "#555555");
    }

    if((twentyfiveB.css("color") == "rgb(255, 255, 255)") || (twentyfiveB.css("color") == "rgb(85, 85, 85)")){
      twentyfiveB.css("color", "blue");
    }else{
      twentyfiveB.css("color", "#555555");
    }
  });
});