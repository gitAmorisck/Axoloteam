function movhtml() {
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var a = document.getElementById("jmk");
var b = a.classList.item(0);
if (b == "0") {
var a = document.getElementById("jmk");
a.innerHTML = "<h2>←</h2>";
var e = document.getElementsByTagName("body")[0];
var f = document.getElementById("menu");
e.style.paddingLeft = "30%";
f.style.left = "0%";
a.className = "1";}
else {
var a = document.getElementById("jmk");
a.innerHTML = "<h2>→</h2>";
var e = document.getElementsByTagName("body")[0]; 
var f = document.getElementById("menu");
e.style.paddingLeft = "0%";
f.style.left = "-30%";
a.className = "0";}}
else {
var a = document.getElementById("jmk");
var b = a.classList.item(0);
var kp1 = document.getElementById("01");
var kp2 = document.getElementById("02");
var kp3 = document.getElementById("03");
var kp4 = document.getElementById("04");
var kp5 = document.getElementById("05");
var kp6 = document.getElementById("06");
var kp7 = document.getElementById("07");
var kp8 = document.getElementById("08");
var kp9 = document.getElementById("09");
var kp10 = document.getElementById("reg");
var sz = "68px"
kp1.style.width = sz;
kp2.style.width = sz;
kp3.style.width = sz;
kp4.style.width = sz;
kp5.style.width = sz;
kp6.style.width = sz;
kp7.style.width = sz;
kp8.style.width = sz;
kp9.style.width = sz;
kp10.style.paddingLeft = "99px";
if (b == "0") {
var a = document.getElementById("jmk");
a.innerHTML = "<h2>←</h2>";
var e = document.getElementsByTagName("body")[0];
var f = document.getElementById("menu");
e.style.paddingLeft = "30%";
f.style.left = "0%";
a.className = "1";}
else {
var a = document.getElementById("jmk");
a.innerHTML = "<h2>→</h2>";
var e = document.getElementsByTagName("body")[0]; 
var f = document.getElementById("menu");
e.style.paddingLeft = "0%";
f.style.left = "-30%";
a.className = "0";};};}
