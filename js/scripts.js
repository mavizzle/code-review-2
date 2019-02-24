$(document).ready(function(){
  $('#resultsdiv').hide();

  $('form#vacation-form').submit(function(){
    var weather = $('input:radio[name=weather]:checked').val();
    var travel = $('input:radio[name=travel]:checked').val();
    var geo = $('input:radio[name=geo]:checked').val();

    var userName = $('input#username').val();

    if (weather === 'hot') {
      if (travel === 'yes') {
        if (geo === 'city') {
          var finalLoc = 'Sao Paolo, Brazil';
        } else if (geo === 'town') {
          var finalLoc = 'Tijuana, Mexico';
        }
      } else if (travel === 'no') {
        if (geo === 'city') {
          var finalLoc = 'Los Angeles, California';
        } else if (geo === 'town') {
          var finalLoc = 'Reno, Nevada';
        }
    } else if (weather === 'cold') {
      if (travel === 'yes') {
        if (geo === 'city') {
          var finalLoc = 'St. Petersburg, Russia';
        } else if (geo === 'town') {
          var finalLoc = 'Galway, Ireland';
        }
      } else if (travel === 'no') {
        if (geo === 'city') {
          var finalLoc = 'Minneapolis, Minnesota';
        } else if (geo === 'town') {
          var finalLoc = 'Boulder, Colorado';
          }
        }
      }
    }

    submitCheck = (function() {
      console.log(userName);
      if (userName === '') {
        alert("It looks like you didn't enter your name. Please fill out and re-submit.")
      } else {
        $('#vaca').append(finalLoc);
        $('#finalname').append(userName);
        $('#resultsdiv').show();
      }
    });

    submitCheck();


    event.preventDefault();
  });


});
