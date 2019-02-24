$(document).ready(function(){
  debugger;
  $('#resultsdiv').hide();

  $('form#vacation-form').submit(function(){
    var weather = $('input:radio[name=weather]:checked').val();
    var people = $('input:radio[name=people]:checked').val();
    var geo = $('input:radio[name=geo]:checked').val();
    var travel = $('input:radio[name=travel]:checked').val();
    var userName = $('input#username').val();

    if (weather === 'hot') {

    }

    $('#vaca').append(userName + weather + ' ' + people + ' ' + geo + ' ' + travel);
    $('#resultsdiv').show();


    event.preventDefault();
  });
});
