class Dice{
    constructor(numberOfDice=1){
        this.numberOfDice = numberOfDice;
        this.MIN=1;
        this.MAX=6;
        
    }
    rollDice(){
        let total=0;
        for(let i=0;i<this.numberOfDice;i++){
            total+= Math.floor(Math.random()*this.MAX)+this.MIN;
        }
        return total;
    }
}
module.exports = Dice;