
function mySubmit(){
var val1 = document.frmMain.sct1.value;
var val2 = document.frmMain.sct2.value;
var myURL;
switch(val1+val2){
case "Aa":
myURL = "index2.html"
break;
case "Ab":
myURL = "http://www.google.co.jp/"
break;
case "Ba":
myURL = "http://www.infoseek.co.jp/"
break;
case "Bb":
myURL = "http://www.excite.co.jp/"
break;
}
location.href = myURL;
return 0;
}

