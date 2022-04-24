function ageDistribution(persons) {
    let result = new Map();
    // TODO: answer here
    for (let i = 0; i < persons.length; i++) {
      let age = persons[i].age;
      if (result.has(age)) {
        result.set(age, result.get(age) + 1);
      } else {
        result.set(age, 1);
      }
    }
    return result;
  }
  
  function groupByAge(persons) {
    let result = new Map();
    // TODO: answer here
    for (let i = 0; i < persons.length; i++) {
      let age = persons[i].age;
      if (result.has(age)) {
        result.get(age).push(persons[i]);
      } else {
        result.set(age, [persons[i]]);
      }
    }
    return result;
  }
  
  let people = [
    { name: "Bob", age: 21 },
    { name: "Sam", age: 28 },
    { name: "Ann", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ben", age: 28 },
  ];
  
  console.log(ageDistribution(people));
  console.log(groupByAge(people));
  
  module.exports = {
    ageDistribution,
    groupByAge,
  };