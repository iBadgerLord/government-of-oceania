// On button click archives appear
function showDiv(targetDiv) {
    targetDiv.style.display = "block";
}

// On button click signs up to event
function signUp(targetDiv) {
    document.getElementById(targetDiv).innerHTML = "yes";
    document.getElementById(targetDiv).style.color = "#00dd00";
}

// On button tries to download fake file -- fails
function failedDownload() {
    alert("Download failed");
}