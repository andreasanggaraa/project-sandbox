$(document).ready(function(){
  // ========== Palindrome ==========

  $('#palindrome-button').click(event => {
    event.preventDefault();
    const word = $('#palindrome-input').val()

    if(!word) {
      return window.alert('PALINDROME ! Please input valid word');
    }

    if(!palindromeChecker(word.replace(/[^\w\s]/gi, ''))) {
      $('#palindrome-board').append(`
        <li class="not-palindrome"><b>${word}</b> - <i style="color: red;">Not a palindrome</i></li>
      `);
    } else {
      $('#palindrome-board').append(`
        <li class="is-palindrome"><b>${word}</b> - <i>Is a palindrome</i></li>
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
    word = word.toLowerCase().toString();
    let result = true;
    for(let i = 0; i < word.length; i++) {
      if(word[i] !== word[word.length - i - 1]) {
        result = false;
        break;
      }
    }
    return result;
  }

  // ========== Anagram ==========
  $('#anagram-submit').click(event => {
    event.preventDefault();
    const firstWord = $('#anagram-input-first').val();
    const secondWord = $('#anagram-input-second').val();

    if(!firstWord) {
      return window.alert('ANAGRAM ! Please input first word to compare');
    } 
    if(!secondWord) {
      return window.alert('ANAGRAM ! Please input second word to compare')
    }

    if(anagramChecker(firstWord, secondWord)) {
      $('#anagram-board').append(`
        <li class="is-anagram"><b>${firstWord}</b> = <b>${secondWord}</b></li>
      `)
    } else {
      $('#anagram-board').append(`
        <li class="not-anagram"><b>${firstWord}</b> <i style="color: red;">&#8800;</i> <b>${secondWord}</b></li>
      `)
    }
    
    $('#anagram-form').trigger("reset");

    return null;
  })

  $('#anagram-reset').click(event => {
    event.preventDefault();
    $('#anagram-form').trigger("reset");
    $('#anagram-board').empty();    
  })

  const anagramChecker = (first, second) => {
    first = first.toLowerCase().replace(/\s/g, '').split('').sort().join('')
    second = second.toLowerCase().replace(/\s/g, '').split('').sort().join('')

    if(first === second) {
      return true;
    }

    return false;
  }

});