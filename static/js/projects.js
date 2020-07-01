$(document).ready(function () {
    $('.contents__item').click(function (e) {
        e.preventDefault();
        let itemPos = $($(this).attr('href')).offset().top;
        console.log(itemPos);
        $("html, body").animate({
            scrollTop: itemPos
        }, 300);
    });
});