(function() {

    var ham = document.querySelector('.ham-btn');
    var menu = document.querySelector('.header__menu');

    ham.addEventListener('click', function() {

        menu.classList.toggle('active');
        ham.classList.toggle('active');

    });

})();
$(document).ready(function() {
    var helpers = {
        addZeros: function(n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };
    // $(".slider")
    //     .slick({

    //         autoplay: false,
    //         fade: true,
    //         speed: 800,
    //         lazyLoad: "progressive",
    //         arrows: false,
    //         dots: true
    //     })
    //     .slickAnimation();

    function sliderInit() {
        var $slider = $('.slider');
        $slider.each(function() {
            var $sliderParent = $(this).parent();
            $(this).slick({
                    autoplay: true,
                  //  fade: true,
                    speed: 1000,
                    lazyLoad: "progressive",
				autoplaySpeed: 1500,
                    arrows: false,
                dots: true,
                autoplay: true,
                    rtl: jQuery('body').hasClass('rtl'),
                })
                .slickAnimation();

            // if ($(this).find('.item').length > 1) {
            //     $(this).siblings('.slides-numbers').show();
            // }

            // $(this).on('afterChange', function(event, slick, currentSlide) {
            //     $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
            // });

            // var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            // $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

        });

    };

    sliderInit();
    function rtl_slick() {
        if ($('body').hasClass("rtl")) {
            return true;
        } else {
            return false;
        }
    }
});

$(document).ready(function() {
    $('.slick-carousel').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
		speed: 500,
        dots: true,
        prevArrow: '<div class="slick-nav prev-arrow"><img src="/web_assets/images/left-arrow.svg"></div>',
        nextArrow: '<div class="slick-nav next-arrow"><img src="/web_assets/images/right-arrow.svg"></div>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },


        ]
    });


    $('.property__grid').slick({

        slidesToScroll: 1,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        infinite: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,


    });


    $('.wall__slider').slick({

        slidesToScroll: 1,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        infinite: true,
        arrows: false,
        centerPadding: '60px',
        centerMode: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },


        ]

    });

    $('.premier__slider').slick({

        slidesToScroll: 1,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        dots: false,
		speed: 500,
        infinite: true,
        arrows: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },


        ]

    });
    $('.news_section').slick({

        slidesToScroll: 1,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        infinite: true,
        arrows: false,

        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },


        ]

    });


    $('.premier__slider2').slick({

        slidesToScroll: 1,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: true,
        infinite: true,
        arrows: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },


        ]

    });


    function rtl_slick() {
        if ($('body').hasClass("rtl")) {
            return true;
        } else {
            return false;
        }
    }

    /********scroll*******/
    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: false
    })

    gsap.registerPlugin(ScrollTrigger)


    scroller.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(
        '.ouetr__main__div', {
            scrollTop(value) {
                return arguments.length ?
                    scroller.scrollTo(value, 0, 0) :
                    scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )




    ScrollTrigger.addEventListener('refresh', () => scroller.update())


    ScrollTrigger.refresh()


});





function create_custom_dropdowns() {
    $('.loc-fld select.lcT').each(function(i, select) {
        if (!$(this).next().hasClass('dropdown-select')) {
            $(this).after('<div class="dropdown-select wide ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
            var dropdown = $(this).next();
            var options = $(select).find('option');
            var selected = $(this).find('option:selected');
            dropdown.find('.current').html(selected.data('display-text') || selected.text());
            options.each(function(j, o) {
                var display = $(o).data('display-text') || '';
                dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
            });
        }
    });

    $('.loc-fld .dropdown-select ul').before('<div class="dd-search"><input id="txtSearchValue" placeholder="Search Locations" autocomplete="off" onkeyup="filter()" class="dd-searchbox" type="text"></div>');
}

// Event listeners

// Open/close
$(document).on('click', '.dropdown-select', function (event) {
    if ($(event.target).hasClass('dd-searchbox')) {
        return;
    }
    $('.dropdown-select').not($(this)).removeClass('open');
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).find('.option').attr('tabindex', 0);
        $(this).find('.selected').focus();
    } else {
        $(this).find('.option').removeAttr('tabindex');
        $(this).focus();
    }
});

// Close when clicking outside
$(document).on('click', function (event) {
    if ($(event.target).closest('.dropdown-select').length === 0) {
        $('.dropdown-select').removeClass('open');
        $('.dropdown-select .option').removeAttr('tabindex');
    }
    event.stopPropagation();
});

