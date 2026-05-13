// object literals

// let obj ={
//     name :'Anurag',
//     age :28,
//     profession : 'Software Engineer',
//     // introduction(){
//     //     console.log(`Hi my name is ${this.name} and my age is ${this.age} and profession is ${this.profession}`);
//     // },
//         introduction(){
//         console.log(`Hi my name is ${this.name} and my age is ${this.age} and profession is ${this.profession}`);
//     }
// }
// obj.introduction();

//object through factory function

// function introduce(name, age, profession){
//     return {
//         name,
//         age,
//         profession,
//         about(){
//             console.log(`Hi my name is ${name} and my age is ${age} and profession is ${profession}`);
//         }
//     }
// }

// let obj2= introduce('anurag', 28, 'software developer')

//object through constructor

// function introduction(name, age, profession) {
//     this.name = name
//     this.age = age,
//     this.profession = profession
//     // this.introd = function()
//     //     {
//     //     console.log(`Hi my name is ${this.name} and my age is ${this.age} and profession is ${this.profession}`);
//     // }
// }
// introduction.prototype.introd = function(){
//         console.log(`Hi my name is ${obj3.name} and my age is ${obj3.age} and profession is ${obj3.profession}`);
//     }

// let obj3 = new introduction('anurag', 28, 'software eingineer')

//through class

// class Student{
//     constructor(name, age, profession){
//         this.name= name;
//         this.age = age;
//         this.profession = profession
//     }
//     introduce(){
//         console.log(`Hi my name is ${this.name} and my age is ${this.age} and profession is ${this.profession}`);
//     }

// }
// let obj4 = new Student('anurag', 28,'software engineer');
// obj.introduce();

// class car{
//     #fuel=100;
//     constructor(type){
//         this.type=type;

//     }
//     #burnfuel(){
//         this.#fuel-=10;
//     }
//     getfuel(){
//         console.log('current fuel',this.#fuel);
//     }
//     setfuel(){
//         this.#fuel = 500;
//     }
//     start(){
//         this.#burnfuel();
//         console.log(`${this.type} car started`);
//     }

// }
//  let obj = new car('maruti');
//  obj.start();
//  obj.start();
//  console.log(obj.fuel);
// //  obj.burnfuel();
//  obj.getfuel();
//  obj.setfuel();
//  obj.getfuel();

// using getter and setter

//  class car{
//     #fuel=100;
//     constructor(type){
//         this.type=type;

//     }
//     #burnfuel(){
//         this.#fuel-=10;
//     }
//     get fuelvehicle(){
//         console.log('current fuel',this.#fuel);
//     }
//     set fuelvehicle(quant){
//         this.#fuel = quant;
//     }
//     start(){
//         this.#burnfuel();
//         console.log(`${this.type} car started`);
//     }

// }
//  let obj = new car('maruti');
//  obj.start();
//  obj.start();
// //  obj.#burnfuel();
// //  console.log(obj.#fuel);
// //  obj.burnfuel();
//  obj.fuelvehicle;
//  obj.fuelvehicle=500;
//  obj.fuelvehicle;

// // inheritance
// class car{
//     constructor(brand){
//         this.brand=brand;
//     }
//     drive(){
//         console.log(`${this.brand} car is driving`);
//     }
// }

// class ElecrticCar extends car{

//     charge(){
//         console.log(`${this.brand} car is chargeing`);
//     }
// }
// let obj = new ElecrticCar('maruti');
// obj.drive();
// obj.charge();

//polymorphism
class MediPlayer {
  play() {
    console.log("playing media");
  }
}

class music extends MediPlayer {
  play() {
    console.log("playing music");
  }
}
class video extends music {
  play() {
    console.log("playing video");
  }
}

let obj = new video();
obj.play();

let obj2 = new music();
obj2.play();

let obj3 = new MediPlayer();
obj3.play();

// oops