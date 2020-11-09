$(document).on('click', '.introduce-content__block', function () {
    let id = $(this).attr('id');
    $('.tab-pane.active .introduce-content__block, .tab-pane.active .introduce-image__content img').removeClass('active')
    $(this).addClass('active')

    $('.tab-pane.active .introduce-image__content img[data-block="' + id + '"]').addClass('active')
    let idTag = $('.tab-pane.active').find('.introduce-canvas').children().attr('id');
    draw(idTag)
});

$(document).on('click', '#introduce .nav-item.nav-link', function () {
    let a = $(this);
    setTimeout(function() {
        let parentId = a.attr('href');
        let idTag = $(parentId).find('.introduce-canvas').children().attr('id');
        draw(idTag)

    }, 200);

});

$(document).ready(function () {
    $('.client_company').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow_1 btn-prev"><img src="image/arrow-left.svg" class="slick-prev" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow_1 btn-next"><img src=" image/arrow-right.svg" class="slick-next" alt=""></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    })

    $('.mobile-content').slick({
        slidesToShow: 1.4,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 4000,
                settings: 'unslick'
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.4,
                }
            }
        ]
    })

    $('.introduce-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        loop: true,
        arrows: false,
        fade: true,
        asNavFor: '.introduce-image__content',
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick'
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.introduce-image__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        loop: true,
        fade: true,
        asNavFor: '.introduce-content',
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow_2 btn-prev"><i class="fa fa-arrow-right slick-prev"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow_2 btn-next"><i class="fa fa-arrow-left slick-next"></i></button>',

        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick'
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
})

function draw(id) {

    let tabPane = $('#'+id).closest('.tab-pane'),
        canvasTop = tabPane.find('.introduce-canvas').offset().top,
        canvasLeft = tabPane.find('.introduce-canvas').offset().left,
        yS = tabPane.find('.introduce-content__block.active .start-point').offset().top - canvasTop + 9,
        xS = tabPane.find('.introduce-content__block.active .start-point').offset().left - canvasLeft + 9,
        yE = tabPane.find('.end-point').offset().top - canvasTop + 9,
        xE = tabPane.find('.end-point').offset().left - canvasLeft + 9,
        c = document.getElementById(id),
        ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.moveTo(xS, yS);
    ctx.bezierCurveTo(xE, yS, xS, yE, xE, yE);
    ctx.stroke();
}
if($('#introduce-canvas1').length > 0){
    draw('introduce-canvas1')
}

$(document).on('click', '.app_wrap a', function () {
    $(this).find('.custom_tooltip').addClass('d-block');
})


$(document).on('click', '.app_wrap .fa-times', function (e) {
    $(this).parent().removeClass('d-block');
    e.stopPropagation();
})

$(document).on('click', '.active-menu', function (e) {
    $(".menu-mobile").animate({width:'toggle'},350);
})
$(document).on('click', '.close-menu', function (e) {
    $(".menu-mobile").animate({width:'toggle'},350);
})

