document.addEventListener("DOMContentLoaded", function(event) { 
  console.log('Ready!');
});

class User {
  constructor (mail, nick, name, surname, {y, m, d} ) {
    this.mail = mail;
    this.nick = nick;
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = {'year':y, 'month': m, 'day': d};
  }
  getAge() {
    var birthday = new Date(Number(this.dateOfBirth.year), Number(this.dateOfBirth.month), Number(this.dateOfBirth.day)),  //Year, month, day.
        today = new Date(),
        one_year = 1000*60*60*24*365,
        age = Math.floor( (today.getTime() - birthday.getTime() ) / one_year);
    return age;
  }
  logData() {
    console.log(`The user %c${this.nick}%c is %c${this.getAge()}%c years old and uses %c${this.mail}%c as main e-mail address.`,'color: red; font-weight: bold;','color: initial;','color: red; font-weight: bold;','color: initial;','color: red; font-weight: bold;','color: initial;',);
  }
};

var userOne = new User('mail1', 'Lukortech', 'Lukas', 'Formela', {y:'1666',m:'12',d:'11'});
var userTwo = new User('mail2', 'LukOr', 'Luke', 'Eisenhower', {y:'777',m:'8',d:'05'});

class Moderator extends User {
  
}

class Admin extends Moderator {
  deleteUser(user){
    users = users.filter(u => {
      return u.mail != user.mail
    });
  }
}

var admin = new Admin('mail3', 'Yashikuto', 'Adam', 'Adamowicz', {y:'1994',m:'10',d:'15'} );
var users = [userOne, userTwo, admin];

console.log('Before:', users);
admin.deleteUser(userTwo);
console.log('After:',users);