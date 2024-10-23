let btn = document.querySelectorAll(".circle");
let h3 = document.querySelector('h3');
let restartbtn = document.querySelector('#restartbtn');
let my_score_text = document.querySelector('#myscore');
let comp_score_text = document.querySelector('#compscore');
let choices = ['rock', 'paper', 'scissor'];
let my_score = 0;
let computer_score = 0;
let computer_choices = () => {
 return choices[Math.floor(Math.random() * 3)];
}
btn.forEach((val) => {
 val.addEventListener('click', () => {
  let my_choice = val.getAttribute('id');

  let computer_choice = computer_choices();

  winning(my_choice, computer_choice);
 });
});


let winning = (my_choice, computer_choice) => {
 if (my_choice != undefined) {
  if ((my_choice == 'rock' && computer_choice == 'scissor') || (my_choice == 'paper' && computer_choice == 'rock') || (my_choice == 'scissor' && computer_choice == 'paper')) {
   h3.innerText = `YOU WIN`;

   my_score++;
   my_score_text.innerText = `you:${my_score}`;

  } else {
   if (my_choice == computer_choice) {
    h3.innerText = 'DRAW';

   } else {
    h3.innerText = 'COMPUTER WINS';

    computer_score++;
    comp_score_text.innerText = `comp:${computer_score}`;

   }
  }
 }

}

restartbtn.addEventListener('click', () => {
 h3.innerText = "";
 comp_score_text.innerText = "comp:0";
 my_score_text.innerText = "you:0";
})

