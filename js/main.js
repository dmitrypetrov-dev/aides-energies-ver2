$(document).ready(function () {
    //form submit
    $(".form").submit(function(event) {
        event.preventDefault();
        let post_url = $(this).attr("action");
        let form_data = $(this).serialize();
        $.post(post_url, form_data, function() {
            alert('Thanks you!');
        });
    });

    //smooth scroll
    $(".anchor-link").click(function (e) {
        e.preventDefault();
        let $targetEl = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $($targetEl).offset().top
        }, 'slow');
    });

    // faq
    $(".faq__item").click(function () {
        $(this).toggleClass('active');
        $(this).find(".faq__answer").slideToggle();
    });

    // mobile slider
    $(document).ready(function () {
        $(".slider").slick({
            arrows: false,
            dots: false,
            infinite: false,
            fade: false,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 1000,
            centerMode: true,
            centerPadding: '1rem',
            slidesToShow: 1,
        });
    });

});

// numbers animation

$(function () {

    let target_block = $(".counter-1");
    let blockStatus = true;

    $(window).scroll(function () {
        let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false;
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500,
                easing: "linear",
                step: function (val) {
                    $(".counter-1").html(Math.ceil(val));
                }
            });
        }
    });
});

$(function () {

    let target_block = $(".counter-2");
    let blockStatus = true;

    $(window).scroll(function () {
        let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false;
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500,
                easing: "linear",
                step: function (val) {
                    $(".counter-2").html(Math.ceil(val));
                }
            });
        }
    });
});

$(function () {

    let target_block = $(".counter-3");
    let blockStatus = true;

    $(window).scroll(function () {
        let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false;
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500,
                easing: "linear",
                step: function (val) {
                    $(".counter-3").html(Math.ceil(val));
                }
            });
        }
    });
});
