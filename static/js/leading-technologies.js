function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

function clickEmul(btn) {
    $(btn).click();
}

$(document).ready(function () {
    if ($_GET('opentech')) {
        let i = $_GET('opentech');
        let btn = $('.contents__item[data-linkToTech="' + i + '"]');
        setTimeout(clickEmul, 20, btn);
    }

    $('.contents__item, .contents__title.audit-page').click(function (e) {
        e.preventDefault();
        $('.contents__item').removeClass('active');
        $(this).addClass('active');
        $('.content-side.leading-main').hide();
        $('.content-side.leading-technology').show();
        $('.content-side.leading-technology .technology-block').hide();
        $('.content-side.leading-technology .technology-block[data-technology="' + $(this).attr('data-linkToTech') + '"]').show();
        let itemPos = $('.content-side.leading-technology .technology-block[data-technology="' + $(this).attr('data-linkToTech') + '"]').offset().top;
        $("html, body").animate({
            scrollTop: itemPos - 100
        }, 300);
    });
});