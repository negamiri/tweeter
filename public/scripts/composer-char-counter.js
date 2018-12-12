console.log("Before load");
$(document).ready(function() {
    // --- our code goes here ---
    console.log("Loaded");
    const maxLength = 140;
    $(".tweettext").keydown(function(event) {
        const textLength = this.value.length+1;
        const textRemaining = maxLength - textLength;
        console.log(textRemaining);
      });
});

"hello i am a string"