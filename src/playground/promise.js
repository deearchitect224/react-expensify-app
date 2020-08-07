const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Divya',
            age: 36
        });
        //reject("Something went wrong");
    }, 3000);
});
console.log("before");

promise.then((data) => {
    console.log('1',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');
            //reject("Something went wrong");
        }, 5000);
    });;
}).then((str) => {
    console.log('does this run?', str)
}).catch((error)=> {
    console.log(error);
});
console.log("after");
