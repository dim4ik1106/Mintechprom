$(document).ready(function () {

    let pic1 = $('#teaserimg01');
    let pic2 = $('#teaserimg02');
    let pic3 = $('#teaserimg03');
    let picArr = [pic1, pic2, pic3];


    let i = 0;
    function changePicInit () {

        for (let k = 0; k < picArr.length; k++) {
            if (i != k) {
                $(picArr[k]).fadeOut(2500);
                console.log(picArr[k]);
            } else {
                $(picArr[k]).fadeIn(2500);
                console.log('noup');
                console.log(picArr[k]);
            }
        }
        console.log(i);

        if (i == 2) {
            i = 0;
        } else {
            i++;
        }
        setTimeout(changePicInit, 4000);
    }

    changePicInit();












    // var ino;
    // var stw;
    // var sth;
    // var ytit;
    // var oytit;
    // var ottit;
    // var at;
    // function initTeaser() {
    //     var iw = $('#teaserimg0' + ino).width();
    //     var ih = $('#teaserimg0' + ino).height();
    //     var aw = iw - stw;
    //     var ah = ih - sth;
    //     $('<span id="tit">' + $('.teaserimg0' + ino).html() + '</span>').appendTo('#startteaser').css({
    //         'top': ytit + 'px'
    //     }).fadeIn('fast').animate({
    //         'top': '+=' + oytit + 'px'
    //     }, (at - ottit)).fadeOut('slow');
    //     $('#teaserimg0' + ino).animate({
    //         'left': '-=' + aw + 'px',
    //         'top': '-=' + ah + 'px'
    //     }, at, function () {
    //         nextImage();
    //     });
    // }

    // function nextImage() {
    //     ino++;
    //     if (ino == (il + 1)) {
    //         ino = 1;
    //     }
    //     var iw = $('#teaserimg0' + ino).width();
    //     var ih = $('#teaserimg0' + ino).height();
    //     $('#teaserimg0' + ino).css({
    //         'left': '0px',
    //         'top': '0px'
    //     });
    //     var aw = iw - stw;
    //     var ah = ih - sth;
    //     $('#tit').html($('.teaserimg0' + ino).html()).css({
    //         'top': ytit + 'px'
    //     }).fadeIn('fast').animate({
    //         'top': '+=' + oytit + 'px'
    //     }, (at - ottit)).fadeOut('slow');
    //     $('#teaserimg0' + ino).fadeIn(500).animate({
    //         'left': '-=' + aw + 'px',
    //         'top': '-=' + ah + 'px'
    //     }, at, function () {
    //         if (ino > 1) {
    //             $(this).delay(600).fadeOut();
    //         }
    //         nextImage();
    //     });
    // }

    // initTeaser();



});