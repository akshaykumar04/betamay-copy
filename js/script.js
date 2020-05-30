
$(function () {
    "use strict";
    //LOADER
    $(window).on("load", function () {
        $(".loader").fadeOut(800);
    });
    /*----navbar-search----*/
    $('.search-icon').on('click', function () {
        $('.navbar-search-box').toggleClass("navbar-search-box-open");
        $(this).toggleClass("actives");

        if($(this).hasClass("actives")){
            $('.search-icon > i').toggleClass("fa-times");
            $('.search-icon > i').toggleClass("fa-search");
        }else {
            $('.search-icon > i').toggleClass("fa-search");
            $('.search-icon > i').toggleClass("fa-times");
        }
    });

    /* ------- Smooth scroll ------- */
    $(".scroll").on("click", function (event) {
        var menu = $("nav.navbar").innerHeight();
        event.preventDefault();
        $("html,body").animate({
            scrollTop: ($(this.hash).offset().top - 10)
        }, 1000);
    });



    /* ------- Sidebar Toggle ------ */
    $(".menu-icon").on("click",function () {
        $(".full-menu").toggleClass("open");
    });
    if($(".full-nav li a").hasClass("scroll")){
        $(".full-nav li a").on("click",function () {
            $(".full-menu").removeClass("open");
        });
    }

    /*--- Full Height Banner BG ---*/
    function resizebanner(){
        $("#text-rotate").css("height", $(window).height());
    }
    $(window).resize(function(){
        resizebanner();
    });
    resizebanner();
    /*------ MENU Fixed ------*/

    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
        var $navbar = $(".navbar");
        if ($scroll > 100) {
            $navbar.addClass("scroll-nav");
        } else {
            $navbar.removeClass("scroll-nav");
        }


    });


    /*----revolution-slider-js---*/
    function setREVStartSize(e){
        try{ var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
            if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
        }catch(d){console.log("Failure at Presize of Slider:"+d)}
    }
    var revapi2,
        tpj=jQuery;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_2_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_2_1");
        }else{
            revapi2 = tpj("#rev_slider_2_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"//localhost/revslider/revslider/public/assets/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 50,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    bullets: {
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        style:"custom",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0,
                        space:5,
                        tmp: '<span class="tp-bullet-title">{{param1}}</span>'
                    }
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1170,970,750,480],
                gridheight:[600,600,500,400],
                lazyType:"smart",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    speedbg:0,
                    speedls:0,
                    levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"on",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false
                }
            });
        }
    });	/*ready*/

    var revapi2,
        tpj=jQuery;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_2_2").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_2_1");
        }else{
            revapi2 = tpj("#rev_slider_2_2").show().revolution({
                sliderType:"standard",
                jsFileLocation:"//localhost/revslider/revslider/public/assets/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off"
                },
                visibilityLevels:[1240,1024,778,480],
                gridwidth:1240,
                gridheight:868,
                lazyType:"none",
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false
                }
            });
        }
    });	/*ready*/

    /*-----revolution-slider-js-end -----*/
    /*---- Progress Bar Animation On Screen ----*/
    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"},3000)
        });
    });
    /*---jquery.appear.js--*/
    $(".about-progress ").appear(function () {
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    /* Cube Portfolio */

    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 15,
                gapVertical: 15
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic-flat',
                action: 'click',
                loadItems: 3
            }
        }
    });
