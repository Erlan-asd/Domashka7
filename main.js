const obj = {
    a: 10,
    b: null,
    c: "string",
    d: null,
    e: "another string"
};

// 1)-------------------------------------------------------

// for (let key in obj){
//     console.log(key);
// }

// 2)-------------------------------------------------------
// for (let key in obj) {

//     if (obj[key] === null) {
//         delete obj[key]
//         console.log(obj);
//     }
// }

// 3)-------------------------------------------------------

// for (let key in obj) {
//     if(key.length >= 0){
//         console.log('объект содержит эти свойства',key);
//     }
//     else{
//         console.log('объект не содержит свойство',key);
//     }
// }

// 4)-------------------------------------------------------

// let sum = 0
// for(let key in obj){
//     if(typeof obj[key] === 'number'){
//         sum = sum + obj[key]
        
//     }
//     console.log(sum);
// }



// 5)-------------------------------------------------------

// const studentsByClass = [
//     ["1A", ["Alice", "Bob", "Charlie"]],
//     ["2B", ["David", "Emily", "Frank"]],
//     ["3C", ["Grace", "Henry", "Ivy"]]
// ];

// studentsByClass.forEach(classArray => {
//     const className = classArray[0];
//     const students = classArray[1].join(', ');
//     console.log(`Class: ${className} - ${students}`);
// });