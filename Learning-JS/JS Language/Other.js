// Object
let animal = {
    name : "Zebra",
    leg : 4
}

for(key in animal){
    console.log(animal[key])
}

// Dot Notation
console.log(animal.leg);

// Bracket Notation
console.log(animal["leg"]);

// Arrays
let names = ["Rahul", "Subodh", "Tiwari"];
for(name in names){
    console.log(names[name])
}
