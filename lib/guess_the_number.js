
var randnum = Math.floor((Math.random() * 10));

var name = prompt("Give me your name!");

var usernum= prompt("Give me a number between 1 and 10");


if(randnum === parseInt(usernum)){alert(name +", you won!");}
  else {alert(name + ", you lost!");}
