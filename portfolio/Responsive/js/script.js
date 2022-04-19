$(function () {
    var st;
    $('.hamMenu').click(function (e) {
        st = $(window).width();
        e.preventDefault();
        if (st > 800 && st <= 1440) {
            $('aside').stop().animate({
                'left': 0
            });
        } else if (st <= 800) {
            $('aside').stop().animate({
                'left': 0
            });
        }
    });
    $('.iconX').click(function (e) {
        st = $(window).width();
        e.preventDefault();
        if (st > 800 && st <= 1440) {
            $('aside').stop().animate({
                'left': '-150px'
            });
        } else if (st <= 800) {
            $('aside').stop().animate({
                'left': '-100%'
            });
        }
    });
    if ($(window).width() <= 415) {
        var n = 0;
        var timer = setInterval(fade, 3000);
        
        $('.box2>div').eq(2).hide();
        $('.box2>div').eq(3).hide();
        $('.box2>div').eq(1).show();
        function fade() {
            $('.box2>div').eq((n%3) + 1).stop().fadeOut();
            n++;
            $('.box2>div').eq((n%3) + 1).stop().fadeIn();
        }
    }
})