$(function ($) {

    //Banner slider
    $('.cover').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });


    //Menu fixed
    var navoff = $('.menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $('.menu').addClass('fixedmenu');
        } else {
            $('.menu').removeClass('fixedmenu');
        }
    });

    //Features

    $('.features3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.features2'
    });
    $('.features2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.features3',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
    });

    //screenshots
    $('.all_ss').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    
    //video
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    //feedback slider
    $('.useropinion').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.userphoto'
    });
    $('.userphoto').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.useropinion',
        arrows: false,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
    });

    //button
    $(".bto").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 80) {
            $(".bto").fadeIn();
        } else {
            $(".bto").fadeOut();
        }
    });

});