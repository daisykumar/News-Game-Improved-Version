
document.addEventListener('DOMContentLoaded', function (event) {

    document.getElementById('flip-card-btn-turn-to-back7').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front7').style.visibility = 'visible';

  document.getElementById('flip-card-btn-turn-to-back8').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front8').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back9').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front9').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back10').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front10').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back11').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front11').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back12').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front12').style.visibility = 'visible';

    document.getElementById('flip-card-btn-turn-to-back7').onclick = function () {
        document.getElementById('flip-card7').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front7').onclick = function () {
        document.getElementById('flip-card7').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-back8').onclick = function () {
        document.getElementById('flip-card8').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front8').onclick = function () {
        document.getElementById('flip-card8').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-back9').onclick = function () {
        document.getElementById('flip-card9').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front9').onclick = function () {
        document.getElementById('flip-card9').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-back10').onclick = function () {
        document.getElementById('flip-card10').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front10').onclick = function () {
        document.getElementById('flip-card10').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-back11').onclick = function () {
        document.getElementById('flip-card11').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front11').onclick = function () {
        document.getElementById('flip-card11').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-back12').onclick = function () {
        document.getElementById('flip-card12').classList.toggle('do-flip');
    };

    document.getElementById('flip-card-btn-turn-to-front12').onclick = function () {
        document.getElementById('flip-card12').classList.toggle('do-flip');
    };

});

//https://codepen.io/Bjornros/pen/VPzQzB

//https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './Images/imageB.png';

imgArray[1] = new Image();
imgArray[1].src = './Images/imageA.png';

imgArray[2] = new Image();
imgArray[2].src = './Images/imageC.png';

imgArray[3] = new Image();
imgArray[3].src = './Images/imageD.png';

imgArray[4] = new Image();
imgArray[4].src = './Images/imageF.png';

imgArray[5] = new Image();
imgArray[5].src = './Images/imageE.png';

imgArray[6] = new Image();
imgArray[6].src = './Images/imageG.png';

imgArray[7] = new Image();
imgArray[7].src = './Images/imageH.png';

imgArray[8] = new Image();
imgArray[8].src = './Images/imageI.png';

imgArray[9] = new Image();
imgArray[9].src = './Images/imageJ.png';

var j = 0;

$(document).ready(function () {
    $("#shuffle").click(function () {
        for (var i = 0; i < imgArray.length; i++) {
            j = i + 1;
            var disp = "#image" + j; 
            $(disp).attr("src", imgArray[i].src);
        }

    });
});

