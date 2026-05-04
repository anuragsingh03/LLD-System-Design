//  let obj = {
//     tax: function(){
//         console.log('Hello Your tax is deducted');
//     },
//     saving(){
//         console.log('your money has been saved')
//     }
//  }
// obj.tax();

// class ToyotaCars{
//     constructor(brand, mileage){
//         this.brandName=brand;
//         this.mileage= mileage;
//     }
//     start(){
//         console.log('start')
//     }
//     stop(){
//         console.log('stop')
//     }
// }

// let fortuner= new ToyotaCars('fortuner',12);
// // fortuner.setBrand('hyryder')
// console.log(fortuner);

// class Person{
//     constructor(){
//         this.species ='human';
//     }

//     eat(){
//         console.log('eat');
//     }
//     sleep(){
//         console.log('sleep')
//     }
// }

// class Engineer extends Person{
//     // constructor(){
//     //     this.type ="Software Engineer";
//     // }
//     work(){
//         console.log('solve problem, build something')
//     }
// }

// let obj = new Engineer();


class Person{
    constructor(){
        this.species ='human';
        this.type ="Software Engineer";
    }

    eat(){
        console.log('eat');
    }
    sleep(){
        console.log('sleep')
    }
}

class Engineer extends Person{
    constructor(){
        super();
    }
    work(){
        super.eat();
        console.log('solve problem, build something')
    }
}

let obj = new Engineer();
