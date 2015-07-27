//Chapter-03


//__________________________________________________________________chapter_03/01_animating_css/script.js
//
//$(document).ready(function () {
//    $('p').animate({
//        padding: '20px',
//        fontSize: '30px'
//    }, 2000);
//});



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
//after that add the file to the index.html using <script> tag line:14
//
//$(document).ready(function () {
//    $('#disclaimer').animate({
//        backgroundColor: "#ff9f5f"
//    }, 2000);
//});



//__________________________________________________________________chapter_03/05_easing/script.js
//putting line:14 in a comment
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
//attaching it in the line:15 of our html code
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
//adding the html code at line:56 to line:73
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
//putting line:56 to line:73 in a comment
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