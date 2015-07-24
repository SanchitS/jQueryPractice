////----------------------------------------------------------------------------------------------
//ALL EXAMPLES ARE ASSEMBLED IN THIS SINGLE SCRIPT.JS FILE, 
//TO PRACTISE THE PARTICULAR SNIPPET EITHER REMOVE THE COMMENTS OR WRITE BELOW THAT(do this, it will make your understanding well)
//----------------------------------------------------------------------------------------------
//
//
//


//__________________________________________________________________chapter_02/01_document_ready/script.js
//
//$(document).ready(function(){
//	alert('Welcome to StarTrackr! Now no longer under police investigation!');
//});



//__________________________________________________________________chapter_02/02_selecting/script.js
//
//$(document).ready(function() {
//    alert($('#celebs tr').length + ' elements!');
//});



//__________________________________________________________________chapter_02/03_narrowing_selection/script.js
//
//$(document).ready(function () {
//    alert($('#celebs tbody tr').length + " elements!");
//});



//__________________________________________________________________chapter_02/04_filters/script.js
//
//$(document).ready(function () {
//    alert($('#celebs tbody tr:even').length + ' elements');
//});



//__________________________________________________________________chapter_02/05_reading_css_properties/script.js
//
//$(document).ready(function () {
//    var fontSize = $('#celebs tbody tr:first').css('font-size');
//    alert(fontSize);
//});



//__________________________________________________________________chapter_02/06_zebra_striping/script.js
//
//$(document).ready(function () {
//    $('#celebs tbody tr:even').css('background-color', '#dddddd');
//});



//__________________________________________________________________chapter_02/07_multiple_properties_1/script.js
//
//$(document).ready(function () {
//    $('#celebs tbody tr:even').css('background-color', '#dddddd');
//    $('#celebs tbody tr:even').css('color', '#666666');
//});



//__________________________________________________________________chapter_02/08_multiple_properties_2/script.js
//
//$(document).ready(function () {
//    $('#celebs tbody tr:even').css({
//        'background-color': '#dddddd',
//        'color': '#666666'
//    });
//});



//__________________________________________________________________chapter_02/09_multiple_properties_3/script.js
//
//$(document).ready(function () {
//    $('#celebs tbody tr:even').css({
//        'background-color': '#dddddd',
//        'color': '#666666',
//        'font-size': '11pt',
//        'line-height': '2.5em'
//    });
//});



//__________________________________________________________________chapter_02/10_adding_classes/script.js
//--adding a zebra.css file with the css as(line:10) 
//.zebra { background - color: #dddddd;color: #666666;}
//
//$(document).ready(function () {
//    $('#celebs tbody tr:even').addClass('zebra');
//});



//__________________________________________________________________chapter_02/11_hiding/script.js
//--adding a hideButton <input type="button" id="hideButton" value="hide" /> (line:45)
//
//$(document).ready(function () {
//    $('#hideButton').click(function () {
//        $('#disclaimer').hide();
//    });
//});



//__________________________________________________________________chapter_02/12_this/script.js
//
//$(document).ready(function () {
//    $('#hideButton').click(function () {
//        $(this).hide();
//    });
//});



//__________________________________________________________________chapter_02/13_revealing/script.js
//adding html code <input type="button" id="showButton" value="show" /> (line:46)
//
//$(document).ready(function () {
//    $('#hideButton').click(function () {
//        $('#disclaimer').hide();
//    });
//    $('#showButton').click(function () {
//        $('#disclaimer').show();
//    });
//});



//__________________________________________________________________chapter_02/14_toggle_1/script.js
//adding html code <input type="button" id="toggleButton" value="toggle" /> (line:47) and puttting line:45,46  in a comment
//
//$(document).ready(function () {
//    $('#toggleButton').click(function () {
//        if ($('#disclaimer').is(':visible')) {
//            $('#disclaimer').hide();
//        } else {
//            $('#disclaimer').show();
//        }
//    });
//});



//__________________________________________________________________chapter_02/15_toggle_2/script.js
//
//$(document).ready(function () {
//    $('#toggleButton').click(function () {
//        $('#disclaimer').toggle();
//    });
//});




//__________________________________________________________________chapter_02/16_toggle_text/script.js
//
//$(document).ready(function () {
//    $('#toggleButton').click(function () {
//        $('#disclaimer').toggle();
//        if ($('#disclaimer').is(':visible')) {
//            $(this).val('Hide');
//        } else {
//            $(this).val('Show');
//        }
//    });
//});



//__________________________________________________________________chapter_02/17_insert_after/script.js
//
//$(document).ready(function () {
//    $('<input type="button" value="toggle" id="toggleButton">').insertAfter('#disclaimer');
//    $('#toggleButton').click(function () {
//        $('#disclaimer').toggle();
//    });
//});



