// // //alert('hello');

// // var b = 'smoothie';
// // console.log(b);

// // function fun(){
// //     alert('this is a functuion');
// // }

// // //fun();

// // //lets crate a function a return name with appended string to it

// // function greeting(){
// //     var name = prompt('What is your name');
// //     var result = 'Hello ' + name;
// //     console.log(result);
// // }

// // //greeting();


// // function sumNumbers(a, b){
// //     var c = a + b;
// //     return console.log(c);
    
// // }

// // sumNumbers("Hello"," There");

// // function greeting(yourName){
// //     var result = 'Hello' + ' ' + yourName;
// //     console.log(result);
// // }

// // var name = prompt('What is your name?');
// // greeting(name);

// // var num = 0;

// // while(num < 100){
// //     num += 1;
// //     console.log(num);
// // }

// // for (let num = 0; num <= 100; num++){
// //     console.log(num);
// // }

// // //Data types
// // var yourAge = 18; //number
// // let yourName = 'Bob';
// // let name = {first: 'Jane', last: 'Doe'}; //Object

// // console.log(name);

// let fruits = ['banana', 'apple', 'orange', 'pineapples'];
// console.log(fruits[2]);

// fruits[0] = 'pear';
// console.log(fruits);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// console.log('to string', fruits.toString());
// console.log(fruits.join(' * '));
// console.log(fruits, fruits.pop(), fruits);
// console.log(fruits, fruits.push('blackberries'), fruits);
// console.log(fruits[4]);
// fruits[fruits.length] = 'new fruit';
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift('kiwi');
// console.log(fruits);

// let vegetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);
// console.log(allGroceries.slice(1, 4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());

// let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(someNumbers.sort(function(a, b) {return a-b}));//ascending order
// console.log(someNumbers.sort(function(a, b) {return b-a}));//discending order

// let emptyArray = new Array();
// for (let num = 0; num < 10; num++){
//     emptyArray.push(num);
// }
// console.log(emptyArray);

// let student = {
//     first: 'Rafel', 
//     last: 'Kazi', 
//     age: 25, 
//     height: 170,
//     studentInfo: function(){
//         return this.first + '\n' + this.last + '\n' + this.age;
//     }
// };
// console.log(student.first);
// console.log(student.last);
// //student.first = 'notRafeh';
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());

// //constionals, control flows(if else)

// //var age = prompt('what is your age?');29
// // if ((age >= 18) & (age <= 35)){
// //     status = 'target demo';
// // } else {
// //     status = 'not my audience';
// // }

// //switch statment
// //if every day was a wek day
// switch (6){
//     case 0:
//         text = 'Sunday';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         text = 'weekend';
//     break;
//     default:
//         text: 'weekday';
// }

// console.log(text);

// alert('hello');
// console.log('hello');

//Chalenge 1: your age in days
function ageInDays(){
    var birthYear = prompt("What year were you bor ... Good friend?");
    var ageInDayss = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log(ageInDayss);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "static/images/giphy.gif";
    div.appendChild(image);
}

function rpsGame(yourChoice){
    console.log(yourChoice.src);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results); 
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore == 0){
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore == 0.5){
        return {'message': 'You tied', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Change the colors of all buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red'){
        buttonRed();
    } else if (buttonThingy.value === 'green'){
        buttonGreen();
    } else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    } else if (buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonRed(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices =['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//blackjack game

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCard();
    //console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    //console.log(YOU['score']);
    }
    
}

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer){

    if (activePlayer['score'] <= 21) {
         let cardImage = document.createElement('img');
         cardImage.src = `static/images/${card}.png`;
         document.querySelector(activePlayer['div']).appendChild(cardImage);
         hitSound.play();
    }
    
}

function blackjackDeal(){
    // let winner = computeWinner();
    // showResult(winner);
    //showResult(computeWinner());
    if (blackjackGame['turnsOver'] === true){
 
    blackjackGame['isStand'] = false;
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for( i = 0; i < yourImages.length; i++){
         yourImages[i].remove();
    }

    for( i = 0; i < dealerImages.length; i++){
        dealerImages[i].remove();
   }

   YOU['score'] = 0;
   DEALER['score'] = 0;

   document.querySelector('#your-blackjack-result').textContent = 0;
   document.querySelector('#dealer-blackjack-result').textContent = 0;

   document.querySelector('#your-blackjack-result').style.color = '#ffffff';
   document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';
   // dealerImages.log(yourImages);

   document.querySelector('#blackjack-result').textContent = "Let's play";
   document.querySelector('#blackjack-result').style.color = "black";
   
   blackjackGame['turnOver'] = turn;
   
    }
   
}

function updateScore(card, activePlayer){
    if (card === 'A'){
        // If adding 11 keeps me below 21, add 11, Otherwise, add 1
            if (activePlayer['score'] + blackjackGame['cardsMap'][1] <= 21){
                activePlayer['score'] += blackjackGame['cardsMap'][card][1];
         } else {
             activePlayer['score'] += blackjackGame['cardsMap'][card][0];
         }
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card];
        }
       
    }
    
function showScore(activePlayer) {
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
    
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){

    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true){
         let card = randomCard();
         showCard(card, DEALER);
         updateScore(card, DEALER);
         showScore(DEALER);
         await sleep(1000);
    }
   
    
    
        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        //console.log(blackjackGame['turnsOver']);
  
}

// compute winner and return who just won
function computeWinner(){
    let winner;

    if(YOU['score'] <= 21){
        // condition: higher score than dealer or when dealer busts but you're 2
        if(YOU[score] > DEALER['score'] || (DEALER['score'] > 21)){
            blackjackGame['wins']++;
            //console.log('You won!');
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            //console.log('You losts!');
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }

        //condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        //console.log('You lost!');
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
        //console.log('You drew');
    }

    console.log(blackjackGame);
    return winner;
}

function showResult(winner){
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true){
         if (winner === YOU){
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = 'You won!';
        messageColor = 'green';
        winSound.play();
    } else if(winner === DEALER){
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        message = 'You won!';
        messageColor = 'green';
        winSound.play();
    } else {
        document.querySelector('#draws').textContent = blackjackGame['draws'];
        message = "You drew!";
        messageColor = 'black';
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color= messageColor;
    }

   
}