$(function () {
    // $('.BG').hide();
    // $('header').hide();
    $('section').hide();
    var n = 0;
    var timer = setInterval(loading, 50);

    function loading() {
        n++;
        $('.progress').html(n + '%');
        if (n > 99) {
            clearInterval(timer);
            $('.progress').fadeOut();
            $('.bicycle').stop().animate({
                'left': '250%'
            }, 1200);
            $('.BGLoad').stop().delay(1000).animate({
                'left': '100%'
            }, 500);
            $('.BG').delay(1800).fadeOut();
            $('section').show();
            $('header').hide();
            $('section').fullpage({
                menu: ['#myMenu', '#introMenu'],
                // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'lightblue', '#ccddff', ],
                sectionsColor: ['#69A5BF', '#6678CC', '#6B9AD6', '#6BD2D6', '#66CCB3', 'brown'],
                anchors: ['box0', 'box1', 'box2', 'box3', 'box4', 'box5'],
                navigation: true,
                navigationPosition: 'right',
                scrollingSpeed: 700,
                loopBottom: true,
                loopTop: true,
                onLeave: function (index, nextIndex, direction) {
                    if(index == 1 && nextIndex == 2) {
                        $('header').fadeIn();
                    } else if (index == 6 && nextIndex == 5) {
                        $('header').fadeIn();
                        $('#FooterContents').removeClass('active');
                        $('.videoDiv').addClass('visible');
                    } else if (nextIndex == 1) {
                        $('header').hide();
                        $('.section').find('div').removeClass('visible');
                        $('#FooterContents').removeClass('active');
                    } else if (nextIndex == 6) {
                        $('header').hide();
                        $('#FooterContents').addClass('active');
                        $('.section').find('div').removeClass('visible');
                    } else {
                        $('header').fadeIn();
                        $('.section').eq(index - 1).find('div').removeClass('visible');
                        $('.section').eq(nextIndex - 1).find('div').addClass('visible');
                    }
                }
            });
        }
    }

    $('.colorPick div').click(function (e) {
        e.stopPropagation();
        var colorIdx = $(this).parent().index();
        if ($('.bikeImg div').eq(colorIdx).hasClass('Picked')) {
            return;
        } else {
            $('.Picked').animate({
                'height': 0
            }, {
                duration: 500,
                start: function () {
                    $(this).removeClass('Picked');
                }
            });
            $('.bikeImg div').eq(colorIdx).animate({
                'height': '100%'
            }, {
                duration: 500,
                start: function () {
                    $(this).addClass('Picked');
                }
            });
        }
    })

    $('.slideBox').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.slideBox img').mouseover(function () {
        $(this).parent().parent().addClass('active');
    }).mouseout(function () {
        $(this).parent().parent().removeClass('active');
    });
    $('.partsBox a').click(function () {
        var partsIdx = ($(this).index() - 2) % 5;
        $('.partsBG').fadeIn();
        $('.partsBG div').eq(partsIdx).delay(500).fadeIn();
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
    });
    $('.partsBG').click(function () {
        $(this).hide();
        $('.partsBG div').hide();
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });
    $('#Others a').click(function () {
        if ($('.playBtn').hasClass('hidden')) {
            $(this).find('video').get(0).pause();
            $(this).next('i').show();
            $('.playBtn').removeClass('hidden');
        } else {
            $(this).find('video').get(0).play();
            $(this).next('i').hide();
            $('.playBtn').addClass('hidden');
        }
    });
    $('.playBtn').click(function () {
        if ($('.playBtn').hasClass('hidden')) {
            $(this).prev('a').find('video').get(0).pause();
            $(this).show();
            $(this).removeClass('hidden');
        } else {
            $(this).prev('a').find('video').get(0).play();
            $(this).hide();
            $(this).addClass('hidden');
        }
    });

})