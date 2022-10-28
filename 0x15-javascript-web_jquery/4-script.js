$('DIV#toggle_header').click(function () {
  if ($('header').hasClass('red')) {
    if ($('header').hasClass('green')) {
      $('header').removeClass('green');
    } else {
      $('header').removeClass('red');
      $('header').addClass('green');
    }
  } else if ($('header').hasClass('green')) {
    $('header').removeClass('green');
    $('header').addClass('red');
  } else {
	  $('header').addclass('green');
  }
});
