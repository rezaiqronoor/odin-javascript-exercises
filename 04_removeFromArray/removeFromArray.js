const removeFromArray = function (arr, ...target) {
   /**
    * using filter here prolly is the best thing.
    * need to provide for multipole arguments so target will be ...target
    * filter the arr, and check wether each element includes the value
    * inside of ...target.
    */

   return arr.filter((i) => !target.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
