//https://codepen.io/Bjornros/pen/VPzQzB

//https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './Images/imageA.png';

imgArray[1] = new Image();
imgArray[1].src = './Images/imageB.png';

imgArray[2] = new Image();
imgArray[2].src = './Images/imageC.png';

imgArray[3] = new Image();
imgArray[3].src = './Images/imageD.png';

imgArray[4] = new Image();
imgArray[4].src = './Images/imageE.png';

imgArray[5] = new Image();
imgArray[5].src = './Images/imageF.png';

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

