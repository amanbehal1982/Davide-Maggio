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
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.foto-prev'),
    nextArrow: $('.foto-next'),
    responsive: [{
            breakpoint: 5200,
            settings: {
                slidesToShow: 8
            }
        },
        {
            breakpoint: 4000,
            settings: {
                slidesToShow: 7
            }
        },
        {
            breakpoint: 3400,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 2500,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});


$('.pagelle-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.pagelle-prev'),
    nextArrow: $('.pagelle-next'),
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1
        }
    }]
});


$('.serie-tv-large-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: $('.serie-tv-prev'),
    nextArrow: $('.serie-tv-next'),
    asNavFor: '.serie-small-slider',
    responsive: [{
        breakpoint: 768,
        settings: {
            autoplay: true
        }
    }]
});
$('.serie-small-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.serie-tv-large-slider',
    arrows: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            centerMode: true,
            slidesToShow: 2
        }
    }, {
        breakpoint: 466,
        settings: {
            centerMode: true,
            slidesToShow: 1
        }
    }]
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
    slidesToShow: 15,
    slidesToScroll: 1,
    asNavFor: '.video-main-slider',
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 5200,
            settings: {
                slidesToShow: 13
            }
        },
        {
            breakpoint: 4000,
            settings: {
                slidesToShow: 9
            }
        },
        {
            breakpoint: 3400,
            settings: {
                slidesToShow: 7
            }
        },
        {
            breakpoint: 2500,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerMode: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 511,
            settings: {
                centerMode: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 430,
            settings: {
                centerMode: false,
                slidesToShow: 2
            }
        }
    ]
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
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1440,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 466,
        settings: {
            slidesToShow: 1
        }
    }]
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
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1440,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 466,
        settings: {
            slidesToShow: 1
        }
    }]
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
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1440,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 466,
        settings: {
            slidesToShow: 1
        }
    }]
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
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1440,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 466,
        settings: {
            slidesToShow: 1
        }
    }]
});