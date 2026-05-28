// let myArr = [1, 2, 3, 4, 99, 1000];

// letResult = myArr.filter(ele=>ele%2==0);
// console.log(letResult);


//pure function

// function sum(a,b){
//     return a+b;
// }
// let result = sum(2,3);
// console.log(result);


//reduce
// const numbers = [10, 20, 30, 40];
// const total= numbers.reduce((acc, curr)=>{
//     return acc+curr;
// }, 11)
// console.log(total);

// const people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 21 }
// ];

// const groupByAge = people.reduce((acc,obj)=>{
//     if(!acc[obj.age]){
//         //  obj.age = [];
//         acc[obj.age] = [];
//     }
//      acc[obj.age].push(obj);
//     return acc;
//     // return acc[obj.age].push(obj);

// },{});

// console.log(groupByAge);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//  const fruitCount = fruits.reduce((acc,fruit)=>{
//     if(!acc[fruit]){
//         acc[fruit]=0;
//     }
//     acc[fruit]++;
//     return acc;
//  },{});
//  console.log(fruitCount);



//loose coupling

// let endPoint = "https://www.example.com"


// function fetchData(endpoint, route){
//     console.log(`Fetching data from ${endpoint}${route}...`);
// }
// fetchData(endPoint, '/users');
// fetchData(endPoint, '/orders');
// fetchData(endPoint, '/products');



function fetchData(fn){
    let endpoint = "https://www.example.com"
    fn(endpoint);
}

function getUser(endpoint){
    console.log(`Fetching user data from ${endpoint}/users`);
}
function getOrders(endpoint){   
    console.log(`Fetching orders data from ${endpoint}/orders`);
}
function getProducts(endpoint){
    console.log(`Fetching products data from ${endpoint}/products`);
}

fetchData(getProducts);
