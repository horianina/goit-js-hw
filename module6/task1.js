import users from './tasks/users.js';
//console.table(users);
//====================================task1
/*const getUserNames = users.map(user => user.name);

console.log(getUserNames);*/

//=====================================task2

/*const getUsersWithEyeColor = users.filter(
  (users, color) => users.eyeColor === 'blue',
);

console.log(getUsersWithEyeColor);*/

//=====================================task3

/*const getUsersWithGender = (users, gender) =>
  users.filter(users => users.gender === gender);

console.log(getUsersWithGender(users, 'male'));*/

//=========================================task4

/*const getInactiveUsers = users.filter(users => users.isActive === false);

console.log(getInactiveUsers);*/

//========================================task5

/*const getUserWithEmail = (users, email) =>
  users.find(users => users.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));*/

//========================================task6

/*const getUsersWithAge1 = users.filter(
  users => users.age >= 20 && users.age <= 30,
);
const getUsersWithAge2 = users.filter(
  users => users.age >= 30 && users.age <= 40,
);
console.log(getUsersWithAge1); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge2);*/

//=============================================task7

/*let total = 0;
const calculateTotalBalance = users.reduce(
  (total, user) => total + user.balance,
  0,
);

console.log(calculateTotalBalance); // 20916*/

//=============================================task8

/*const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(users => users.friends.includes(friendName))
    .map(users => users.name);
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]*/

//========================================task9

/*const getUsersSortedByFriendsCount = [...users].sort(
  (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length,
);

console.log(getUsersSortedByFriendsCount);
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
const getNamesSortedByFriendsCount = getUsersSortedByFriendsCount.map(
  users => users.name,
);
console.log(getNamesSortedByFriendsCount);*/

//===============================================task10

/*const skills = users.reduce((allSkills, user) => {
  allSkills.push(...user.skills);

  return allSkills;
}, []);
console.log(skills);

const set = new Set(skills);
console.log(set);

const getSortedUniqueSkills = [...set].sort();

console.log(getSortedUniqueSkills);
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', '*/
