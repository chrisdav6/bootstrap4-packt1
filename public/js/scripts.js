$(function() {
  
  //Enable Bootstrap tooltips and popovers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  
  
  //Handle popover hover and click
  $(".btn-popover").hover( 
  function() {
    $(this).popover("show");
  },function() {
    $(this).popover("hide");
  }).on("click", function() {
    $(this).popover("dispose");
  });
  
  $(".btn-popover").on("click", function() {
    $(this).popover("hide");
    $(this).html("<i class='fas fa-check' style='color: green;'></i> Following");
  });
  
  
  //Handle Whats happening Tweet Form
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
  
  
  //Handle Modal
  $(".modal-tweet-form").on("submit", function(e) {
    e.preventDefault();
    $("#tweet-modal").modal("hide");
    $("#tweetText").val("");
    $(".char-count").text("280");
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
  
  $(".modal-close-tweet").on("click", function() {
    $("#tweetText").val("");
    $(".char-count").text("280");
  });
  
  
  //Handle Modal Character count
  $("#tweetText").on("keyup", function() {
    var maxLength = $(this).attr("maxlength");
    var currentLength = $(this).val().length;
    
    if(currentLength >= maxLength) {
      $(".char-count").text("You have reached your character limit!");
    } else {
      $(".char-count").text(maxLength - currentLength + " characters left");
    }
  });
  
});