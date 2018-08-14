/* Generates random verse */
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            document.getElementById('verseDisplay').innerHTML = request.responseText;
            console.log(request.responseText);
        } else if (!isValid(this.response) && this.status == 0) {
            document.body.className = 'error offline';
            console.log("The computer appears to be offline.");
        } else {
            document.body.className = 'error';
        }
    }
};

function newVerse() {
  //request.open("GET", 'http://labs.bible.org/api/?passage=random', true);
  //request.send(null);
  $.get(
    "https://cors.io/?http://labs.bible.org/api/?passage=random",
    function(data) {
       document.getElementById('verseDisplay').innerHTML = data;
    }
);
}
