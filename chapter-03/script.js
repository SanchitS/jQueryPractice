//Chapter-03


//__________________________________________________________________chapter_03/01_animating_css/script.js
//
$(document).ready(function () {
    $('p').animate({
        padding: '20px',
        fontSize: '30px'
    }, 2000);
});



//__________________________________________________________________chapter_03/02_relative_css_animation/script.js
//
//$(document).ready(function () {
//    $('#navigation li').hover(function () {
//        $(this).animate({
//            paddingLeft: '+=15px'
//        }, 200);
//    }, function () {
//        $(this).animate({
//            paddingLeft: '-=15px'
//        }, 200);
//    });
//});



//__________________________________________________________________chapter_03/03_animate_show_hide/script.js
//
//$(document).ready(function () {
//    $('#disclaimer').animate({
//        opacity: 'hide',
//        height: 'hide'
//    }, 'slow');
//});



//__________________________________________________________________chapter_03/04_color_animation/script.js
//download the jquery.color.min.js from the links provided in the readme.md file of https://github.com/jquery/jquery-color/
//after that add the file to the index.html using <script> tag line:22
//
//$(document).ready(function () {
//    $('#disclaimer').animate({
//        backgroundColor: "#ff9f5f"
//    }, 2000);
//});



//__________________________________________________________________chapter_03/05_easing/script.js
//putting line:22 in a comment
//
//$(document).ready(function () {
//    $('p:first').toggle(function () {
//        $(this).animate({
//            'height': '+=150px'
//        }, 2000, 'linear')
//    }, function () {
//        $(this).animate({
//            'height': '-=150px'
//        }, 2000, 'swing');
//    });
//});



//__________________________________________________________________chapter_03/06_other_easing_options/script.js
//download the easing code from http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
//attaching it in the line:26 of our html code
//
//$(document).ready(function () {
//    $('p:first').animate({
//        'height': '+=150px'
//    }, 2000, 'easeOutBounce');
//    $('p:first').animate({
//        'height': '-=150px'
//    }, 2000, 'easeInOutExpo');
//    $('p:first').animate({
//        'height': 'hide'
//    }, 2000, 'easeOutCirc');
//    $('p:first').animate({
//        'height': 'show'
//    }, 2000, 'easeOutElastic');
//
//});


//__________________________________________________________________chapter_03/07_bouncy_content_panes/script.js
//adding the html code at line:97 to line:116
//
//$(document).ready(function () {
//    $('#bio > div').hide();
//    $('#bio > div:first').show();
//    $('#bio h3').click(function () {
//        $(this).next().animate({
//            'height': 'toggle'
//        }, 'slow', 'easeOutBounce');
//    });
//
//});



//__________________________________________________________________chapter_03/08_animation_queue/script.js
//putting line:97 to line:116 in a comment
//
//$(document).ready(function () {
//    $('p:first').animate({
//        height: '+=100px',
//        color: 'green'
//    }, {
//        duration: 'slow',
//        easing: 'swing',
//        complete: function () {
//            alert('done!');
//        },
//        queue: false
//    });
//
//});



//__________________________________________________________________chapter_03/
//
//$(document).ready(function () {
//    $('p:first')
//        .hide()
//        .slideDown('slow')
//        .delay(2000)
//        .fadeOut();
//});


//__________________________________________________________________chapter_03/09_animated_navigation/script.js
// attaching 09css.css in line:09
//
//$(document).ready(function () {
//    $('<div id="navigation_blob"></div>').css({
//        width: $('#navigation li:first a').width() + 10,
//        height: $('#navigation li:first a').height() + 10
//    }).appendTo('#navigation').hide();
//
//    $('#navigation a').hover(function () {
//        //mouseover function
//        $('#navigation_blob').animate({
//            width: $(this).width() + 10,
//            left: $(this).position().left
//        }, {
//            duration: 'slow',
//            easing: 'easeOutElastic',
//            queue: false
//        });
//    }, function () {
//        //mouseleave function
//        var leftPosition = $('#navigation li:first a').position().left;
//        $('#navigation_blob').animate({
//            width: 'hide'
//        }, {
//            duration: 'slow',
//            easing: 'easeOutCirc',
//            queue: false
//        }).animate({
//            left: leftPosition
//        }, 'fast');
//    });
//});



//__________________________________________________________________chapter_03/10_animated_navigation_2/script.js
// attaching 10css.css in line:10 &putting line:09 in a comment
// adding id="home" in the first list item of navigation bar
//
//$(document).ready(function () {
//    $('#navigation li').hover(function () {
//            $(this)
//                .stop(true)
//                .animate({
//                    height: '60px'
//                }, {
//                    duration: 500,
//                    easing: 'easeOutBounce'
//                })
//        },
//        function () {
//            $(this)
//                .stop(true)
//                .animate({
//                    height: '20px'
//                }, {
//                    duration: 500,
//                    easing: 'easeOutCirc'
//                })
//        });
//});



