// script for networkingWebApp.html
console.log("networkingWebApp.js working");
let convert = $("#convertBtn");
let subnetBtn = $("#subnetBtn");
let findMask = $("#findMaskBtn");
let startIP = $("#startIP");
let endIP = $("#bCastIP");
let p1 = $(".p1");
let p2 = $(".p2");
let p3 = $(".p3");
let bin = "";
let temp = 0;
let idx = 0;
let binaryCheck = [128, 64, 32, 16, 8, 4, 2, 1];
let maskAssign = ["0", "128", "192", "224", "240", "248", "252", "254", "255"];
let binAddress = "";
// Argument must be an array.
function convertToBinary(addressArr){
  //console.log("here");
  addressArr.forEach(function(element){
    temp = parseInt(element, 10);
    //console.log("temp is " + temp);
    if(temp == 0){
      bin = "00000000";
    }else{
      while(temp > 0){
        if(temp >= binaryCheck[idx]){
          temp = temp - binaryCheck[idx];
          bin += "1";
        }else{
          bin += "0";
        }
        idx++;
      }
      for(var i = idx;i < 8;i++){
        bin += "0";
      }
      idx = 0;
    }
    //console.log(bin);
    binAddress += bin + ".";
    bin = "";
    temp = 0;
  });
  return binAddress.substring(0, binAddress.length - 1);
};

function validateIP(ipaddress){
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)){
    return true;
  }else{
    return false;
  }
};

function validateBroadcast(hostAdd, bcast){

}

function getMask(start, bCast){
  let count = 0;
  let netmask = "";
  console.log(start);
  let startList = start.split(".");
  console.log(startList.toString());
  console.log(bCast);
  let broadcast = bCast.split(".");
  console.log(broadcast.toString());
  let tempStart = convertToBinary(startList);
  p1.html("Starting IP in Binary ---------: " + tempStart);
  binAddress = "";
  let tempB = convertToBinary(broadcast);
  p2.html("Broadcast Address in Binary: " + tempB);
  binAddress = "";
  // filter out network mask.
  for(var byteIndex = 0; byteIndex < tempStart.length; byteIndex++){
    // if bits match.
    if(tempStart[byteIndex] == tempB[byteIndex]){
      // if a Dot '.' is found... boom!
      if(tempStart[byteIndex] == "."){
        console.log("Boom!");
      }else{
        count++;
      }

    }else{
      for(var la = 0; la < count; la++){
        if(la == 8 || la == 16 || la == 24){
          netmask += ".1";
        }else{
          netmask += "1";
        }
      }
      // if bits stop matching.
      for(var lb = 0; lb < (32-count); lb++){
        if(lb == ((32-count)-8) || lb == ((32-count)-16) || lb == ((32-count)-24)){
          netmask += ".0";
        }else{
          netmask += "0";
        }
      }
      p3.html("Network mask in Binary: " + netmask + " /" + count + "</p>");
      break;
    }
  }
};

$(document).ready(function(){
  console.log("jQuery working");
  convert.on('click', function(){
    console.log("convert button clicked");
  });
  subnetBtn.on('click', function(){
    console.log("subnet button clicked");
    console.log();
  });
  findMask.on('click', function(){
    if(startIP.val() != ""){
      if(validateIP(startIP.val())){
        if(validateIP(endIP.val())){
          alert("both addresses valid");
          getMask(startIP.val(), endIP.val());
        }else{
          alert("end ip not valid");
        }
      }else{
        alert("start ip not valid");
      }
    }else{
      alert("Fill in start ip field with a valid ip");
    }
  });
});