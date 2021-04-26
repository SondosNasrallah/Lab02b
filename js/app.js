 'use strict'; 

let userName = prompt('What is your name?');
alert('Welcome' +' '+ userName);
document.write('Welcome' +' '+ userName);

let counTry = prompt('Are you from Jordan?');
  
switch (counTry.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(counTry);
        alert('I\'m from Jordan Too!');
    break; 
         
     case 'no':
     case 'n':
         //console.log(counTry);
         alert('Welcome where ever are you from!');
         break;
    default:
         console.log('type your answer in a small letters');
}
   

  let woRk = prompt('Are you working currently?');
  
  switch (woRk.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(woRk);
        alert('Good Luck!');
    break; 
         
     case 'no':
     case 'n':
         //console.log(woRk);
         alert('wish you find a job soon!');
         break;
    default:
         console.log('type your answer in a small letters');
}

  let coLor = prompt('Is your favorite color Red?');


  switch (coLor.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(coLor);
        alert('my favorite color is Red too!');
    break; 
         
     case 'no':
     case 'n':
         //console.log(coLor);
         alert('All colors are beautifu!');
         break;
    default:
         console.log('type your answer in a small letters');
}

  let aGe = prompt('Is your age more than 18?');

  switch (aGe.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(aGe);
        alert('So You are adult!');
    break; 
         
     case 'no':
     case 'n':
         //console.log(aGe);
         alert('You are so young!');
         break;
    default:
         console.log('type your answer in a small letters');
}

 let reAd = prompt('Do you love reading?');
 
 
 switch (reAd.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(reAd);
        alert('Awesome!');
    break; 
         
     case 'no':
     case 'n':
         //console.log(reAd);
         alert('I wish at least you try to!');
         break;
    default:
         console.log('type your answer in a small letters');
}


alert('Welcome' +' '+ userName);