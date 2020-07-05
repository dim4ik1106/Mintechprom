$(document).ready(function() {
    if (c) {} else {
        initTeaser();
    }
    function initTeaser() {
        var iw = $('#teaserimg0' + ino).width();
        var ih = $('#teaserimg0' + ino).height();
        var aw = iw - stw;
        var ah = ih - sth;
        $('<span id="tit">' + $('.teaserimg0' + ino).html() + '</span>').appendTo('#startteaser').css({
            'top': ytit + 'px'
        }).fadeIn('fast').animate({
            'top': '+=' + oytit + 'px'
        }, (at - ottit)).fadeOut('slow');
        $('#teaserimg0' + ino).animate({
            'left': '-=' + aw + 'px',
            'top': '-=' + ah + 'px'
        }, at, function() {
            nextImage();
        });
    }
    function nextImage() {
        ino++;
        if (ino == (il + 1)) {
            ino = 1;
        }
        var iw = $('#teaserimg0' + ino).width();
        var ih = $('#teaserimg0' + ino).height();
        $('#teaserimg0' + ino).css({
            'left': '0px',
            'top': '0px'
        });
        var aw = iw - stw;
        var ah = ih - sth;
        $('#tit').html($('.teaserimg0' + ino).html()).css({
            'top': ytit + 'px'
        }).fadeIn('fast').animate({
            'top': '+=' + oytit + 'px'
        }, (at - ottit)).fadeOut('slow');
        $('#teaserimg0' + ino).fadeIn(500).animate({
            'left': '-=' + aw + 'px',
            'top': '-=' + ah + 'px'
        }, at, function() {
            if (ino > 1) {
                $(this).delay(600).fadeOut();
            }
            nextImage();
        });
    }
    fontSize("#ftsizer", "#inner", 11, 11, 20);
});
$(function() {
    if (c) {} else {}
    $('.print a').click(function() {
        window.print();
        return false;
    });
});