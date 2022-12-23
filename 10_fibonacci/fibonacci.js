const fibonacci = function(num) {
   if(num < 0) return "OOPS";

   const target = Number(num);
   const arrFibonacci = [];

   for(i = 1; i <= target; i++) {
      if(arrFibonacci.length === 0) {
         arrFibonacci.unshift(1);
      }
      else if(arrFibonacci.length === 1) {
         arrFibonacci.unshift(1);
      }
      else {
         arrFibonacci.unshift(arrFibonacci[0] + arrFibonacci[1]);
      }
   };

   return arrFibonacci[0];
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
