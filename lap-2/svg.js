
var line = document.getElementById("myLine");

var circle = document.getElementById("myCircle");

var rect = document.getElementById("myRect");

function displayLine() {


    if (line.style.display == "none") {

        line.style.display = "block";
        circle.style.display = "none";
        rect.style.display = "none";
        
    } else {

        line.style.display = "none";
    }
}

function displayCircle() {


    if (circle.style.display == "none") {

        circle.style.display = "block";
        line.style.display = "none";
        rect.style.display = "none";

    } else {

        circle.style.display = "none";
    }
}

function displayRect() {
    

    if (rect.style.display == "none") {

        rect.style.display = "block";
        line.style.display = "none";
        circle.style.display = "none";

    } else {

        rect.style.display = "none";
    }
}