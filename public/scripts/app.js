/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
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
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];



$(document).ready(function() {

    function createTweetElement(data){
        const $tweet = $("<article>").addClass("tweet");
        const $header = $("<header>").appendTo($tweet);
        const $headerimg = $('<img id="dynamic">');
        $headerimg.attr("src", data.user.avatars.small).appendTo($header);
        const $h2 = $("<h2>").text(data.user.name).appendTo($header);
        const $h3 = $("<h3>").text(data.user.handle).appendTo($header);
        
        const $p = $("<p>").text(data.content.text).appendTo($tweet);
        const date = moment(data["created_at"]).fromNow();
        const $footer = $("<footer>").text(date).appendTo($tweet);
        const $footerimglike = $('<img src="./images/Heart-128.png" id="like">').appendTo($footer);
        const $footerimgRt = $('<img src="./images/refresh.png" id="retweet">').appendTo($footer);
        const $footerimgSave = $('<img src="./images/Flag-128.png" id="save">').appendTo($footer);
        return $tweet;
    }

    function renderTweets(tweets) {
        let $tweets = [];
        for (const key in tweets) {
            $tweets.push(createTweetElement(tweets[key]));
        }
        $('#tweets-container').append($tweets);
      }

    renderTweets(data);
    
});