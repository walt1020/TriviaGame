

var win = false;
var answersRight = 0;
var answersWrong = 0;

var firstQuestion = {question: "How Long Have Jellyfish Been Around?", answer1: "650 Million Years", answer2: "100 Million Years", answer3: "2,500 Years", answer4: "What's A Jellyfish?"};
var secondQuestion = {question: "Where Do Penguins Live?", answer1: "The Amazon", answer2: "India", answer3: "Madagascar",answer4: "Antarctica"};
var thirdQuestion = {question: "How Many Light Bulbs Can an Electric Eel Light?" , answer1: "1", answer2: "0", answer3: "10", answer4: "7"};
var fourthQuestion = {question:"Which Animal Uses Echolocation?", answer1: "Whale", answer2: "Sea Urchin", answer3: "Sea Sponge", answer4: "Coral"};
var fifthQuestion = {question: "How Many Hearts Does an Octopus Have?", answer1: "1", answer2: "3", answer3: "8", answer4: "4"};
var sixthQuestion = {question: "How Loud is A Whale's Call?", answer1: "65 Decibels", answer2: "188 Decibels", answer3: "113 Decibels", answer4: "79 Decibels"};
var seventhQuestion = {question: "Where is a Shrimp's Heart?", answer1: "In its Tail", answer2: "In its Abdomen", answer3: "In its Head", answer4: "Shrimps Have No Heart"};
var eighthQuestion = {question: "Which is the Largest Fish?", answer1: "Sturgeon", answer2: "Clownfish", answer3: "Minnow", answer4: "Tuna"};
var ninthQuestion = {question: "Moby Dick Was A Giant...", answer1: "Sea Sponge", answer2: "Walrus", answer3: "Sunfish", answer4: "White Whale"};
var tenthQueston = {question: "How Long Can A Lobster Live?", answer1: "7 Years", answer2: "4 Years", answer3: "Forever, They Are Functionally Immortal", answer4: "30 years"};


var timer = {start: 90};
setTimeout(countDown,1000);

function countDown(){
   timer.start --;
   if(timer.start > 0){
      setTimeout(countDown,1000);
   }

   else{
	showResults();
   }
   
   console.log(timer.start);
   $("#timerBox").html(timer.start);
}



function showResults() {
	$("#container").css("height", "95%");
	$("#container").html("Correct Answers: " + answersRight + "<br>");
	$("#container").append("Incorrect Answers: " + answersWrong);

}


// I realize that I need to increment the correct answers and wrong answers, and format the div that appears when the timer 
// hits 0, but I really struggled seeing whether a clicked radio button was true or false, which would determine a correct answer.

//I need to determine if the radio clicked returns as "checked", and I know that's what I need to do but I've googled it and troubleshot
//and I can't get it done. Next time I will start earlier, and I will for sure come back to this project to update it and make
//it look better than it does now. 

//also, I tried to dynamically create the radio buttons but could not determine how to connect the right information between questions.
//So, therefore, I just did all the radio buttons in HTML



	


