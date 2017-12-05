
$('ul').on('click', 'li', function () {
})
//submits what text is in the form
$('#submit').click(function (e) {
    e.preventDefault();
  $('ul').append($('<li>',{
    text: $('#form').val()
  }));
  $('#form').val('');
});
//suppose to remove value after submitting form
