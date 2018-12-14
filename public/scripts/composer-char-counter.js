
$(document).ready(function() {

    const maxLength = 140;
    $(".tweettext").on('input', function() {
        const textLength = $(this).val().length;
        const textRemaining = maxLength - textLength;
        const counter = $(this).siblings(".counter");
        const negative = "negativeCounter";
        counter.html(textRemaining);
        if (textRemaining < 0){
            counter.addClass(negative);
        } else {
            counter.removeClass(negative);
        }
      });

});

