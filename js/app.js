$('ul').on('click', 'li', function () {
  $()
})
var deleteButton = "<button>X</button>";
//submits what text is in the form
$('#submit').click(function () {
  //var textInput = $('#form').val();
  //console.log(textInput);
  $('ul').append($('<li>' + $('#form').val() + deleteButton));
  $('#form').val('');
});
// $('#submit').click(function () {
//   $('ul').append($('<li>',{
//     text: $('#form').val()
//   }));
//   $('#form').val('');
// });
//suppose to remove value after submitting form
//remove item from List