//__________________________________________________________________chapter_03/11_jquery_ui_effects/script.js
// adding jquery-ui(js) file in line:20
//
//$(document).ready(function () {
//    $('p:first')
//        .effect('shake', {
//            times: 3
//        }, 300)
//        .effect('highlight', {}, 3000)
//        .hide('explode', {}, 1000);
//});


//__________________________________________________________________chapter_03/12_scroll_event/script.js
// adding 12css.css(scroll) in line:11
//
//$(document).ready(function () {
//    $('#news').scroll(function () {
//        $('#header').append('<span class="scrolled">You scrolled!!</span>')
//    });
//});



//_________________________________________________________________chapter_03/13_floating_nav_1/script.js
// adding 13css.css(scroll) in line:12
//
//$(document).ready(function () {
//    $(window).scroll(function () {
//        $('#navigation').css('top', $(document).scrollTop());
//    });
//});



//__________________________________________________________________chapter_03/09_animated_navigation/script.js
//13css.css = 14css.css
//
//$(document).ready(function () {
//    $(window).scroll(function () {
//        $('#navigation')
//            .stop()
//            .animate({
//                top: $(document).scrollTop()
//            }, 'slow', 'easeOutBack');
//    });
//});




//__________________________________________________________________chapter_03/15_page_scroll/script.js
// adding scrollTo plugin in line:25
//adding <a href="#"> in footer in line:168
//
//$(document).ready(function () {
//    $('a[href=#]').click(function (e) {
//        $.scrollTo(0, 'slow');
//        e.preventDefault();
//    });
//});



//__________________________________________________________________chapter_03/16_custom_scrollbar/script.js
// adding a custom css file in line:13
// adding jScrollPane.js in line: and jScrollPane.css in line: and jquery.mousewheel.js in line:
//
//$(document).ready(function () {
//    $('#fine_print').jScrollPane({
//        scrollbarWidth: 10,
//        scrollbarMargin: 10,
//        showArrows: false
//    });
//});



//__________________________________________________________________chapter_03/17_resize_event/script.js
// putting line:13 in a comment
//
//$(document).ready(function () {
//    $(window).resize(function () {
//        alert("you resized the window!!");
//    });
//});



//__________________________________________________________________chapter_03/18_layout_switcher/script.js
// attaching nothing in the html file
//
//$(document).ready(function () {
//    stylesheetToggle();
//    $(window).resize(stylesheetToggle);
//});
//
//function stylesheetToggle() {
//    if ($('body').width() > 900) {
//        $('<link rel="stylesheet" type="text/css" href="18css.css" />')
//            .appendTo('head');
//    } else {
//        $('link[href="18css.css"]').remove();
//    }
//}


//__________________________________________________________________chapter_03/19_resizable_elements/script.js
//
//$(document).ready(function () {
//    $('p').resizable();
//});



//__________________________________________________________________chapter_03/20_resizable_textarea/script.js
// 
//
//$(document).ready(function () {
//    $('textarea').resizable({
//        grid: [20, 20],
//        minWidth: 153,
//        maxWidth: 300,
//        minHeight: 30,
//        maxHeight: 220,
//        containment: 'parent'
//    });
//});



//__________________________________________________________________chapter_03/21_horizontal_pane_splitter/script.js
// adding 21css.css in line:16
// adding html code from line:58 to line:87
//
//$(document).ready(function () {
//    $('#splitter > div:first').resizable({
//        handles: 'e',
//        minWidth: '100',
//        maxWidth: '400',
//        resize: function () {
//            var remainingSpace = $(this).parent().width() - $(this).outerWidth();
//            var divTwo = $(this).next();
//            var divTwoWidth = remainingSpace - (divTwo.outerWidth() - divTwo.width());
//            divTwo.css('width', divTwoWidth + 'px');
//        }
//    });
//});




//__________________________________________________________________chapter_03/22_vertical_pane_splitter/script.js
// putting line:16 in a comment and adding 22css.css in line:17
//
//$(document).ready(function () {
//    $('#splitter > div:first').resizable({
//        handles: 's',
//        minHeight: '50',
//        maxHeight: '200',
//        resize: function () {
//            var remainingSpace = $(this).parent().height() - $(this).outerHeight();
//            var divTwo = $(this).next();
//            var divTwoHeight = remainingSpace - (divTwo.outerHeight() - divTwo.height());
//            divTwo.css('height', divTwoHeight + 'px');
//        }
//    });
//});