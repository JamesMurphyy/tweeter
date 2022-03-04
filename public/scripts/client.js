/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $('.fa-angle-double-down').scrollTo('.container')





const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


const createTweetElement = function(tweet) {
  const $tweets = $(`
  <article> 
    <header class = "messageHeader">
      <img class ="resize" src=${escape(tweet.user.avatars)}" alt = "Avatar"> 
          <div class = "messageHeaderContent">
            <h3 class = "c1">${escape(tweet.user.name)}</h3>
            <h3 class = "c2">${escape(tweet.user.handle)}</h3>
          </div>
    </header>
      <div class = "test">
        <div class = "text">
          ${escape(tweet.content.text)}
        </div>
      </div>
    <footer>
      <div class = "reactionImages">
        <h4>${timeago.format(escape(tweet.created_at))}</h4>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
      </div>
    </footer>
  </article>
  `);
  
  return $tweets
}

const renderTweets = function(tweets) {
  $('#tweetsContainer').empty();
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet)
    $('#tweetsContainer').prepend($tweet)
  })
  // $('#tweetsContainer').append(createTweetElement(tweet));
};


const loadTweets = () => {
  $.ajax('/tweets', {
    method: 'GET',
    success: (tweets) => {
      renderTweets(tweets)},
    error: (data, text, error) => console.error(error)
  });
};


$(document).ready(()=>{

  

  $('.tweetText i').on('click', () => {
    $('.new-tweet form').slideToggle();
    $('.new-tweet textarea').focus();
  });
  

  loadTweets()
  
  $( ".new-tweet form" ).submit(function( event ) {
    event.preventDefault();


    let counter = parseInt($(".counter").text())
    let text = $("textarea").val()
    $(".error").hide();
    console.log($(this).children(".error"))

    if (counter < 0) {
      // return alert("Your message is over the character limit!")
      $(".tweet-error").text("Your tweet is over 140 characters. Please reduce this before tweeting!");
      $(this).children(".error").slideDown(300);
      
    } else if (text === null || text === "") {
      // return alert("Your message box is empty!")
      $(".tweet-error").text("There is nothing being tweeted!");
      $(this).children(".error").slideDown(300);

    } else {

      $.ajax('/tweets', {
        data: $(this).serialize(),
        method: 'POST',
        success: (data) => {
          loadTweets(data)
          console.log($(this).serialize())
          $("textArea").val(""); // clear textarea
          $(".counter").text("140"); // reset counter to 140
        }
      })
    }
  })
})