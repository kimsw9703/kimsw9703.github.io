$(function () {
    $('article').fullpage({
        // sectionsColor: ['#f0f0f0', '#f5f5f5', '#f2eae6', '#ccddff'],
        // sectionsColor: ['#f0f0f0', '#f2eae6', '#f0f0f0', '#f0f0f0'],
        sectionsColor: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'],
        anchors: ['HomeSec', 'WorkSec', 'AboutSec', 'ContactSec'],
        menu: '.lnb',
        onLeave: function (index, nextIndex, direction) {
            if (index == 2) {
                clearInterval(timer);
            } else if (nextIndex == 2) {
                timer = setInterval(workSlide, 3000);
            }
        }
    });

    var typed = new Typed('#typed', {
        strings: [
            'Web Publisher',
            'Front-End',
            'Web Designer',
            'UI / UX'
        ],
        typeSpeed: 35,
        backSpeed: 50,
        smartBackspace: false,
        loop: true,
        loopCount: Infinity,
        backDelay: 1000,
        startDelay: 700
    });

    var n = 0;
    var timer;
    $('.WorkText ul li').eq(n).addClass('active');
    $('.WorkText').addClass(`color${n%3}`);
    $('.TextBox div').eq(n).show();

    function workSlide() {
        $('.WorkText ul li').eq(n % 3).removeClass('active');
        $('.TextBox div').eq(n % 3).hide();
        $('.showBox div').eq(n % 3).fadeOut();
        $('.WorkText').removeClass(`color${n%3}`);
        n++;
        $('.WorkText ul li').eq(n % 3).addClass('active');
        $('.TextBox div').eq(n % 3).fadeIn();
        $('.showBox div').eq(n % 3).fadeIn();
        $('.WorkText').addClass(`color${n%3}`);
    }
    $('.WorkText ul li').click(function (e) {
        e.preventDefault();
        clearInterval(timer);
        $('.WorkText').removeClass(`color${n%3}`);
        n = $(this).index();
        $('.WorkText ul li').removeClass('active');
        $(this).addClass('active');
        $('.TextBox div').hide();
        $('.TextBox div').eq(n).fadeIn();
        $('.showBox div').fadeOut();
        $('.showBox div').eq(n).fadeIn();
        $('.WorkText').addClass(`color${n%3}`);
        timer = setInterval(workSlide, 3000);
    });
    $('.keywordsList span').eq(0).hide();
    $(".About h2 span").droppable({
        drop: function (event, ui) {
            $('.keywordsList span').show();
            $(ui.draggable[0]).hide();
            $(this).text(ui.draggable[0].innerHTML.slice(2));
        }
    });
    $(".keywordsList span").draggable({
        revert: true,
        revertDuration: 0,
        drag: function () {
            $('.dropHere').addClass('active');
        },
        stop: function () {
            $('.dropHere').removeClass('active');
        }
    });
    $('.mailclip').on('click', function(){
        $('#mailAddress').show();
        $('#mailAddress').select();
        document.execCommand('copy');
        $('#mailAddress').hide();
        alert('클립보드에 복사되었습니다.');
    });
    $('.goPage').mouseover(function(){
        $(this).html('Go!');
    }).mouseout(function(){
        $(this).html('페이지 바로가기');
    })
    $('.goProcess').mouseover(function(){
        $(this).html('Go!');
    }).mouseout(function(){
        $(this).html('기획서 보기');
    })
});