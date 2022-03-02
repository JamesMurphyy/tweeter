/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweet) {
  const $tweets = $(`
  <article> 
    <header class = "messageHeader">
      <img class ="resize" src=${(tweet.user.avatars)}" alt = "Avatar"> 
          <div class = "messageHeaderContent">
            <h3 class = "c1">${(tweet.user.name)}</h3>
            <h3 class = "c2">${(tweet.user.handle)}</h3>
          </div>
    </header>
      <div class = test>
        ${(tweet.content.text)}
      </div>
    <footer>
      <div class = "reactionImages">
        <h4>${timeago.format(tweet.created_at)}</h4>
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
    $('#tweetsContainer').append($tweet)
  })
  // $('#tweetsContainer').append(createTweetElement(tweet));
};

$(document).ready(()=>{
  // const $tweet = createTweetElement(tweetData);
  // console.log($tweet);
  // $('#tweetsContainer').append($tweet);
  renderTweets(data);
})
