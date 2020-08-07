import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// const onValueChange = database.ref('expenses').on(('value'), (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

    
// });

// database.ref('expenses').push({
//     description: "Gas Bill", 
//     note: "This is my gas bill for this month", 
//     amount: 500,
//     createdAt: 9928333
// });





// database.ref('notes/-MDgl7ch8q6IoaNY9UcQ').update({
//     Body: "Do courses"
// });

// database.ref('notes/-MDgl7ch8q6IoaNY9UcQ').remove();

// database.ref('notes').push({
//     title: "First note!",
//     Body: 'This is my note'
// });

// const firebaseNotes = {
//     notes: {
//         testId1: {
//             title: "First note!",
//             Body: 'This is my note'
//         },
//         testId2: {
//             title: "Second note!",
//             Body: 'This is my another note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note'
// }, {
//     id: '173iwi',
//     title: 'Another Note',
//     body: 'This is my note'
// }];


// database.ref('notes').set(notes);

// const onValueChange = database.ref().on(('value'), (snapshot) => {
//     const aboutme = snapshot.val();
//     console.log(`${aboutme.name} is a ${aboutme.job.title} at ${aboutme.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

//Get data 1 time
// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {

//     });


//   const aboutme = {
//     name: 'Divya Gopalakrishnan',
//     age: 36,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         company: 'Google',
//         title: 'Software Developer'
//     },
//     location: {
//         city: 'Bridgewater, NJ',
//         country: 'United States'
//     }
// };

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('updates successful');
// }).catch((err) => {
//     console.log('updates error', err);
// });

// database.ref().set(aboutme).then(() => {
//     console.log('Data saved correctly');
// }).catch((err) => {
//     console.log('Data save failed', err);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle removed successfully');
// }).catch((err) => {
//     console.log('Error in removing isSingle', err);
// });

//   database.ref().set(aboutme).then(() => {
//       console.log('Data saved correctly');
//   }).catch((err) => {
//       console.log('Data save failed', err)
//   });

//   database.ref().set({
//       ...aboutme,
//       age: 37
//   });

//   database.ref('age').set(36);
//   database.ref('location/city').set('Bridgewater');

//   database.ref('attributes').set({
//       height: '5 ft 2 in',
//       weight: '170 lbs'
//   });