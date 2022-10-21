const normalName = {
  firstName: "tofayel",
  lastName: "Ahmed",
  salary: 15000,
  getFullName: function(){
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function(amount){
    this.salary = this.salary - amount;
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

 const heroChargeBill = normalName.chargeBill.bind(heroPerson);
 heroChargeBill(2000);
 heroChargeBill(3000);
 console.log(heroPerson.salary);


 const friendlyPerson = {
  firstName: "kader",
  lastName: "hossain",
  salary: 30000,

 };
 const friendlyChargeBill =  normalName.chargeBill.bind(friendlyPerson);
 friendlyChargeBill(10000);
 console.log(friendlyPerson.salary);