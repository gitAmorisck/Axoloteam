if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
{}
else {
var a = document.getElementById("wrapper");
a.style.fontSize = "25px";
var mnl = document.getElementById("upline");
mnl.style.height = "39px";
var knk = document.getElementById("jmk");
knk.style.fontSize = "17px";
knk.style.borderRadius = "5px";
}
