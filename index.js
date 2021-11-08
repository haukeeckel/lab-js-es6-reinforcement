// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
const usersArray = require('./data')

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
    userFirstNames.push(user.firstName)
  }
  return userFirstNames
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const userFullNames = [];
  for (let key of arr) {
    userFullNames.push(`${key.firstName} ${key.lastName}`)
  }

  return userFullNames;
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
  let usersCreditDetails = [];

  for(let obj of arr) {
    const {firstName, lastName, balance} = obj;
    const userDetails = {
      firstName,
      lastName,
      balance
    };
    usersCreditDetails.push(userDetails)
  }

  return usersCreditDetails
  //console.log(usersCreditDetails);
};

getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  const maleUsers = users.filter(user => user.gender === "male").map(user =>  `${user.firstName} ${user.lastName}`)

  const femaleUsers = users.filter((user) => user.gender === "female").map(user =>  `${user.firstName} ${user.lastName}`)

   return {femaleUsers, maleUsers};
};

genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  // Your code goes here ...
  const {femaleUsers, maleUsers} = data;
  return {female: femaleUsers.length, male: maleUsers.length }
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************
// RegEx Worm
const promo20 = users => {
  let myUsers = users.filter(user => +user.balance.replace(/[$,]/g, '') > 20000)

  for (let user of myUsers) {
    console.log(`Dear ${user.firstName}, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.`);
  }
};


promo20(usersArray);
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
  const newArray = []

  for(let user of users) {
    const clone = {...user}
    clone.isActive = true
    newArray.push(clone)
  }

  console.log(newArray);
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      balance: '$3,570.06',
//      gender: 'male'
//      isActive: true,
//    },
//    {
//      // ...
//    }
// ]