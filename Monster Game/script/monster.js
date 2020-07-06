var pic1Click = 0, pic2Click = 0, pic3Click  = 0, pic4Click=0;
$("#pic1").click(function () {
    if( pic1Click < 9){
        $("#pic1").animate({marginLeft:"-=367px"}, 500);
        pic1Click += 1;
    }
    else{
        $("#pic1").animate({marginLeft:"0px"}, 500);
        pic1Click = 0;
    }

});

$("#pic2").click(function () {
    if( pic2Click < 9){
        $("#pic2").animate({marginLeft:"-=367px"}, 500);
        pic2Click += 1;
    }
    else{
        $("#pic2").animate({marginLeft:"0px"}, 500);
        pic2Click = 0;
    }
});

$("#pic3").click(function () {
    if( pic3Click < 9){
        $("#pic3").animate({marginLeft:"-=367px"}, 500);
        pic3Click += 1;
    }
    else{
        $("#pic3").animate({marginLeft:"0px"}, 500);
        pic3Click = 0;
    }
});
$("#pic4").click(function () {
    if( pic4Click < 9){
        $("#pic4").animate({marginLeft:"-=367px"}, 500);
        pic4Click += 1;
    }
    else{
        $("#pic4").animate({marginLeft:"0px"}, 500);
        pic4Click = 0;
    }

});
