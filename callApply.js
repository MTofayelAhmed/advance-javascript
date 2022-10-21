const normalName = {
  firstName: "tofayel",
  lastName: "Ahmed",
  salary: 15000,
  getFullName: function(){
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function(amount, tips, tax){
    this.salary = this.salary - amount - tips - tax;
    return this.salary;

  }
};


// console.log(normalName);

// normalName.chargeBill(150);
// console.log(normalName.salary);


const heroPerson = {
  firstName: "alamin",
  LastName: "raju",
  salary: 25000,
}

normalName.chargeBill.call(heroPerson, 1000, 100, 10);
console.log(heroPerson.salary);

//  const heroChargeBill = normalName.chargeBill.bind(heroPerson);
//  heroChargeBill(2000);
//  heroChargeBill(3000);
//  console.log(heroPerson.salary);


 const friendlyPerson = {
  firstName: "kader",
  lastName: "hossain",
  salary: 30000,

 };

 normalName.chargeBill.call(friendlyPerson,  1000, 500, 20);
 console.log(friendlyPerson.salary);
//  const friendlyChargeBill =  normalName.chargeBill.bind(friendlyPerson);
//  friendlyChargeBill(10000);
//  console.log(friendlyPerson.salary);