/*----------------------*/
/***** Activité n°1 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button1').click(function(){
        $('#acitivite1').css('display','block');
        $('#acitivite2').css('display','none');
        $('#acitivite3').css('display','none');
        $('#acitivite4').css('display','none');
        $('#acitivite5').css('display','none');
        $('#acitivite6').css('display','none');
        $('#acitivite7').css('display','none');
        $('#acitivite8').css('display','none');
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});
/*----------------------*/
/***** Activité n°2 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button2').click(function(){
        $('#acitivite2').css('display','block');
        $('#acitivite1').css('display','none');
        $('#acitivite3').css('display','none');
        $('#acitivite4').css('display','none');
        $('#acitivite5').css('display','none');
        $('#acitivite6').css('display','none');
        $('#acitivite7').css('display','none');
        $('#acitivite8').css('display','none');   
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});

/*----------------------*/
/***** Activité n°3 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button3').click(function(){
        $('#acitivite3').css('display','block');
        $('#acitivite1').css('display','none');
        $('#acitivite2').css('display','none');
        $('#acitivite4').css('display','none');
        $('#acitivite5').css('display','none');
        $('#acitivite6').css('display','none');
        $('#acitivite7').css('display','none');
        $('#acitivite8').css('display','none');
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});

/*----------------------*/
/***** Activité n°4 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button4').click(function(){
        $('#acitivite4').css('display','block');
        $('#acitivite1').css('display','none');
        $('#acitivite2').css('display','none');
        $('#acitivite3').css('display','none');
        $('#acitivite5').css('display','none');
        $('#acitivite6').css('display','none');
        $('#acitivite7').css('display','none');
        $('#acitivite8').css('display','none');
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});

/*----------------------*/
/***** Activité n°5 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button5').click(function(){
        $('#acitivite5').css('display','block');
        $('#acitivite1').css('display','none');
        $('#acitivite2').css('display','none');
        $('#acitivite3').css('display','none');
        $('#acitivite4').css('display','none');
        $('#acitivite6').css('display','none');
        $('#acitivite7').css('display','none');
        $('#acitivite8').css('display','none');
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});

/*----------------------*/
/***** Activité n°6 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button6').click(function(){
        $('#acitivite6').css('display','block');
        $('#acitivite1').css('display','none');
        $('#acitivite2').css('display','none');
        $('#acitivite3').css('display','none');
        $('#acitivite4').css('display','none');
        $('#acitivite5').css('display','none');
        $('#acitivite7').css('display','none');
        $('#acitivite8').css('display','none');
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});

/*----------------------*/
/***** Activité n°7 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button7').click(function(){
        $('#acitivite7').css('display','block');
        $('#acitivite1').css('display','none');
        $('#acitivite2').css('display','none');
        $('#acitivite3').css('display','none');
        $('#acitivite4').css('display','none');
        $('#acitivite5').css('display','none');
        $('#acitivite6').css('display','none');
        $('#acitivite8').css('display','none');
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});

/*----------------------*/
/***** Activité n°8 *****/
/*----------------------*/

$(document).ready(function(){
    $('#button8').click(function(){
        $('#acitivite8').css('display','block');
        $('#acitivite1').css('display','none');
        $('#acitivite2').css('display','none');
        $('#acitivite3').css('display','none');
        $('#acitivite4').css('display','none');
        $('#acitivite5').css('display','none');
        $('#acitivite6').css('display','none');
        $('#acitivite7').css('display','none');
        $('html, body').animate({scrollTop:600}, 'slow');
        });
});

$(function() {                       //run when the DOM is ready
  $(".nav-1 a").click(function() {  //use a class, since your ID gets mangled
    $(this).addClass("colorie");      //add the class to the clicked element
  });
});


var wrap = $("nav");

wrap.on("scroll", function(e) {
    
  if (scrollTop > 2) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});