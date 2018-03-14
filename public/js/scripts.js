$(function() {
  
  //Handle Tweet Form
  $("#whatsHappening form").on("submit", function(e) {
    e.preventDefault();
    $("#whatsHappening").hide();
    $("#progress").fadeIn();
    for(var i = 1; i <= 100; i++) {
      $(".progress-bar").css("width", i + "%");
    }
    $("#progress").fadeOut(function() {
      $(".progress-bar").css("width", "0%");
      $("#madeTweet").show();
    });
  });
  
  $('#madeTweet button').on('click', "span", function () {
    $("#madeTweet").hide();
    $("#whatsHappening").show();
  });
  
});