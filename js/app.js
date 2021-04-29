'use strict'; 

let userName = prompt('What is your name?');
alert('Welcome' +' '+ userName);
document.write('Welcome' +' '+ userName);

let counTry = prompt('Am I from Jordan?');
  
switch (counTry.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(counTry);
        alert('True');
    break; 
         
     case 'no':
     case 'n':
         //console.log(counTry);
         alert('wrong answer');
         break;
    default:
         console.log('type your answer in a small letters');
}
   

  let woRk = prompt('Am I working currently?');
  
  switch (woRk.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(woRk);
        alert('A wrong answer, I still have no Job :(!');
    break; 
         
     case 'no':
     case 'n':
         //console.log(woRk);
         alert('correct unfortunatelly! :D');
         break;
    default:
         console.log('type your answer in a small letters');
}

  let coLor = prompt('Is My Favorite color Violet?');


  switch (coLor.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(coLor);
        alert('Correct, I am in love with this color!');
    break; 
         
     case 'no':
     case 'n':
         //console.log(coLor);
         alert('wrong answer, Violet is my favorite!');
         break;
    default:
         console.log('type your answer in a small letters');
}

  let aGe = prompt('Is my age seems to be more than 25?');

  switch (aGe.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(aGe);
        alert('NO! Still 23');
    break; 
         
     case 'no':
     case 'n':
         //console.log(aGe);
         alert('Exactly, I am 23');
         break;
    default:
         console.log('type your answer in a small letters');
}

 let reAd = prompt('is it correct that my favorite hobby is Drwing?');
 
 
 switch (reAd.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log(reAd);
        alert('Definetly wrong, I know nothing about it');
    break; 
         
     case 'no':
     case 'n':
         //console.log(reAd);
         alert('Correct, My first I admire Reading the most!');
         break;
    default:
         console.log('type your answer in a small letters');
}


alert('Welcome' +' '+ userName);