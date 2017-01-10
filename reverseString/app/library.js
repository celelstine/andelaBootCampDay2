/**
 * A function check for  palindromes, if they do not exist ;returns the reverse of the input string
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict'

var reverseString = function(string) {

  var reverse_string="";
  var string_len=string.length-1;

  if(string_len<0) {
    return null; 
  }else {

    for(var i=string_len;i>=0;i--) {

      reverse_string += string[i];  
    }

    var counter=0;
    // check for  palindromes
    while(reverse_string[counter] == string[counter] && counter < string_len ) {
       counter++; 
    }
  
    if (counter == string_len) {
       return true; 
       }else {
      return reverse_string; 
      }
  }
} 

module.exports = reverseString;

