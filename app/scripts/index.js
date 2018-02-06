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

var percent = 0;
var test = document.querySelectorAll('.progress-circle .value-bar');

var circleInterval = setInterval(progressCircle, 20);

function progressCircle () {
    for (var j = 0; j < test.length; j++) {
        test[j].style.transform = 'rotate('+percent+'deg)';
        percent+=2;
        if (percent > 280) {
            clearInterval(circleInterval);
        } else if (percent > 180) {
            var progress = document.querySelectorAll('.progress-circle');
            for ( let i=0; i < progress.length ; i++ ) {
                progress[i].classList.add('over50');
            }
        }
    }
}

var charge = document.querySelector('.charge');
var chargeValue = 0;
var chargeCounter = setInterval(chargeProgress, 8);
function chargeProgress () {
    if (chargeValue >= 270) {
        clearInterval(chargeProgress);
    } else {
        chargeValue+=2;
        charge.innerHTML = chargeValue;
    }
}

var vision = document.querySelector('.vision');
var visionValue = 0;
var visionCounter = setInterval(visionProgress, 5);
function visionProgress () {
    if (visionValue >= 2040) {
        clearInterval(visionProgress);
    } else {
        visionValue+=10;
        vision.innerHTML = visionValue;
    }
}

var km = document.querySelector('.km');
var kmValue = 0;
var kmCounter = setInterval(kmProgress, 10);
function kmProgress () {
    if (kmValue >= 500) {
        clearInterval(kmProgress);
    } else {
        kmValue+=5;
        km.innerHTML = kmValue;
    }
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
