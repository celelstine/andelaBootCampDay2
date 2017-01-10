/**
 * A function to return one of the number of occurenece of words in a sentence
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict'

var words = function(sentence) {
  var wordCount = {};
  var currentWord = '';
  sentence= sentence.toString().replace(/\t|\n/g, ' ')
  var words = sentence.split(" ");

    for(var i=0;i<words.length;i++) {

      currentWord = words[i];
      if (currentWord !== ''  ) {

        if(!wordCount.hasOwnProperty(currentWord)) {

          wordCount[currentWord] = [];
        }

        wordCount[currentWord]++;
      }
    }
  
  return wordCount;
} 

module.exports = words;

