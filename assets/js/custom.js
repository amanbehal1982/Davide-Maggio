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


var slideVideo = document.getElementById("slide-video");

function playPause() {
    if (slideVideo.paused)
        slideVideo.play();
    else
        slideVideo.pause();
}

$('#main-menu-button').click(function() {
    $('#main-menu').toggleClass('open-side-menu');
    $('html,body').toggleClass('fixed-body');
    $(this).toggleClass('close-menu-open');
    $('#blank-div').toggleClass('display-blank-div');
})
$('#blank-div').click(function() {
    $('#main-menu').removeClass('open-side-menu');
    $('html,body').removeClass('fixed-body');
    $('#main-menu-button').removeClass('close-menu-open');
    $('#blank-div').removeClass('display-blank-div');
})

$('.foto-slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    prevArrow: $('.foto-prev'),
    nextArrow: $('.foto-next')
});


$('.pagelle-l-slider01').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    asNavFor: '.pagelle-s-slider01'
});
$('.pagelle-s-slider01').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.pagelle-prev'),
    nextArrow: $('.pagelle-next'),
    asNavFor: '.pagelle-l-slider01',
    focusOnSelect: true,
    vertical: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 361,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});

$('.pagelle-l-slider02').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    asNavFor: '.pagelle-s-slider02'
});
$('.pagelle-s-slider02').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.pagelle-prev2'),
    nextArrow: $('.pagelle-next2'),
    asNavFor: '.pagelle-l-slider02',
    focusOnSelect: true,
    vertical: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 361,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});

$('.boom-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.boom-prev'),
    nextArrow: $('.boom-next')
});


$('.serie-tv-large-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.serie-tv-prev'),
    nextArrow: $('.serie-tv-next'),
    asNavFor: '.serie-small-slider'
});
$('.serie-small-slider').slick({
    slidesToScroll: 1,
    asNavFor: '.serie-tv-large-slider',
    arrows: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true
});


$('.video-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.video-prev'),
    nextArrow: $('.video-next'),
    asNavFor: '.video-small-slider'
});
$('.video-small-slider').slick({
    slidesToScroll: 1,
    asNavFor: '.video-main-slider',
    centerMode: true,
    variableWidth: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true
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
    slidesToScroll: 1,
    asNavFor: '.link1-for1',
    centerMode: true,
    variableWidth: true,
    infinite: true,
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
    slidesToScroll: 1,
    asNavFor: '.link2-for2',
    centerMode: true,
    variableWidth: true,
    infinite: true,
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
    slidesToScroll: 1,
    asNavFor: '.link3-for3',
    centerMode: true,
    variableWidth: true,
    infinite: true,
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
    slidesToScroll: 1,
    asNavFor: '.link4-for4',
    centerMode: true,
    variableWidth: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true
});