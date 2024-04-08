let countdowndate=new Date("april 16,2024").getTime();
var x = setInterval(function(){
let now = new Date().getTime();
var distance=countdowndate-now;

var days=Math.floor(distance /1000 / 60 / 60 / 24);
var hours=Math.floor(distance / 1000 / 60 / 60) % 24;
var minutes=Math.floor(distance / 1000/ 60 ) % 60 ;
var seconds=Math.floor(distance / 1000) % 60;

document.getElementById("day").innerHTML=days;
document.getElementById("hour").innerHTML=Math.round(hours);
document.getElementById("min").innerHTML=Math.round (minutes);
document.getElementById("sec").innerHTML= seconds;
},1000);










