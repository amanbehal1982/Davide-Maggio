window.onscroll = function() { stickyMenu() };
var mainNav = document.getElementById("main-nav");
var fixedMenu = mainNav.offsetTop;

function stickyMenu() {
    if (window.pageYOffset > fixedMenu) {
        mainNav.classList.add("fixedMenu");
    } else {
        mainNav.classList.remove("fixedMenu");
    }
}


$('.foto-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.foto-prev'),
    nextArrow: $('.foto-next')
});


$('#specialeTab a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    $('.link1-large-slider').slick('setPosition');
    $('.link1-small-slider').slick('setPosition');
})

$('.link1-for1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.prev01'),
    nextArrow: $('.next01'),
    asNavFor: '.link1-nav1'
});
$('.link1-nav1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.link1-for1',
    centerMode: true,
    arrows: false,
    focusOnSelect: true
});

$('.link2-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.prev02'),
    nextArrow: $('.next02'),
    asNavFor: '.link2-nav2'
});
$('.link2-nav2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.link2-for2',
    centerMode: true,
    arrows: false,
    focusOnSelect: true
});

$('.link3-for3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.prev03'),
    nextArrow: $('.next03'),
    asNavFor: '.link3-nav3'
});
$('.link3-nav3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.link3-for3',
    centerMode: true,
    arrows: false,
    focusOnSelect: true
});

$('.link4-for4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.prev04'),
    nextArrow: $('.next04'),
    asNavFor: '.link4-nav4'
});
$('.link4-nav4').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.link4-for4',
    centerMode: true,
    arrows: false,
    focusOnSelect: true
});