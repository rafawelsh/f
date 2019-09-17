const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
]

// Some and Every checks
// Array.prototype.some() is at least one person 19 or older?
// let age = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19) {
//         return true;
//     }
// })

let age = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

// Array.prototype.every() is everyone 19 or older?
let allpeople = people.every(person =>((new Date()).getFullYear()) - person.year >=19);


const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// ID of 823423

let code = comments.find(comment => comment.id === 823423);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

let index = comments.findIndex(comment => comment.id === 823423);

comments.splice(index, 1);
console.log(comments)