/*news tabs*/
    $(".nav-tabs a").on("click",function () {
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
    /* Swiper JS */
    $(".news-text-slider").each(function () {
        var $this = $(this);
        var swiper = new Swiper('.swiper-container', {

            paginationClickable: true,
            nextButton: $this.find(".swiper-button-next"),
            prevButton: $this.find(".swiper-button-prev"),

            spaceBetween: 120
        });
    });
    /*placeholder hide*/

    if($(window).width() < 768){
        $('.text').attr('placeholder' ,'');
    }
    /*news slider all index*/
    $(".news").each(function () {
        var $this = $(this);
        var swiper = new Swiper('.index-container', {

            paginationClickable: true,
            nextButton: $this.find(".swiper-button-next"),
            prevButton: $this.find(".swiper-button-prev"),

            spaceBetween: 120
        });
    });


    /*index2*/
    $(".main-slider-index2").each(function () {
        var $this = $(this);
        var swiper = new Swiper('.slider-container', {
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            speed: 600,
            autoplay: 5000,
            spaceBetween: 120
        });
    });
    /*index3*/

    $(".index3-news").each(function () {
        var $this = $(this);
        var swiper = new Swiper('.index3-swiper', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop:false,
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        });
    });
    /*index4*/
    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
        var $navbar = $(".home-main-index4 .navbar");
        if ($scroll > 100) {
            $navbar.removeClass("font-white");
        } else {
            $navbar.addClass("font-white");
        }


    });

    $(".main-slider-index4").each(function () {
        var $this = $(this);
        var swiper = new Swiper('.slider-container', {
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            speed: 600,
            autoplay: 5000,
            spaceBetween: 120
        });
    });
    //gradientlayout
    // gradient layout

    function checkGradeient() {
        //gradient animations
        var colors = new Array(
            [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

        var step = 0;
        //color table indices for:
        // current color left
        // next color left
        // current color right

        // next color right
        var colorIndices = [0, 1, 2, 3];

        //transition speed
        var gradientSpeed = 0.002;

        function updateGradient() {

            if ($ === undefined) return;

            var c0_0 = colors[colorIndices[0]];
            var c0_1 = colors[colorIndices[1]];
            var c1_0 = colors[colorIndices[2]];
            var c1_1 = colors[colorIndices[3]];

            var istep = 1 - step;
            var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

            var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

            $('#gradient').css({
                background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
            }).css({
                background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
            });

            step += gradientSpeed;
            if (step >= 1) {
                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];

                //pick two new target color indices
                //do not pick the same as the current one
                colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

            }
        }

        setInterval(updateGradient, 10);
    }

    if ($('body').hasClass("gradient_layout")) {
        checkGradeient()
    }
    /* index5*/

    $(".index5-slider").each(function () {
        var $this = $(this);
        var swiper = new Swiper('.index5-container', {

            fade: { crossFade: true },
            virtualTranslate: true,
            autoplay: 2500,
            speed: 1000,
            loop: true,
            effect: 'fade'
        });
    });
    // Push Menus
    var $menuLeft = $(".pushmenu-left");
    var $menuRight = $(".pushmenu-right");
    var $toggleleft = $("open");
    var $toggleright = $(".home-main-index5  .menu-icon");

    if ($(".home-main-index5  .menu-icon").length) {
        $("body").addClass("pushmenu-push");
        $toggleleft.on("click", function () {
            $(this).toggleClass("active");
            $(".pushmenu-push").toggleClass("pushmenu-push-toright");
            $menuLeft.toggleClass("pushmenu-open");
            return false;
        });
        $toggleright.on("click", function () {
            $(this).toggleClass("active");
            $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
            $menuRight.toggleClass("pushmenu-open");
            return false;

        });


    }
    /*index6*/
    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
        var $navbar = $(".index6-navbar");
        if ($scroll > 50) {
            $navbar.addClass("stick");
        } else {
            $navbar.removeClass("stick");
        }
        if($(".index6-navbar .navbar").hasClass("scroll-nav")){
            $(".index6-navbar .navbar").removeClass("scroll-nav");
        }
    });





    /*index8*/
    var $fixednav = $(".index8-navbar .navbar");
    $(window).on("scroll",function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if($(this).scrollTop() > $heightcalc){
            $fixednav.addClass("navbar-fixed-top");
        }else {
            $fixednav.removeClass("navbar-fixed-top");
        }
        if($(".index8-navbar .navbar").hasClass("scroll-nav")){
            $(".index8-navbar .navbar").removeClass("scroll-nav");
        }
    });

});

