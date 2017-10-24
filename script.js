$(document).ready(function() {
  $('.film-nav').hide();
  $('.credits').hide();
  
  $('#f-n-show').click(function() {
    $('.film-nav').slideToggle(800);
    if($('#f-n-show').text() == '▲')
    {
        $('#f-n-show').text('▼');
    }
    else
    {
        $('#f-n-show').text('▲');   
    }
  });
  
  $('#credits-button').click(function() {
    $('.credits').slideToggle(800);
  });
});
