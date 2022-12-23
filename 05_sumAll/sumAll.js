const sumAll = function (num1, num2) {
   const endNumber = num1 > num2 ? num1 : num2;

   if (num1 < 0 || num2 < 0) return "ERROR";
   if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

   let total = 0;
   for (i = 1; i <= endNumber; i++) {
      total += i;
   }

   return total;
};

// Do not edit below this line
module.exports = sumAll;
