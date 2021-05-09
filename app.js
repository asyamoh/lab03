alert('welcome')
 

var firstName = prompt('what is your name?? ')

var userChoice = prompt('Whats your favourite skincare  cleanser or serum??')


if(userChoice === 'serum'){
  document.write('<img src="https://www.annahar.com/Library/Images/Uploaded%20Images/2020/10/28/Fadia/8-La-Roche-Posay-Effaclar-Serum.jpg">')
}else if(userChoice === 'cleanser'){
  document.write('<img src="https://www.kiehls.ae/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-kie-master-catalog/default/dwe1be2851/Products/Skincare/Centella_FacialCleanser250ml.jpg?sw=465&sh=390&sm=fit&q=70"?fit=around%7C248:139.5">')
}else {
  alert('okay you should only pick serum or cleanser')
}

 

alert( firstName )

var welcoming = "  good morning Beautiful"



console.log(firstName + welcoming)
alert(firstName + welcoming)
 

confirm("gooddayy!");


function userChoice(){
var userChoice = prompt('your fvrt proooduct?')




while(userChoice !== 'serum' && userChoice !=='cleanser'){
  userChoice = prompt('Try again !')
}
}
gettingChoice()



var productCount = prompt('How many Products do you want to see ?')
function gettingChoice(){


var image = ''
for(var x = 0; x < productCount ;x++){
  if(userChoice ==='serum'){
    image = image + '<img src="https://www.annahar.com/Library/Images/Uploaded%20Images/2020/10/28/Fadia/8-La-Roche-Posay-Effaclar-Serum.jpg">'
  }else if( userChoice ==='cleanser'){
    image = image + '<img src ="https://www.kiehls.ae/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-kie-master-catalog/default/dwe1be2851/Products/Skincare/Centella_FacialCleanser250ml.jpg?sw=465&sh=390&sm=fit&q=70"?fit=around%7C248:139.5">'
  }
}
  document.write(image)

  }

gettingChoice()



var rating = prompt ('on scale from 0-10 how much do you like our service :D?')


 while(rating !== '10' && rating !=='0'){
 rating = prompt('Try again :( !')
}
 
 


if(rating === '10'){
  document.write('<img src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSh9MMVkc6Qm8nUlIutChBckqQCbjW4tq3LLm21YaturDkuKxYNZnWz_CkPjaIQ-Xmx0jqHRY1Z1LhqCpV6-rKFn_xqaLNsgHYZx.png?r=501">')
}

if(rating === '0'){
  document.write('<img src = "https://i.kym-cdn.com/photos/images/newsfeed/001/080/651/4a9.jpg">')
}