function filter() {
    var valThis = $('#txtSearchValue').val();
    $('.loc-fld .dropdown-select ul > li').each(function () {
        var text = $(this).text();
        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show(): $(this).hide();
    });
};
// Search

// Option click
$(document).on('click', '.dropdown-select .option', function (event) {
    $(this).closest('.list').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    var text = $(this).data('display-text') || $(this).text();
    $(this).closest('.dropdown-select').find('.current').text(text);
    $(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown-select', function(event) {
    var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
    // Space or Enter
    //if (event.keyCode == 32 || event.keyCode == 13) {
    if (event.keyCode == 13) {
        if ($(this).hasClass('open')) {
            focused_option.trigger('click');
        } else {
            $(this).trigger('click');
        }
        return false;
        // Down
    } else if (event.keyCode == 40) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            focused_option.next().focus();
        }
        return false;
        // Up
    } else if (event.keyCode == 38) {
        if (!$(this).hasClass('open')) {
            $(this).trigger('click');
        } else {
            var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
            focused_option.prev().focus();
        }
        return false;
        // Esc
    } else if (event.keyCode == 27) {
        if ($(this).hasClass('open')) {
            $(this).trigger('click');
        }
        return false;
    }
});

$(document).ready(function() {
    create_custom_dropdowns();
	create_custom_dropdownsnew();
});



//-----JS for Price Range slider-----

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider1 .progress");
let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
if (range.style.left == "") {
    range.style.left = ((priceInput[0].value / rangeInput[0].max) * 100) + "%";
    range.style.right = 100 - (priceInput[1].value / rangeInput[1].max) * 100 + "%";
}


/************lightgallery************** */

//$(document).ready(function() {
//    $('.lightgallery').lightGallery();
//});
//var max = 3;
//$('.lightgallery').each(function() {
//    $(this).find('li').each(function(index) {
//        if (index >= max) $(this).hide()
//    })
//})
$(document).ready(function () {
    $('.lightgallery').lightGallery({
        download: false,
        share: false,
        autoplayControls: false,
        fullScreen: false,
        actualSize: false,
        flipHorizontal: false,
        flipVertical: false,
        rotateLeft: false,
        rotateRight: false,
    });
});
var max = 3;
$('.lightgallery').each(function () {
    $(this).find('li').each(function (index) {
        if (index >= max) $(this).hide()
    })
})



$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});


/**************** */

$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


/********tb */

