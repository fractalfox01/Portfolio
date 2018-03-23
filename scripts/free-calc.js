var text = '_';
var num = 0;
var full = [];
var temp = 0;
var next = 0;
var count = 0;
var str = "";
var n = 0;
  $("#button1").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(1);
      text = '1';
    }else{
      $(".text").append(1);
      text += '1';
    }
  });
$(document).ready(function(){

  $("#button2").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(2);
      text = '2';
    }else{
      $(".text").append(2);
      text += '2';
    }
  });
  $("#button3").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(3);
      text  = '3';
    }else{
      $(".text").append(3);
      text += '3';
    }
  });
  $("#button4").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(4);
      text  = '4';
    }else{
      $(".text").append(4);
      text += '4';
    }
  });
  $("#button5").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(5);
      text  = '5';
    }else{
      $(".text").append(5);
      text += '5';
    }
  });
  $("#button6").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(6);
      text  = '6';
    }else{
      $(".text").append(6);
      text += '6';
    }
  });
  $("#button7").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(7);
      text  = '7';
    }else{
      $(".text").append(7);
      text += '7';
    }
  });
  $("#button8").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(8);
      text  = '8';
    }else{
      $(".text").append(8);
      text += '8';
    }
  });
  $("#button9").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(9);
      text  = '9';
    }else{
      $(".text").append(9);
      text += '9';
    }
  });
  $("#buttonDot").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html('.');
      text  = '.';
    }else if(text.includes(".")){

    }else{
      $(".text").append('.');
      text += '.';
    }
  });
  $("#button0").on(('click'), function(){

    if(text ===  '_' ){
      $(".text").html(0);
      text  = '0';
    }else{
      $(".text").append(0);
      text += '0';
    }
  });
  $("#buttonClear").on(('click'), function(){
    $("#text").html('<a class="blink" value="0">0</a>');
    text = '_';
    num = 0;
  });
  $("#add").on(('click'),function(){
    if(text ===  '_'  || text[text.length-1] === '+' || text[text.length-1] === '-' || text[text.length-1] === '/' || text[text.length-1] === 'x'){

    }else{
      $(".text").append(' + ');
      text += ',+';
    }
  });
  $("#sub").on(('click'),function(){

    if(text ===  '_'  || text[text.length-1] === '+' || text[text.length-1] === '-' || text[text.length-1] === '/' || text[text.length-1] === 'x'){

    }else{
      $(".text").append(' - ');
      text += ',-';
    }
  });
  $("#divide").on(('click'),function(){

    if(text ===  '_'  || text[text.length-1] === '+' || text[text.length-1] === '-' || text[text.length-1] === '/' || text[text.length-1] === 'x'){

    }else{
      $(".text").append(' / ');
      text += ',/';
    }
  });
  $("#multiply").on(('click'),function(){

    if(text ===  '_'  || text[text.length-1] === '+' || text[text.length-1] === '-' || text[text.length-1] === '/' || text[text.length-1] === 'x'){

    }else{
      $(".text").append(' x ');
      text += ',x';
    }
  });
  $("#enter").on(('click'),function(){
    temp = text.split(",");
    console.log("temp " + temp + " length " + temp.length);
    for(var g = 0; g < temp.length; g++){
      if(temp[g].includes("+")){
        console.log("plus");
        str = temp[g].slice(1,temp[g].length);
        n = Math.floor(num) + parseInt(str);
        num = n;
        console.log("n" + n + " num " + num + " str " + str);
        str = "";
      }else if(temp[g].includes("-")){
        console.log("minus");
        str = temp[g].slice(1,temp[g].length);
        n = Math.floor(num) - parseInt(str);
        num = n;
        console.log("n" + n + " num " + num + " str " + str);
        str = "";
      }else if(temp[g].includes("x")){
        console.log("times");
        str = temp[g].slice(1,temp[g].length);
        n = Math.floor(num) * parseInt(str);
        num = n;
        console.log("n" + n + " num " + num + " str " + str);
        str = "";
      }else if(temp[g].includes("/")){
        console.log("divide");
        str = temp[g].slice(1,temp[g].length);
        n = Math.floor(num) / parseInt(str);
        num = n;
        console.log("n" + n + " num " + num + " str " + str);
        str = "";
      }else{
        console.log("else");
        num += parseInt(temp[g]);
        console.log("num " + num + " str " + str);
      }
      $(".text").html(n);
    }
  });
  num = 0;
});