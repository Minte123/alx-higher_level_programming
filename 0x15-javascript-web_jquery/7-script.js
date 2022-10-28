$.ajax({
  url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
  type: 'GET',
  success: function (data) {
    $('DIV#character').text(data.name);
  },
  error: function () {
    console.log(error);
  }
});
