const findTheOldest = function(people) {
   return people.reduce((oldest, person) => {
      if(!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();

      const age = person.yearOfDeath - person.yearOfBirth;

      if(Object.keys(oldest).length === 0) return oldest = person;
      else {
         const curOldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
         return oldest = age > curOldestAge ? person : oldest;
      }
   }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
