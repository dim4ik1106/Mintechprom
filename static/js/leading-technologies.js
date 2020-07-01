$(document).ready(function () {
    $('.contents__item').click(function (e) {
        e.preventDefault();
        $('.contents__item').removeClass('active');
        $(this).addClass('active');
        $('.content-side.leading-main').hide();
        $('.content-side.leading-technology').show();
        $('.content-side.leading-technology .technology-block').hide();
        $('.content-side.leading-technology .technology-block[data-technology="' + $(this).attr('data-linkToTech') + '"]').show();
    });
});