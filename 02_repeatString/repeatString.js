const repeatString = function (text, amount) {
   if(amount < 0) return "ERROR";

   let result = [];

   for (i = 0; i < amount; i++) {
      result.push(text);
   }

   return result.join("");
};

// Do not edit below this line
module.exports = repeatString;
