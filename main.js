/*
Made by LEYN & Лён
Discord (Russian only): https://discord.gg/kqRsRCN
*/

//settings
var shizaWords = prompt("Shiza Words", 3);
var maxMins = prompt("Max \"-\" signs", 3);
var shizaCount = prompt("Shiza Count", 10);
console.log("settings successful");

//null check
if(shizaWords==null || shizaCount==null){
  console.log("error");
  alert("Error");
}else{
  console.log("null check successful");
}

//characters counter
var lineL = 4+maxMins+shizaWords*5;
var chars = lineL*shizaCount

//main
var shiza = 0;
var posInLine = 1
var mins = 0
var totalMins = maxMins*1+1
var posStep = 1
while(shizaCount>0){
  document.write("|");
  while(mins<posInLine){
    document.write("-");
	mins++
  }
  mins = 0
  while(shiza<shizaWords){
    document.write("Shiza");
    shiza++
  }
  while(mins<(totalMins-posInLine)){
    document.write("-");
	mins++
  }
  if(posInLine>=maxMins&&posStep==1){posStep=-1};
  if(posInLine<=1&&posStep==-1){posStep=1};
  mins = 0
  shiza = 0;
  posInLine+=posStep
  shizaCount--
  document.write("|");
  document.write("<br>");
}
console.log("end successful")