//__________________________________________________________________chapter_02/18_insert_before/script.js
//
//$(document).ready(function () {
//    $('<input type="button" id="toggleButton" value="toggle">').insertBefore('#disclaimer');
//
//});



//__________________________________________________________________chapter_02/19_prepend_append/script.js
//
//$(document).ready(function () {
//    $('<strong>START</strong>').prependTo('#disclaimer');
//    $('<strong>END!!</strong>').appendTo('#disclaimer');
//});



//__________________________________________________________________chapter_02/20_removing_elements/script.js
//adding html code <p id="no-script">We recommend that you have JavaScript enabled!</p> in line:38
//
//$(document).ready(function () {
//    $('#no-script').remove();
//});



//__________________________________________________________________chapter_02/21_removing_with_selector/script.js
//
//$(document).ready(function () {
//    $('#celebs tr').remove(':contains("Singer")');
//});



//__________________________________________________________________chapter_02/22_modifying_content/script.js
//
//$(document).ready(function () {
//    $('p').html('good bye, cruel paragraphs!');
//    $('h2').text('All your titles are belong to us');
//});



//__________________________________________________________________chapter_02/23_text_vs_html/script.js
//
//$(document).ready(function () {
//    $('p').html('<strong>WARNING!!</strong> Text has been replaced --');
//    $('h2').text('<strong>WARNING!!</strong> Title elements can be --');
//});



//__________________________________________________________________chapter_02/24_get_content/script.js
//
//$(document).ready(function () {
//    alert($('h2:first').text());
//});



//__________________________________________________________________chapter_02/25_fade_in_out/script.js
//removing the lines:45,46 from comment
//
//$(document).ready(function () {
//    $('#hideButton').click(function () {
//        $('#disclaimer').fadeOut();
//    });
//    $('#showButton').click(function () {
//        $('#disclaimer').fadeIn();
//    });
//});



//__________________________________________________________________chapter_02/26_toggle_fade/script.js
//putting lines:45,46 in a comment and removing line:47 from a comment
//
//$(document).ready(function () {
//    $('#toggleButton').click(function () {
//        $('#disclaimer').toggle('slow');
//    });
//});



//__________________________________________________________________chapter_02/27_slide_toggle/script.js
//
//$(document).ready(function () {
//    $('#toggleButton').click(function () {
//        $('#disclaimer').slideToggle('slow');
//    });
//});



//__________________________________________________________________chapter_02/28_callback_functions/script.js
//
//$(document).ready(function () {
//    $('#toggleButton').click(function () {
//        $('#disclaimer').slideToggle('slow', function () {
//            alert('the slide has finished sliding');
//        });
//    });
//});



//__________________________________________________________________chapter_02/29_callback_functions_2/script.js
//putting line:47 in a comment removing line:45 from a comment
//
//$(document).ready(function () {
//    $('#hideButton').click(function () {
//        $('#disclaimer').slideUp('slow', function () {
//            $('#hideButton').fadeOut();
//        });
//    });
//});



//__________________________________________________________________chapter_02/30_hover_highlight/script.js
//adding          tr.zebraHover { background-color: #FFFACD; }          into a css file
//
//$(document).ready(function () {
//    $('#celebs tbody tr').mouseover(function () {
//        $(this).addClass('zebraHover');
//    });
//    $('#celebs tbody tr').mouseout(function () {
//        $(this).removeClass('zebraHover');
//    })
//});



//__________________________________________________________________chapter_02/31_hover_action/script.js
//
//$(document).ready(function () {
//    $('#celebs tbody tr').hover(function () {
//        $(this).addClass('zebraHover');
//    }, function () {
//        $(this).removeClass('zebraHover');
//    });
//});


//__________________________________________________________________chapter_02/32_toggle_class/script.js
//
//$(document).ready(function () {
//    $('#celebs tbody tr').hover(function () {
//        $(this).toggleClass('zebraHover');
//    });
//});



//__________________________________________________________________chapter_02/33_spoiler_revealer/script.js
//adding this html code in line:23,24           Who lost their recording contract today? <span class='spoiler'>The Zaxntines!</span>
//
//$(document).ready(function () {
//    $('.spoiler').hide();
//    $('<input type="button" class="revealer" value="Tell Me!!">').insertBefore('.spoiler');
//    $('.revealer').click(function () {
//        $(this).hide();
//        $(this).next().fadeIn();
//    });
//});



//__________________________________________________________________chapter_02/17_insert_after/script.js
//
//$(document).ready(function () {
//    
//});



//__________________________________________________________________chapter_02/17_insert_after/script.js
//
//$(document).ready(function () {
//    
//});


//