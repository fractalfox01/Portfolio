// script for networkingWebApp.html
console.log("networkingWebApp.js working");
let convert = $("#convertBtn");
let subnetBtn = $("#subnetBtn");
let findMask = $("#findMaskBtn");
let startIP = $("#startIP");
let startLbl = $(".start");
let endIP = $("#bCastIP");
let bCastLbl = $(".broadcast")
let maskText = $("#masks");
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
  let netmaskBin = "";
  let netmaskDec = "";
  let maskCount = 4;
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
          netmaskBin += ".1";
        }else{
          netmaskBin += "1";
        }
      }
      // if bits stop matching.
      for(var lb = 0; lb < (32-count); lb++){
        if(lb == ((32-count)-8) || lb == ((32-count)-16) || lb == ((32-count)-24)){
          netmaskBin += ".0";
        }else{
          netmaskBin += "0";
        }
      }
      p3.html("Network mask in Binary ----: " + netmaskBin);

      // While loop pieces together ipv4 format network mask i.e. 255.255.0.0
      // uses and deducts from count variable.
      let tmpCount = count;
      while(maskCount > 0){
        if(maskCount == 4){
          if(count >= 24){
            console.log("first: 255.255.255");
            netmaskDec += "255.255.255";
            count -= 24;
            maskCount -= 3;
          }else if(count >= 16){
            console.log("first: 255.255");
            netmaskDec += "255.255";
            count -= 16;
            maskCount -= 2;
          }else if(count >=8){
            console.log("first: 255");
            netmaskDec += "255";
            count -= 8;
            maskCount -= 1;
          }else{
            console.log("first: " + maskCount[count]);
            netmaskDec += "." + maskAssign[count];
            maskCount -= 1;
            count = 0;
          }
        }else if(maskCount == 3){
          if(count >= 16){
            console.log("second: 255.255");
            netmaskDec += "255.255";
            count -= 16;
            maskCount -= 2;
          }else if(count >=8){
            console.log("second: 255");
            netmaskDec += "255";
            count -= 8;
            maskCount -= 1;
          }else{
            console.log("second: " + maskCount[count]);
            netmaskDec += "." + maskAssign[count];
            maskCount -= 1;
            count = 0;
          }
        }else if(maskCount == 2){
          if(count >=8){
            console.log("third: 255");
            netmaskDec += "255";
            count -= 8;
            maskCount -= 1;
          }else{
            console.log("third: " + maskCount[count]);
            netmaskDec += "." +  maskAssign[count];
            maskCount -= 1;
            count = 0;
          }
        }else if(maskCount == 1){
          maskCount -= 1;
          console.log("fourth: " + maskCount[count]);
          netmaskDec += "." + maskAssign[count];
          maskCount -= 1;
          count = 0;
        }else{
          console.log("Ooops, Something went wrong.");
        }

      }
      maskText.val(netmaskDec + "    /" + tmpCount);
      console.log("mask dec is: " + netmaskDec);
      break;
    }
  }
};

function compareAddreses(start, end){
  console.log("comparing");
  let cTempStart = start.split(".");
  let cTempEnd = end.split(".");
  for(var ia = 0; ia < 4; ia++){
    console.log("start: " + cTempStart);
    console.log("end: " + cTempEnd);
    if(parseInt(cTempStart[ia], 10) > parseInt(cTempEnd[ia], 10)){
      return false;
    }
  }
  return true;
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
          console.log("both addresses valid");
          if(compareAddreses(startIP.val(),endIP.val())){
            startLbl.css("color", "#0f0");
            bCastLbl.css("color", "#0f0");
            getMask(startIP.val(), endIP.val());
          }else{
            startLbl.css("color", "#f00");
            alert("Starting IP is higher than Broadcast: Fix this to continue.");
          }
        }else{
          bCastLbl.css("color", "#f00");
          alert("end ip not valid");
        }
      }else{
        startLbl.css("color", "#f00");
        alert("start ip not valid");
      }
    }else{
      startLbl.css("color", "#f00");
      alert("Fill in start ip field with a valid ip");
    }
  });
});