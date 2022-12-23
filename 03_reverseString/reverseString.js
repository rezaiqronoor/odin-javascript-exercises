const reverseString = function(text) {
   const arrText = new Array(...text).reverse();
   const result = arrText.join("");

   return result;
};

// Do not edit below this line
module.exports = reverseString;
