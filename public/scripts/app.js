/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

    $("#compose").click(function() {
        $(".new-tweet").toggle(400, "linear");
        $(".tweettext").focus();
    });

    $('#tweetform').submit(function(event){
        event.preventDefault();
        const $textLength = $(".tweettext").val().length;
        
        if ($textLength === 0 || $(".tweettext").val() === " ") {
            $(".error").text("Please provide a message").slideDown();
            return;
        } else if ($textLength > 140) {
            $(".error").text("Please ensure your character is under 140 characters").slideDown();
            return;
        } else {
        $("#tweets-container").empty();
        $.post('/tweets', $(this).serialize())
        .then(function() {
            loadTweets();
            $('#tweetform').get(0).reset();
            $(".error").hide();
            $(".counter").text("140");
        })
        }
    });

    function loadTweets(){
        $.ajax({url: '/tweets', method: 'GET'})
        .then(renderTweets);
    }
    
    function createTweetElement(data){
        const $tweet = $("<article>").addClass("tweet");
        const $header = $("<header>").appendTo($tweet);
        const $headerimg = $('<img id="dynamic">');
        $headerimg.attr("src", data.user.avatars.small).appendTo($header);
        $("<h2>").text(data.user.name).appendTo($header);
        $("<h3>").text(data.user.handle).appendTo($header);
        
        $("<p>").text(data.content.text).appendTo($tweet);
        const date = moment(data["created_at"]).fromNow();
        const $footer = $("<footer>").text(date).appendTo($tweet);
        $('<img src="./images/Heart-128.png" id="like">').appendTo($footer);
        $('<img src="./images/refresh.png" id="retweet">').appendTo($footer);
        $('<img src="./images/Flag-128.png" id="save">').appendTo($footer);
        return $tweet;
    }

    function renderTweets(tweets) {
        let $tweets = $('#tweets-container');
        for (const key in tweets) {
            $tweets.prepend(createTweetElement(tweets[key]));
        }
        return $tweets;
      }

    loadTweets();
    
});