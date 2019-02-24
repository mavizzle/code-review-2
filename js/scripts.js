$(document).ready(function(){
  debugger;
  $('#resultsdiv').hide();
  $('.postsub').hide();
  $('#tryagain').hide();

  $('form#vacation-form').submit(function(){

    var weather = $('input:radio[name=weather]:checked').val();
    var travel = $('input:radio[name=travel]:checked').val();
    var geo = $('input:radio[name=geo]:checked').val();

    var userName = $('input#username').val();

    if (weather === 'hot') {
      if (travel === 'yes') {
        if (geo === 'city') {
          var finalLoc = 'Sao Paolo, Brazil';
          $("#loc_img").attr("src","img/sao.jpg");
        } else if (geo === 'town') {
          var finalLoc = 'Tijuana, Mexico';
          $("#loc_img").attr("src","img/tij.jpg");
        }
      } else if (travel === 'no') {
        if (geo === 'city') {
          var finalLoc = 'Los Angeles, California';
          $("#loc_img").attr("src","img/la.jpg");
        } else if (geo === 'town') {
          var finalLoc = 'Reno, Nevada';
          $("#loc_img").attr("src","img/reno.jpg");
        }
    } else if (weather === 'cold') {
      if (travel === 'yes') {
        if (geo === 'city') {
          var finalLoc = 'St. Petersburg, Russia';
          $("#loc_img").attr("src","img/stp.jpg");
        } else if (geo === 'town') {
          var finalLoc = 'Galway, Ireland';
          $("#loc_img").attr("src","img/gal.jpg");
        }
      } else if (travel === 'no') {
        if (geo === 'city') {
          var finalLoc = 'Minneapolis, Minnesota';
          $("#loc_img").attr("src","img/min.jpg");
        } else if (geo === 'town') {
          var finalLoc = 'Boulder, Colorado';
          $("#loc_img").attr("src","img/bou.jpg");
          }
        }
      }
    }



    submitCheck = (function() {
      if (userName === '') {
        alert("It looks like you didn't enter your name. Please fill out and re-submit.")
      } else {
        $('#img').hide();
        $('#vaca').append(finalLoc);
        $('#finalname').append(userName);
        $('#resultsdiv').show();
        $('.presub').hide();
        $('#vacation-form').hide();
        $('.postsub').show();
        $('#tryagain').show();
      }
    });

    submitCheck();
    $('#imgdiv').show();

    event.preventDefault();
  });

  $('#tryagain').click(function(){

    $('#vaca').empty();
    $('#finalname').empty();
    $('.postsub').hide();
    $(".presub").show();
    $('#tryagain').hide();
    $('#vacation-form').show();

    event.preventDefault();
  });

});
