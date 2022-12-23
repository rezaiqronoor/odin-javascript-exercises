const palindromes = function (str) {
   /**
    * 1. get the string
    * 2. lowercase the string
    * 3. remove the spaces and symbols ( !, , . );
    * 4. reverse the string and check if the prev and after value is equal;
    * 
    * equal = palindrome;
    */

   const formatted = str.toLowerCase().replace(/[^A-Z0-9]/ig, "")

   const reverse = strTarget => {
      return strTarget.split("").reverse().join("");
   };

   return formatted === reverse(formatted) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
