
var names =["abc", "axa", "adsasda","Asdd"];

function whoPay(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson
}

var dk = whoPay(names);
console.log(dk)