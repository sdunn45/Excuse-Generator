window.onload = function(){
  
  var first = 'A ';
  let what = ['four eyed ', 'nuclear ', 'angry ', 'lonely ','crazy ','glowing ','smelly ','slow ','old ' ];
  let who = [' bear ','racoon ',' dog ', ' hobo ', ' lobster ', 'comedian ', ' Bigfoot '];
  let action = ['took my ', 'threw my ', 'yelled at my ' , 'kicked my ', 'stole my ', 'burned my ', 'bit my ', 'hit my '];
  let possetion = ['toe ', 'car ', 'watch ', 'shoe ', 'wallet ', 'shirt ', 'keys ', 'computer ', 'phone ', 'sandwich '];
  let where = ['on the street','in my house','in my driveway', 'in front of the office', 'near the mall', 'near the toilet', 'at the bus station'];
  

   var rdm1 = Math.floor((Math.random() * what.length) );
   var rdm2 = Math.floor((Math.random() * who.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    
    document.querySelector('#theexcuse').innerHTML = first + what[rdm1] + who[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];
} 