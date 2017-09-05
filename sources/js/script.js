$(document).ready(function () {

    $('.fancybox').fancybox();


    $(".phone").mask("+7 (999) 999-99-99");

    $('input').change(function () {
        $('input').removeClass('incorrect correct');
    });

    //Меню-гамбургер
    $('.menu-hamburger').click(function () {
        openHabmenu();
        return false
    });

    function openHabmenu() {
        $('.habmenu').slideToggle();
        $('.line1').toggleClass("block1-click");
        $('.line2').toggleClass("block2-click");
        $('.line3').toggleClass("block3-click");
        $('body').toggleClass('no-scroll');
        $('.menu').slideToggle(300);
    };

    // плавный скролинг по ссылкам
    $('.scroll-to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top - 100}, 500);
        }
        return false;
    });

    $('.tabs-block .tab-one').on('click', function () {
       $('.tab-one').toggleClass('tab-active');
       $('.tab-two').removeClass('tab-active');
       $('.tab-tree').removeClass('tab-active');
       $('.pop-one').fadeToggle(300);
       $('.pop-two').fadeOut(300);
       $('.pop-tree').fadeOut(300);
       $('.img-one').fadeToggle(300);
       $('.img-two').fadeOut(300);
       $('.img-tree').fadeOut(300);
    });
    $('.tabs-block .tab-two').on('click', function () {
        $('.tab-two').toggleClass('tab-active');
        $('.tab-one').removeClass('tab-active');
        $('.tab-tree').removeClass('tab-active');
        $('.pop-two').fadeToggle(300);
        $('.pop-one').removeClass('pop-active');
        $('.pop-one').fadeOut(300);
        $('.pop-tree').fadeOut(300);
        $('.img-one').fadeOut(300);
        $('.img-two').fadeToggle(300);
        $('.img-tree').fadeOut(300);
    });
    $('.tabs-block .tab-tree').on('click', function () {
        $('.tab-tree').toggleClass('tab-active');
        $('.tab-one').removeClass('tab-active');
        $('.tab-two').removeClass('tab-active');
        $('.pop-tree').fadeToggle(300);
        $('.pop-two').fadeOut(300);
        $('.pop-one').removeClass('pop-active');
        $('.pop-one').fadeOut(300);
        $('.img-one').fadeOut(300);
        $('.img-two').fadeOut(300);
        $('.img-tree').fadeToggle(300);
    });

    $('.sk-block .marker-one').on('click', function () {
        $('.tab-one').toggleClass('tab-active');
        $('.tab-two').removeClass('tab-active');
        $('.tab-tree').removeClass('tab-active');
        $('.pop-one').fadeToggle(300);
        $('.pop-two').fadeOut(300);
        $('.pop-tree').fadeOut(300);
        $('.img-one').fadeToggle(300);
        $('.img-two').fadeOut(300);
        $('.img-tree').fadeOut(300);
    });
    $('.sk-block .marker-two').on('click', function () {
        $('.tab-two').toggleClass('tab-active');
        $('.tab-one').removeClass('tab-active');
        $('.tab-tree').removeClass('tab-active');
        $('.pop-two').fadeToggle(300);
        $('.pop-one').fadeOut(300);
        $('.pop-tree').fadeOut(300);
        $('.pop-one').removeClass('pop-active');
        $('.img-one').fadeOut(300);
        $('.img-two').fadeToggle(300);
        $('.img-tree').fadeOut(300);

    });
    $('.sk-block .marker-tree').on('click', function () {
        $('.tab-tree').toggleClass('tab-active');
        $('.tab-one').removeClass('tab-active');
        $('.tab-two').removeClass('tab-active');
        $('.pop-tree').fadeToggle(300);
        $('.pop-two').fadeOut(300);
        $('.pop-one').fadeOut(300);
        $('.pop-one').removeClass('pop-active');
        $('.img-one').fadeOut(300);
        $('.img-two').fadeOut(300);
        $('.img-tree').fadeToggle(300);

    });


    $('.slider-tabs .slider1').on('click', function () {
        $('.slider1').addClass('tab-active');
        $('.slider2').removeClass('tab-active');
        $('.slider-1').fadeIn(300);
        $('.slider-2').fadeOut(300);
        $('.slick-prev1').fadeIn(300);
        $('.slick-next1').fadeIn(300);
        $('.slick-prev2').fadeOut(300);
        $('.slick-next2').fadeOut(300);
    });

    $('.slider-tabs .slider2').on('click', function () {
        $('.slider2').addClass('tab-active');
        $('.slider1').removeClass('tab-active');
        $('.slider-2').fadeIn(300);
        $('.slider-1').fadeOut(300);
        $('.slick-prev2').fadeIn(300);
        $('.slick-next2').fadeIn(300);
        $('.slick-prev1').fadeOut(300);
        $('.slick-next1').fadeOut(300);
    });

    $('.tab-dinamic .svg1').on('click', function () {
        $('.svg1').toggleClass('tab-active');
        $('.svg2').removeClass('tab-active');
        $('.svg3').removeClass('tab-active');
        $('.svg-1').addClass('svg-active');
        $('.svg-2').removeClass("svg-active");
        $('.svg-3').removeClass("svg-active");
    });
    $('.tab-dinamic .svg2').on('click', function () {
        $('.svg2').toggleClass('tab-active');
        $('.svg1').removeClass('tab-active');
        $('.svg3').removeClass('tab-active');
        $('.svg-2').addClass('svg-active');
        $('.svg-1').removeClass("svg-active");
        $('.svg-3').removeClass("svg-active");
    });
    $('.tab-dinamic .svg3').on('click', function () {
        $('.svg3').toggleClass('tab-active');
        $('.svg2').removeClass('tab-active');
        $('.svg1').removeClass('tab-active');
        $('.svg-3').addClass('svg-active');
        $('.svg-2').removeClass("svg-active");
        $('.svg-1').removeClass("svg-active");
    });

    $('.pertners-slider .slick-slider').slick({
        dots: true,
        dotsClass: "dots-block9",
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".info .info-block").hover(function () {
        $(this).parent().find(".info-popup").fadeToggle(300);
    });

    $('.block5-content .slick-slider.slider-1').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: ".slick-prev1",
        nextArrow: ".slick-next1",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    dots: false,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    infinite: true,
                    arrows: true,

                }
            }
        ]

    })
    $('.block5-content .slick-slider.slider-2').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: ".slick-prev2",
        nextArrow: ".slick-next2",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    dots: false,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    infinite: true,
                    arrows: true,

                }
            }
        ]

    })



    // var _download = false;
    // var _target = '';
    // $('form').ajaxForm({
    //     beforeSubmit: function (d, $e) {
    //         $('input').removeClass('incorrect');
    //
    //         var emailReg = new RegExp("^[-0-9a-z\._]+\@[-0-9a-z\.]+\.[a-z]{2,4}$", "i"),
    //             phoneReg = '';
    //
    //         for (var j in d) {
    //             /*телефон*/
    //             if (d[j].name == 'phone' && d[j].value == '') {
    //                 $e.find('input[name="phone"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             if (d[j].name == 'phone' && d[j].value != '') {
    //                 for (var i = 0; i <= 9; i++) {
    //                     phoneReg = new RegExp(i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString());
    //
    //                     if (phoneReg.test(d[j].value)) {
    //                         $e.find('input[name="phone"]').addClass('incorrect');
    //                         return false;
    //                     }
    //                 }
    //             }
    //
    //             $e.find('input[name="phone"]').addClass('correct');
    //
    //             /*имя*/
    //             if (d[j].name == 'name' && d[j].value == '') {
    //                 $e.find('input[name="name"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             $e.find('input[name="name"]').addClass('correct');
    //
    //             /*email*/
    //             if (d[j].name == 'email' && d[j].value == '') {
    //                 $e.find('input[name="email"]').addClass('incorrect');
    //                 return false;
    //             }
    //
    //             if (d[j].name == 'email' && d[j].value != "") {
    //                 if (!emailReg.test(d[j].value)) {
    //                     $e.find('input[name="email"]').addClass('incorrect');
    //                     return false;
    //                 }
    //             }
    //
    //             $e.find('input[name="email"]').addClass('correct');
    //
    //             /*цель*/
    //             if (d[j].name == 'target') {
    //                 _target = d[j].value;
    //             }
    //
    //             if (d[j].name == 'download') {
    //                 _download = true;
    //             }
    //         }
    //
    //         return true;
    //     },
    //
    //     success: function (data) {
    //         if (_download == true) {
    //
    //             var link = document.createElement('a');
    //             link.setAttribute('href', '/price.pdf');
    //             link.setAttribute('download', 'download');
    //             onload = link.click();
    //
    //             _download = false;
    //         }
    //         console.info(data);
    //         $('input').removeClass('incorrect correct');
    //         $.fancybox($('.thnx'));
    //     }
    // });

});
