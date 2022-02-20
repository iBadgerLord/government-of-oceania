$(document).ready(function(){
    $('#title').focus();
      $('#text').autosize();
  });
  

// On button click archives appear
function showDiv(targetDiv) {
    targetDiv.style.display = "block";
}

function signUp(targetDiv) {
    document.getElementById(targetDiv).innerHTML = "yes";
    document.getElementById(targetDiv).style.color = "#00dd00";
}