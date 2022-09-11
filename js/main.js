$(document).foundation();

$(document).ready(function() {

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked:false
            }
        },
        beforeShow: function(){
          $(".fancybox-skin").css("backgroundColor","transparent");
          $(".fancybox-skin").css("padding","0px");
        }
    });

    $(".trigger, .trg").click(function() {
        $(".trigger").toggleClass("close");
        $( ".right-nav" ).toggleClass( "close" );
        //  $( ".right-nav" ).toggle( "slow" );
    });


    // popups

    $(".trg-close").click(function() {
        $(".left-content, .content-wrap, .open-btn, .open-btn span, .bg, .open-content-wrap, .open-left-content").toggleClass("close");
    });

    $(".accept").click(function() {
        $( ".popup, .blur" ).fadeOut(300)
        $( ".blurer").addClass( "noblur")
    });



    // #ScrollToTop

    // $("a[href='#top']").click(function() {
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    //   return false;
    // });


    // #href scroll //

    // $('a[href^="#"]').on('click',function (e) {
    //     e.preventDefault();

    //     var target = this.hash;
    //     var $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 700, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });



 });
