function getMilk(money, costPerBottle) {
    console.log("buy "+calcBottels(money,costPerBottle)+" bottels  of milk");
    return calcChange(money,costPerBottle);
}

function calcBottels(startingMoney, costPerBottle) {
    var noOfBottels= Math.floor(startingMoney/costPerBottle);

    return noOfBottels;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount%costPerBottle; 
    return change;
    
}

console.log("Hello master, here is your "+getMilk(5,1.5)+" change");