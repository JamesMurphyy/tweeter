$(document).ready(function() {
  
  $(".new-tweet textarea").on("input", function() {
    let counter = $(this).siblings(".counter");
    
    let remainingChar = 140 - $(this).val().length

    counter.text(remainingChar);

    if (remainingChar < 0) {
      counter.addClass("characterLimit");
    } else {
      counter.removeClass("characterLimit");
    }
  });



  $("#button").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#button').fadeIn();
        $('.tweetText').fadeOut();
    } else {
        $('#button').fadeOut();
        $('.tweetText').fadeIn();
    }
  });

  $('#button').on('click', function(e) {
    $('html, body').animate({scrollTop:0}, '300');
  });


});