$(document).ready(function() {

    $('.map ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('.map ul.tabs li').removeClass('current');
        $('.map .tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})



function myFunction() {
    var x = document.getElementById("btncheck");


    if (x.checked) {
        window.location.replace("properties-map.html");
    } else {
        window.location.replace("detail-overview.html");
    }
}

/***********scroll-container************************/

(function($) {

    $(".cata-sub-nav").on('scroll', function() {
        $val = $(this).scrollLeft();

        if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
            $(".nav-next").hide();
        } else {
            $(".nav-next").show();
        }

        if ($val == 0) {
            $(".nav-prev").hide();
        } else {
            $(".nav-prev").show();
        }
    });
    console.log('init-scroll: ' + $(".nav-next").scrollLeft());
    $(".nav-next").on("click", function() {
        $(".cata-sub-nav").animate({ scrollLeft: '+=460' }, 200);

    });
    $(".nav-prev").on("click", function() {
        $(".cata-sub-nav").animate({ scrollLeft: '-=460' }, 200);
    });



})(jQuery);

/*************** */

/*Dropdown Menu*/
$('.sorby .dropdown').click(function() {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.sorby .dropdown').focusout(function() {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.sorby .dropdown .dropdown-menu li').click(function() {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.sorby .dropdown-menu li').click(function() {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
        msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
});

/****grid-view*********** */

$(".sorby .list").click(function() {

    $('.pr_list').removeClass('grid-view ').addClass('list-view');

})
$(".sorby .grid").click(function() {

    $('.pr_list').removeClass('list-view ').addClass('grid-view');

})
$(".sorby button").click(function() {

    $(this).addClass('selected').siblings().removeClass('selected');

})

/************share************ */
const shareData = {
    url: 'detail-overview.html'
}

const btn = document.querySelector('.share');
const resultPara = document.querySelector('.result');

// Share must be triggered by "user activation"
if (btn != null) {
    btn.addEventListener('click', async () => {
        try {
            await navigator.share(shareData)
            resultPara.textContent = 'shared successfully'
        } catch (err) {
            resultPara.textContent = 'Error: ' + err
        }
    });
}


/************like************ */

$(".like__content .btn1").click(function() {

    $('.btn1').toggleClass('active');

})

/****************map-tab****************** */

/*****************share*********** */

// is check mobile and tablet
navigator.isMobileTablet = (function() {
    var check = false;
    (function(a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
})();

BASE_URL = 'https://youtu.be/jbhpA7G5npAjbhpA7G5npA';
jQuery('a[data-social]').on('click', function(e) {
    e.preventDefault();
    var ele = jQuery(this);
    var isMobileTablet = navigator.isMobileTablet;
    var shareUrl = "";
    var socialType = ele.attr('data-social');
    var title = document.title;
    var url = BASE_URL + "bnat/" + "?";
    var urlQueryParams;
    var queryParams;
    var sharePlace = ele.attr('data-text');
    switch (socialType) {
        case 'whatsapp':
            url = url + jQuery.param({
                utm_campaign: 'BNAT-Share-' + socialType,
                utm_source: socialType,
                utm_medium: 'referral',
            });
            if (navigator.isMobileTablet) {
                shareUrl = 'https://api.whatsapp.com/send?text=' + url;
            } else {
                shareUrl = 'https://web.whatsapp.com/send?text=' + encodeURIComponent(url);
            }
            break;

        case 'facebook':
            url = url + jQuery.param({
                utm_campaign: 'BNAT-Share-' + socialType,
                utm_source: socialType,
                utm_medium: 'referral'
            });
            queryParams = jQuery.param({
                u: url,
                title: title
            });
            shareUrl = "https://www.facebook.com/sharer.php?" + queryParams;
            break;

        case 'twitter':
            url = url + jQuery.param({
                utm_campaign: 'BNAT-Share-' + socialType,
                utm_source: socialType,
                utm_medium: 'referral'
            });
            queryParams = jQuery.param({
                text: title,
                url: url,
                via: "BYJUS"
            });
            shareUrl = "https://twitter.com/intent/tweet?" + escape(queryParams);
            break;

        case 'telegram':
            url = url + jQuery.param({
                utm_campaign: 'BNAT-Share-' + socialType,
                utm_source: socialType,
                utm_medium: 'referral'
            });
            queryParams = jQuery.param({
                url: url,
                text: title
            });
            shareUrl = "https://telegram.me/share/url?" + queryParams;
            break;

        case 'message':
            url = url + jQuery.param({
                utm_campaign: 'BNAT-Share-' + socialType,
                utm_source: socialType,
                utm_medium: 'referral'
            });
            shareUrl = "sms:?body=" + url;
            break;

        case 'linkedin':
            url = url + jQuery.param({
                utm_campaign: 'BNAT-Share-' + socialType,
                utm_source: socialType,
                utm_medium: 'referral'
            });
            queryParams = jQuery.param({
                mini: true,
                url: url,
                title: title
            });
            shareUrl = "https://www.linkedin.com/cws/share?" + escape(queryParams);
            break;

        default:
            ;
    }

    window.open(shareUrl, "BNAT Social Sharing", "width=550, height=420, left=" + (screen.availWidth - 500) / 2 + ", top=" + (screen.availHeight - 500) / 2 + ", location=0, menubar=0, toolbar=0, status=0, scrollbars=1, resizable=1");
});

function create_custom_dropdownsnew() {
    $('.property-type select.lcT').each(function(i, select) {
        if (!$(this).next().hasClass('dropdown-select')) {
            $(this).after('<div class="dropdown-select wide ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
            var dropdown = $(this).next();
            var options = $(select).find('option');
            var selected = $(this).find('option:selected');
            dropdown.find('.current').html(selected.data('display-text') || selected.text());
            options.each(function(j, o) {
                var display = $(o).data('display-text') || '';
                dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
            });
        }
    });

    $('.property-type .dropdown-select ul').before('<div class="dd-search"><input id="txtSearchValue1" placeholder="Search Type" autocomplete="off" onkeyup="filternew()" class="dd-searchbox" type="text"></div>');
}


function filternew() {
     var valThis = $('#txtSearchValue1').val();
    $('.property-type .dropdown-select ul > li').each(function () {
        var text = $(this).text();
        (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show(): $(this).hide();
    });
};
