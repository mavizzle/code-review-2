$(document).ready(function(){
  $('#resultsdiv').hide();

  $('#vacation-form form').submit(function(){
    var weather = $('input:radio[name=weather]')
    var people = $('input:radio[name=people]')
    var geo = $('input:radio[name=geo]')
    var travel = $('input:radio[name=travel]')

    $('#vaca') = (weather + ' ' + people + ' ' + geo + ' ' +. travel).text()''
    $('#resultsdiv').show();


    event.preventDefault();
  });

  event.preventDefault();
});
