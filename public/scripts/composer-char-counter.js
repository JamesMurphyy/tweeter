


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
});



