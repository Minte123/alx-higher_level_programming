$.ajax({
  url: 'https://swapi-api.hbtn.io/api/films/?format=json',
  type: 'GET',
  success: function (data) {
    $.each(data.results, function (index, value) {
      $('UL#list_movies').append('<li>' + value.title + '</li>');
    });
  },
  error: function (err) {
    console.log(err);
  }
});
