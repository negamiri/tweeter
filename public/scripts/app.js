/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 const tweetData =
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
  }



$(document).ready(function() {

    function createTweetElement(data){
        const $tweet = $("<article>").addClass("tweet");
        const $header = $("<header>").appendTo($tweet);
        const $headerimg = $('<img id="dynamic">');
        $headerimg.attr("src", tweetData.user.avatars.small).appendTo($header);
        const $h2 = $("<h2>").text(tweetData.user.name).appendTo($header);
        const $h3 = $("<h3>").text(tweetData.user.handle).appendTo($header);
        
        const $p = $("<p>").text(tweetData.content.text).appendTo($tweet);
        const date = moment(tweetData["created_at"]).fromNow();
        const $footer = $("<footer>").text(date).appendTo($tweet);
        const $footerimglike = $('<img src="./images/Heart-128.png" id="like">').appendTo($footer);
        const $footerimgRt = $('<img src="./images/refresh.png" id="retweet">').appendTo($footer);
        const $footerimgSave = $('<img src="./images/Flag-128.png" id="save">').appendTo($footer);
        return $tweet;
    }




    var $tweet = createTweetElement(tweetData);

    // Test / driver code (temporary)
    console.log($tweet); // to see what it looks like
    $('#tweets-container').append($tweet);
});