$(document).ready(function () {


    $('.photos-with-description__column').click(function (e) {
        e.preventDefault();
        $('.photos-with-description__column').removeClass('active');
        $(this).addClass('active');
        $('.content-side.changeable-gray-bg-text').removeClass('active');
        $('.content-side.changeable-gray-bg-text.for-column-' + $(this).attr('data-column')).addClass('active');
    });





});