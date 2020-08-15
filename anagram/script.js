$(document).ready(function(){

  $('#palindrome-button').click(event => {
    const word = $('#palindrome-input').val()
    event.preventDefault();

    if(!palindromeChecker(word.toLowerCase().toString())) {
      $('#palindrome-board').append(`
        <span><b>${word}</b> - <i class="not-palindrome">Not a palindrome</i></span>
        <br />
      `);
    } else {
      $('#palindrome-board').append(`
        <span><b>${word}</b> - <i>Is a palindrome</i></span>
        <br />
      `);
    }

    $('#palindrome-form').trigger("reset");
  })

  $('#palindrome-reset').click(event => {
    event.preventDefault();
    $('#palindrome-form').trigger("reset");
    $('#palindrome-board').empty();
  })


  const palindromeChecker = word => {
    let result = true;
    for(let i = 0; i < word.length; i++) {
      if(word[i] !== word[word.length - i - 1]) {
        result = false;
        break;
      }
    }

    return result;
  }

});