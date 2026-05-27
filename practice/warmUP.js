// generate a number between 0 to 16


// console.log(Math.floor(Math.random()*17));


// let arr = [1,5,3, 'm','a',10];
// arr = arr.filter((ele)=> typeof(ele)=='string')
// console.log(arr);

// let arr = [3,65,2,8,19];
// let max=arr[0];
// for(let i=1;i<arr.length;i++){
//     max= Math.max(arr[i],max);
// }
// console.log(max);
// console.log(Math.max(...arr))


// let obj = {
//     name: 'MKL',
//     age: 21,
//     city: 'bhagalpur',
// }

// console.log(Object.keys(obj).length)


// 7.****
// let arr = [
//     {
//         name: 'manas',
//         gender: 'male',
//     },
//     {
//         name: 'muskan',
//         gender: 'female',
//     },
//     {
//         name: 'harshit',
//         gender: 'male'
//     }
// ]

// arr= arr.filter((ele)=> ele.gender=='male')
// console.log(arr);

// // 8.****
// let arr = ['alu', 'gobi', 'halwa', 'mkl'];
// arr = arr.map(ele=>ele.toLocaleUpperCase())
// console.log(arr);
// let arr = [3,65,2,8,19];
// arr=arr.map(ele=>ele*2);
// console.log(arr);

// let arr = [3,65,2,8,19];
// arr= arr.join('&');
// console.log(arr);


// 12.****
// let arr = [1,2,3,4, ['a',[2,5],'b','c'], 5, 6];
// // console.log(arr.flat(1));
// console.log(arr.flat(2));

// 13.*****
// let arr = [1,2,3,12,'5']

// function isNumber(localArr){
//     let flag=true;
//     localArr.forEach(element => {
//         if(typeof(element)=='string'){
//             flag=false;
//         }
//     });
//     return flag;
// }

// console.log(isNumber(arr));

// function isPrime(num){
// if(num<=1){
//     return false;
// }
// for(let i=0;i<Math.ceil(Math.sqrt(num));i++){
//     if(num %i==0){
//         return false;
//     }
// }
// return true;
// }
// console.log(isPrime(7));


function removeDuplicate(arr){
    let st= new Set();
    for(let i=0;i<arr.length;i++){
        st.add(arr[i]);
    }
    return [...st];
}

let resultArr = removeDuplicate([1,2,2,5,2,3,4,1])

console.log(resultArr)
