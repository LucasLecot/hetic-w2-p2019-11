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

const contentPoint = document.querySelectorAll(".fullScreenPart_feature__point");
const contentAnim = document.querySelectorAll(".feature_content");

for(let i = 0; i < contentPoint.length; i++) {
    contentPoint[i].addEventListener("click", function () {
        let contentAnimIn = document.querySelector(".feature_content.in");
        let contentPointIn = document.querySelector(".fullScreenPart_feature__point.in");
        contentPointIn.classList.remove("in");
        contentAnimIn.classList.remove("in");
        contentAnim[i].classList.add("in");
        contentPoint[i].classList.add("in");
    });
}