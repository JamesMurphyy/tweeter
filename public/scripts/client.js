/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Escape function so text from user input does not harm the servers overall functionality.
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Function that inputs a data object and returns HTML code with formatted information -- used for adding the tweets onto the page.
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
  return $tweets;
};

//Function deletes the tweets within the Tweets Container and then loops through the data that was given to then redisplay all the tweets, adding the new one each submission.
//Preprend was used instead of append since the tweets need to be displayed newest to oldest.
const renderTweets = function(tweets) {
  $('#tweetsContainer').empty();
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweetsContainer').prepend($tweet);
  });
};

//Function used for initiating the ajax request upon submission from user on the Tweeter page. Upon success, the data is pushed through to the renderTweets function (aforementioned).
const loadTweets = () => {
  $.ajax('/tweets', {
    method: 'GET',
    success: (tweets) => {
      renderTweets(tweets);
    },
    error: (data, text, error) => console.error(error)
  });
};

//Code for when the DOM is ready.
$(document).ready(()=>{

  //Function called to load the tweets that have already been given (from begining of assignment)
  loadTweets();
  
  //JQuery that submits the textarea information upon successful submission.
  //A successful submission is when the "if" statements are correctly passed (text characters less than 140 and when there is something written).
  $(".new-tweet form").submit(function(event) {
    event.preventDefault();

    let counter = parseInt($(".counter").text());
    let text = $("textarea").val();

    //Hides error and only calls it when an "if" statement fails.
    $(".error").hide();

    if (counter < 0) {
      $(".tweet-error").text("Your tweet is over 140 characters. Please reduce this before tweeting!");
      $(this).children(".error").slideDown(300);
      
    } else if (text === null || text === "") {
      $(".tweet-error").text("There is nothing being tweeted!");
      $(this).children(".error").slideDown(300);

    } else {
      //When successful, ajax gets initiated and the data is then passed to the load tweets function. This creates the display of tweets and the addition of the one that was just submitted.
      $.ajax('/tweets', {
        data: $(this).serialize(),
        method: 'POST',
        success: (data) => {
          loadTweets(data);
          //Following the transfer of data, the textarea is then cleaned of its last message and the counter value is reset to 140.
          $("textArea").val("");
          $(".counter").text("140");
        }
      });
    }
  });
});