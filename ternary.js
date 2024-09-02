let price = 600;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price)


// Ternary Means three parts
// using ternary we can make above code shorter like below:

let price = 600;
const isLeader = false;
price = isLeader === true ? 0 : price + 100;
console.log(price);



// .............2nd code...............

const age = 18;

if(age >= 18){
    console.log('You are eligible to participate in voting')
}
else{
    console.log('sorry you are not eligible for vote')
}

2nd code using ternary

const age = 14;
age >= 18 ? console.log('you can vote') : console.log ('Sorry you cannot vote')



// .............3rd code...............

let price = 700;
isLeader = false;

price = isLeader === true ? 0 : price = price + 100;
console.log(price);




// .............4th code...............

let price = 1600;
isLeader = true;

if( isLeader ===true ){
    if(price > 500){
        price = price / 2;
    }
    else{
        price = 0;
    }
}

else{
    price = price + 100;
}
console.log(price);

   // 4th code using ternary:

let price = 600;
isLeader = false;

price = isLeader === true ? price > 500 ? price / 2 : 0 : price = price + 100;
console.log(price);
