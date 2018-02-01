import '../scss/styles.scss';

let insideCarView = document.querySelector('.fullScreenPart__view');
let bigCircle = document.querySelector('.bigCircle');
let middleCircle = document.querySelector('.middleCircle');

var moveGesture = 50;
var viewHeight = moveGesture / insideCarView.offsetHeight;
var viewWidth = moveGesture / insideCarView.offsetWidth;

insideCarView.addEventListener("mousemove", function(event) {
    moveScreen(event);
});


function moveScreen(event) {

    var pageX = event.pageX - insideCarView.offsetWidth / 2;
    var pageY = event.pageY - insideCarView.offsetHeight / 2;

    var newvalueX = viewWidth * pageX * -1 - 25;
    var newvalueY = viewHeight * pageY * -1 - 50;

    insideCarView.style.backgroundPosition = newvalueX + "px " + newvalueY + "px";
}

