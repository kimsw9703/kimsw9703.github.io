$(function () {
    $('.BG').hide();
    // $('section').hide();
    // var n = 0;
    // var timer = setInterval(loading, 50);

    // function loading() {
    //     n++;
    //     $('.progress').html(n + '%');
    //     if (n > 99) {
    //         clearInterval(timer);
    //         $('.progress').fadeOut();
    //         $('.bicycle').stop().animate({
    //             'left': '250%'
    //         }, 1200);
    //         $('.BGLoad').stop().delay(1000).animate({
    //             'left': '100%'
    //         }, 500);
    //         $('.BG').delay(1800).fadeOut();
    //         $('section').show();
    //     }
    // }
    var m = 0;
    var offset;
    var scrollEvent = false;
    // $('section').on("mousewheel", $.throttle(250, function (e) {
    //     e.stopPropagation();
    //     if (e.originalEvent.deltaY < 0) {
    //         if (m <= 0) {
    //             m = 4;
    //             scrollEvent = true;
    //             console.log($(window).scrollTop());
    //             offset = $('section>div').eq(m % 5).offset().top;
    //             $('html, body').stop().animate({
    //                 scrollTop: offset
    //             }, {
    //                 duration: 400,
    //                 complete: function () {
    //                     scollEvent = false;
    //                 }
    //             });
    //         } else {
    //             m--;
    //             scrollEvent = true;
    //             offset = $('section>div').eq(m % 5).offset().top;
    //             $('html, body').stop().animate({
    //                 scrollTop: offset
    //             }, {
    //                 duration: 400,
    //                 complete: function () {
    //                     scollEvent = false;
    //                 }
    //             });
    //         }
    //     } else {
    //         m++;
    //         scrollEvent = true;
    //         offset = $('section>div').eq(m % 5).offset().top;
    //         $('html, body').stop().animate({
    //             scrollTop: offset
    //         }, {
    //             duration: 400,
    //             complete: function () {
    //                 scollEvent = false;
    //             }
    //         });
    //     }
    // }));
    $('section>div').on('mousewheel', function(event, delta) {
        console.log(delta);
        var sTop = 0;
    })
    // $('section').mousewheel(function(event, delta){
    //     console.log(delta);
         
    //      var sTop = 0;
         
    //    if(delta<0){
    //        sTop =$(this).next().offset().top;
    //    }else if(delta>0){
    //        sTop =$(this).prev().offset().top;
    //    }
    //      $('html, body').stop().animate({'scrollTop':sTop},300,'easeInCubic');
    //  })
    $(window).scroll(function (e) {
        e.preventDefault();
        var st = $(window).scrollTop();
        var stickyTop = $('.box1').offset().top;
        if (st >= stickyTop) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    })
})