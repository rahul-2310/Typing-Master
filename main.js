window.addEventListener('load',init);

//  Available Levels
const levels = {
    easy:3,
    medium:3,
    hard:1
} 


// To Change current Level
const currentLevel = levels.easy;

// Globals
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Array of Words
const words=[
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
];

function init(){
    //Load word from array
    showWord(words);
    // show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //start matching word input
    wordInput.addEventListener('input',startMatch)
    //call countdown every second
    setInterval(countdown,1000);
    // check Status
    setInterval(checkStatus,50); 

}


function showWord(words){
    
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // console.log(word[randIndex]);
    currentWord.innerHTML = words[randIndex];
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value="";
        score++;
    }
    scoreDisplay.innerHTML = score;
    // If score is -1 then display 0
    if(score === -1)
    scoreDisplay.innerHTML = 0;
    else
    scoreDisplay.innerHTML = score;

}

function matchWords(){
    //console.log(wordInput.value);
    if(wordInput.value == currentWord.innerHTML){
        message.innerHTML = 'Correct...!!!'
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}
function countdown(){
    //Make sure time is not running
    if(time>0){
        //decrement
        time--;
    }
    else if(time ==0){
        //Game Over
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}



// Check Game Status
function checkStatus(){
    if(!isPlaying && time ==0){
    message.innerHTML = "Game Over  !!!";
    score = -1;
    }
}