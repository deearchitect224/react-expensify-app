// const person = {
//     age: '36',
//     location: {
//         city: 'Bridgewater',
//         temp: 88
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`)

//
//Object Restructuring
//

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`${publisherName}`)

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Bridgewater', 'New Jersey', '19124'];

const [, city='New York', state='New York'] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];

const [name, , priceM] = item;

console.log(`A medium ${name} costs ${priceM}`);

















