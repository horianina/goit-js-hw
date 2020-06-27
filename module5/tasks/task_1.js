'use strict';

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  //console.log(Account.prototype.getInfo); // function
};
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
console.log(mango);
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
console.log(poly);
poly.getInfo(); // Login: Poly, Email: poly@mail.com
