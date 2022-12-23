const leapYears = function(year) {
   /**
    * check wether if year divisble by 4
    * check if year divisble by 100 then its not leap year
    * check if year divisible by 400
    */

   if((year % 400 == 0 && year % 100 == 0) || (year % 4 == 0 && year % 100 !== 0)) return true;
   else return false;
};

// Do not edit below this line
module.exports = leapYears;
