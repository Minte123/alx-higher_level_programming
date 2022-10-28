$(function () {
  $('INPUT#btn_translate').click(function () {
    const val = $('INPUT#language_code').val();
    $.ajax({
      url: 'https://www.fourtonfish.com/hellosalut/hello/?lang=' + val,
      method: 'GET',
      success: function (data) {
        $('DIV#hello').text(data.hello);
      }
    });
  });
});
