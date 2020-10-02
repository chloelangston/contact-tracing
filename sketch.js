
// Scrolling functionality
function elementInViewport(el) {
    // console.log(document.scrollingElement.scrollTop)
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

function checkElementsInView() {
    var directions = document.getElementById("directions");
    var element1 = document.getElementById("text-1");
    var element2 = document.getElementById("text-2");
    var element3 = document.getElementById("text-3");
    var element4 = document.getElementById("text-4");
    var elementEnd = document.getElementById("text-end");

    if (elementInViewport(directions) || elementInViewport(element1)) {
        document.getElementById("graphic-1").classList.remove("img-fade");
        document.getElementById("graphic-2").classList.add("img-fade");
    }

    else if (elementInViewport(element2)) {
        document.getElementById("graphic-2").classList.remove("img-fade");
        document.getElementById("graphic-1").classList.add("img-fade");
        document.getElementById("graphic-3").classList.add("img-fade");
        document.getElementById("graphic-4").classList.add("img-fade");
    }

    else if (elementInViewport(element3)) {
        document.getElementById("graphic-3").classList.remove("img-fade");
        document.getElementById("graphic-1").classList.add("img-fade");
        document.getElementById("graphic-2").classList.add("img-fade");
        document.getElementById("graphic-4").classList.add("img-fade");
    }

    else if (elementInViewport(element4)) {
        document.getElementById("graphic-4").classList.remove("img-fade");
        document.getElementById("graphic-1").classList.add("img-fade");
        document.getElementById("graphic-2").classList.add("img-fade");
        document.getElementById("graphic-3").classList.add("img-fade");
    }

    else if (elementInViewport(elementEnd)) {
        document.getElementById("graphic-1").classList.add("img-fade");
        document.getElementById("graphic-2").classList.add("img-fade");
        document.getElementById("graphic-3").classList.add("img-fade");
        document.getElementById("graphic-4").classList.add("img-fade");
    }

    else {
        document.getElementById("graphic-1").classList.add("img-fade");
        document.getElementById("graphic-2").classList.add("img-fade");
        document.getElementById("graphic-3").classList.add("img-fade");
        document.getElementById("graphic-4").classList.add("img-fade");
    }
}




// Choose your own adventure experience

var processElements = document.getElementsByClassName("process");

var myFunction = function(elem) {

    if (elem.classList.contains("process-last")) {
        document.getElementById("restart").classList.remove("hide");
    }

    elem.classList.add("fade");
    elem.classList.add("no-hover");
    elem.parentElement.parentElement.previousElementSibling.classList.add("fade");

    let nextDecisionText = elem.nextElementSibling.getElementsByClassName("decision")[0] ? elem.nextElementSibling.getElementsByClassName("decision")[0] : null;
    let nextDecisionElem = elem.nextElementSibling.getElementsByClassName("decision-element")[0];

    if (nextDecisionText) {
    	nextDecisionText.classList.remove("hide");
    }

    nextDecisionElem.classList.remove("hide");

    elem.nextElementSibling.classList.add("lines-v-u");
    elem.nextElementSibling.children[0].classList.add("lines-v-i");

    elem.parentElement.classList.remove("lines-h");

    // Figure out which option was chosen
    if (elem.getAttribute("data-option") === "a") {
    	elem.parentElement.nextElementSibling.classList.add("hide");
    } else if (elem.getAttribute("data-option") === "b") {
    	elem.parentElement.previousElementSibling.classList.add("hide");
    }

    nextDecisionElem.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
};

for (var i = 0; i < processElements.length; i++) {
    processElements[i].addEventListener('click', function() { myFunction(this) }, false);
}

function refresh() {
	location.reload();
}

function start() {
	document.getElementById("decision-tree-list").classList.remove("hide");
	document.getElementById("start").classList.add("fade");
	document.getElementById("start").classList.add("no-hover");

    document.getElementById("start").nextElementSibling.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}