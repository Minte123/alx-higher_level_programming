$('DIV#add_item').click(function () {
  const item = $('<li></li>').text('Item');
  $('UL.my_list').append(item);
});
