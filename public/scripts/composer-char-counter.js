//Code for when the DOM is ready.
$(document).ready(function() {
  
  //This jQuery is for calculating the text items and displaying the value.
  $(".new-tweet textarea").on("input", function() {

    let counter = $(this).siblings(".counter");
    let remainingChar = 140 - $(this).val().length;

    counter.text(remainingChar);
    //If statement is done after the calculation of the character value. If the character value is above 140, the counter class (determined in HTML document) adds the class "characterLimit"
    //which was made within the new-tweet.css file giving the characters a red colour.
    if (remainingChar < 0) {
      counter.addClass("characterLimit");
    } else {
      counter.removeClass("characterLimit");
    }
  });

  //This jQuery is for the "Write a new Tweet" Button in the top right of the nav bar which hides or shows the textarea form.
  $('.navHeader i').on('click', () => {
    $('.new-tweet form').slideToggle();
    $('.new-tweet textarea').focus();
  });

  //This jQuery if for the button that appears near the bottom of the screen (right side).
  //This button only appears when the user scrolls a certain distance away from the top of the page.
  $("#button").hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('#button').fadeIn();
      $('.tweetText').fadeOut();
    } else {
      $('#button').fadeOut();
      $('.tweetText').fadeIn();
    }
  });

  //This jQuery is for the button click, which then sends the user back to the top of the page.
  $('#button').on('click', function() {
    $('html, body').animate({scrollTop:0}, '300');
  });
});



