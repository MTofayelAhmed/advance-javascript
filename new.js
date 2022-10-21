class person {
  constructor(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  } 
}

const heroPerson = new person("alamin", "sarkar", 25000);
console.log(heroPerson);
const friendlyPerson = new person ("kader", "kamal", 40000);
console.log(friendlyPerson);


// before es6, we used function instead of class

// function Person1(firstName, lastName, salary){
//   this.firstName= firstName;
//   this.lastName = lastName; 
//   this.salary = salary;
// };
// const oldPerson = new Person1("kalam", "samim", 50000);
// console.log(oldPerson);