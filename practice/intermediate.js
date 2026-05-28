// 16

// console.log(parseFloat('123.45'));
// console.log(Number('123.45'))

// console.log(parseInt("123.234px"))
// console.log(Number("123.234px"))

// 17

// console.log((0.1 + 0.2).toFixed(5) == 0.3);

// 19..

// let decimal = require('decimal.js');
// // console.log(typeof(decimal(0.10)));
// console.log(decimal(0.1).plus(0.2) == 0.3);//true

//20

// slice
// let string = 'anurag';
// let arr = ['a', 'n', 'u', 'r', 'a', 'g'];
// console.log(arr.slice(0,2));
// console.log(string.slice(0,2));
// console.log(arr,string);

// splice
// console.log(arr.splice(0,2,'1','2'));
// console.log(arr);

// 21.****

// let sentence = "Mai hun manas kumar lal"
// let words = sentence.split(' ');
// let arrRev=words.map(ele=>{
//     return ele.split('').reverse().join('');
// })
// console.log(arrRev.reverse().join(' '));

// 22.****

// let arr = [1, '55', 3, 'manas', 7, 1];
// let sum=0;
// arr.forEach(ele=>{
//     if(typeof(ele)=='number'){
//         sum+=ele;
//     }

// })
// console.log(sum);

//23.****

// let num = 123.234234

// console.log(Number.isInteger(111));

//24. reverse a number

// function reverseNumber(num){
//    return Number(num.toString().split('').reverse().join(''));
// }

//  let reverse = reverseNumber(24523454)
//  console.log(reverse);

// 25.****

// let string = "Manas Kumar Lal"

// function sortInAlphabeticalOrder(str){
//    return str.split('').sort().join('').trim();
// }
// console.log(sortInAlphabeticalOrder(string));

// 26.***

// let sentence = "hey i Am manas kumar lal";

// function capitalizeFirstLetterOfEachWord(str) {
//   let words = str.split(' ');
//   words = words.map((ele) => {
//     return ele.charAt(0).toUpperCase() + ele.slice(1);
//   });
//   return words.join(' ');
// }
// console.log(capitalizeFirstLetterOfEachWord(sentence));


//  27.*****
// function getArrayElement(arr,n){
//     if(n>=0 && n<arr.length){
//         return arr.slice(0,n);
//     }
//     return arr.splice(0);
// }
// let result = getArrayElement([1,2,3,4,5],2);   
// console.log(result);

//  28.****
// let str = "Manas";

// function getOccurenceOfEachCharacter(str){
//     let charCount={};
//     str.split('').forEach(ele=>{
//         if(!charCount[ele]){
//             charCount[ele]=1;
//         }
//         else{
//             charCount[ele]++;
//         }
//     })
//     return charCount;
// }

// console.log(getOccurenceOfEachCharacter(str));


// // 29.****
// let arr = [1, 5, 3, 4, 2, 3, 5, 2, 3, 2];

// function getOccurenec(arr){
//     let freqObj={};
//     arr.forEach(ele=>{
//         if(!freqObj[ele]){
//             freqObj[ele]=1       
//          }
//          else{
//             freqObj[ele]++;
//          }
//     })
// return Math.max(...Object.values(freqObj));;
// }
// console.log(getOccurenec(arr));

// 30.****

let arr = [1, 2, 3, 4, 5];
for(let i in arr){
    // console.log(i);
    let randIndex = Math.floor(Math.random()*arr.length);
    //swap
    let temp = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = temp;
}
console.log(arr);


