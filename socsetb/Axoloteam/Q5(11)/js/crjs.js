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
var hmn = document.getElementById("menu");
hmn.style.width = "300px"
var a = document.getElementById("jmk");
var b = a.classList.item(0);
var kp5 = document.getElementById("05");
var kp6 = document.getElementById("06");
var kp7 = document.getElementById("07");
var kp8 = document.getElementById("08");
var kp9 = document.getElementById("09");
var kp10 = document.getElementById("reg");
var sz = "70px";
kp5.style.width = sz
kp6.style.width = sz;
kp7.style.width = sz;
kp8.style.width = sz;
kp9.style.width = sz;
kp10.style.width = sz;
if (b == "0") {
var a = document.getElementById("jmk");
a.innerHTML = "<h2>←</h2>";
var e = document.getElementsByTagName("body")[0];
var f = document.getElementById("menu");
e.style.paddingLeft = "300px";
f.style.left = "0%";
a.className = "1";}
else {
var a = document.getElementById("jmk");
a.innerHTML = "<h2>→</h2>";
var e = document.getElementsByTagName("body")[0]; 
var f = document.getElementById("menu");
e.style.paddingLeft = "0%";
f.style.left = "-31%";
a.className = "0";};};}
