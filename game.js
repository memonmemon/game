// var user_number = document.getElementById("user_number");
// var random_number = document.getElementById("random_number");
// var result = document.getElementById("result");
// var box_info_result = document.getElementById("box_info_result");
// var win_html = document.getElementById("win");
// var loss_html = document.getElementById("loss");
// var total = document.getElementById("total");
// var msg = document.getElementById("msg");

// var count = 10;
// var win = 0;
// var loss = 0;
// function tryBest(userNumber) {
//     // alert(userNumber);
//     var randomNumber = Math.random() * 6;
//     var ceil = Math.ceil(randomNumber);
//     console.log(ceil);
//     user_number.innerText = userNumber;
//     random_number.innerText = ceil;

//     total.innerText = --count;
//     if(ceil === userNumber){
//         console.log("user wins");
//         result.innerText = "you won";
//         box_info_result.style.backgroundColor = "yellow";
//         result.style.color = "white";
//         win_html.innerText = ++win;}
//         else{
//             result.innerText = "you loss";
//             box_info_result.style.backgroundColor = "red";
//             result.style.color = "white"
//             loss_html.innerText = ++loss;
//         }
//         checkResult();
//     }

//     function checkResult(){
//         if (count == 0){
//             if(win >= 3){
//                 msg.innerText = "congrats";
//             }
//             else{
//                 msg.innerText = "sorry";
//             }
//             count = 10;
//             win = 0;
//             loss = 0;
//             total.innerText = count;
//             win_html.innerText = loss;
//             loss_html.innerText = win;
//         }
//     }


let h1 = document.querySelector('h1');
let buttons = document.querySelectorAll('.btns .button');
let userResult = document.querySelector('.results .user input');
let cpuResult = document.querySelector('.results .cpu input');
let turn = document.querySelector('.turns-wins-lose .turn');
let win = document.querySelector('.turns-wins-lose .win');
let lose = document.querySelector('.turns-wins-lose .lose');
let body = document.querySelector('body');

let turnScore = 10;
let winScore = 0;
let loseScore = 0;
turn.innerHTML = `Turn: ${turnScore}`;


function diceValue(userNumber) {
    userResult.value = userNumber;

    let randomNumber = Math.floor(Math.random() * 6);

    cpuResult.value = randomNumber;

    turnScore--;
    turn.innerHTML = `Turn: ${turnScore}`;

    if(turnScore < 1){
        turnScore = 0; 
        turn.innerHTML = `Turn: ${turnScore}`;
        alert('Your Turn is Complete \n Please Click the Reset Button and Play Again!');
    }

    resultCheck();

};

function resultCheck() {    
    if(userResult.value === cpuResult.value){
        h1.style.color = 'green';
        h1.innerHTML = `You're Winner`;
        winScore++;
        win.innerHTML = `User Win: ${winScore}`
        body.style.boxShadow =  '10px 10px 100px green inset';
        setTimeout(changeH1, 1000)
    }else{
        h1.style.color = 'red';
        h1.innerHTML = `You're Losser`;
        loseScore++;
        lose.innerHTML = `Cpu Win: ${loseScore}`
        body.style.boxShadow =  '10px 10px 100px red inset';
        setTimeout(changeH1, 1000)
    }
}

function changeH1() {
    h1.style.color = '';
    h1.innerHTML = `Dice Game`
    body.style.boxShadow = '';
};