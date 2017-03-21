var Aqua;
(function ($) {
    Aqua = {
        init: function () {
            Aqua.gallery();
            Aqua.testimonialReady();
          //  Aqua.tabshop();
           // Aqua.prettyAqua();
        },
        logger: function (message) {
            console.log(message);
        },
        tabshop:function()
        {
            console.log('shop=tab');
            $( "#tabs" ).tabs({hide: 'fade', show: 'fade'});
        },
        countdown:function($element)
        {
            $element.countdown({until: '+12o +27d +10h +59m -1s',format: 'ODHMS', padZeroes: true});
        }
        ,
        aquaScroll:function($element,$atrr)
        {
            $element.on('click',function(e)
            {
                e.preventDefault();
                console.log($($atrr).offset().top);
                $('body,html').animate(
                    {
                        scrollTop:$($atrr).offset().top
                    },1000
                );
            });
        }
        ,
        aquaFixTop:function(ele)
        {
            $(window).scroll(function(){
                var e =$(window).scrollTop();
                if(e>300){
                    ele.addClass('__nav-fix-top');
                    console.log('added');
                }else{
                    ele.removeClass('__nav-fix-top');
                    console.log('removed');
                }
                console.log(ele)
            });
        }
        ,
        acc: function(ele)
        {

            $( "#accordion" ).accordion({
                collapsible: true,
                fade:true
            });
        }
        ,
        prettyAqua:function($element)
        {
            console.log($element);
            $element.prettyPhoto();
        }
        ,
        gallery: function () {//cach 2
            $(".regular").each(function() {

                var $this = $(this);

                if(!$this.hasClass('slick-ready')) {
                    $this.slick({
                        variableWidth: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 7,
                        slidesToScroll: 1,
                        infinite: true,
                        touchMove:false,
                        focusOnSelect: false,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: false,
                                    centerMode: true
                                }
                            },
                            {
                                breakpoint: 760,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: false,
                                    centerMode: false
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: false,
                                    centerMode: false
                                }
                            }
                        ]
                    });
                    $this.addClass('slick-ready');
                }
            });
        },
        testimonialReady:function()
        {
            $(".regularTestimonial").each(function() {

                var $this = $(this);
                if(!$this.hasClass('slick-ready'))
                {
                        $this.slick({
                        variableWidth: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed:500,
                        autoplay:true,
                        infinite: false
                    });
                    $this.addClass('slick-ready');
                    console.log('ok');
                }
        });
    },
        slider: function ($element, options) {
            options = JSON.parse(options);
            var optDefault = {
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay:true
            };
            var opt = $.extend({}, optDefault, options);
            $element.parent().slick(opt);
        }
}
    $(document).ready(function() {
        Aqua.init();

    });
})(jQuery)


