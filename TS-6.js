/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

//  condition:

let age = 1;
let isStudent = true;
let ticketFare = 800;

 ticketFare = age < 10 ? 'Ticket is free' : // Instead of free we can also write 0 
                   isStudent == true ? ticketFare /2 :
                  age >= 60 ? ticketFare *.85 : //fare 800tk X 0.85 = 680tk is 85% of the fare (after 15% discount price becomes 85%)
                  ticketFare;
 console.log(ticketFare);                 
