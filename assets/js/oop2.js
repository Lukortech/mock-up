
function User(email, nick, name, surname) {
  this.email = email;
  this.nick = nick;
  this.name = name;
  this.surname = surname;
  this.online = false;
  this.logout = function(){
  };
}

var badges = {admin:"red", mod:"yellow", superUser:"green", user:"grey"};
User.prototype.login = function (){
  this.online = true;
  console.log(this.nick, 'has logged in.');
}

User.prototype.logout = function (){
  this.online = false;
  console.log(this.nick, 'has logged out.');
}

function Admin(...args) {
  User.apply(this, args);
  this.badgeColor = badges['admin'];
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
  users = users.filter(u => {
    return u.mail != user.mail;
  });
}

var userOne = new User('mail1', 'Lukortech', 'Lukas', 'Formela');
var userTwo = new User('mail2', 'LukOr', 'Luke', 'Eisenhower');
var administrator = new Admin('mail3', 'Yashikuto', 'Adam', 'Adamowicz');
var users = [userOne, userTwo, administrator];