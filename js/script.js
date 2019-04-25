//Class
class Person {
  constructor(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  }

getBirthYear() {
  return this.dob.getFullYear();
  }

getFullName() {
  return `${this.firstName} ${this.lastName}`;
  }
}
//Initiate object
const person1 = new Person('John', 'Doe', '1981/09/12');

console.log(person1.getBirthYear());
console.log(person1);
