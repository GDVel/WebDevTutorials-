function inputHandler(e) {
  var chr = String.fromCharCode(e.charCode);
  $("p").append(chr);
}

function spanHandler(e){
  var chrcde = e.target.innerHTML.charCodeAt(0);
  $("input").trigger({'type':'keypress','charCode':chrcde});
}

$(document).ready(function(){
  $("input").keypress(function(e) {inputHandler(e)});
  $("span").click(function(e) {spanHandler(e)});
});
