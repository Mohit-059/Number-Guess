let triesLeft=5;
let score=0;
let rand=Math.floor(Math.random()*10)+1;

let ting = new Audio("ting.mp3");
let finish = new Audio("gameover.mp3");
let music = new Audio("music.mp3");
let speaker = document.querySelector(".speaker")
speaker.addEventListener("click",()=>{
    if(music.paused){
        music.play();
        speaker.src="on.svg"
        classList.add("playing");
    }
    else{
        music.pause();
        speaker.src="stop.svg"
        classList.remove("playing");
    }
})

function selectButton(button,value){
    
    if (triesLeft <= 0) {
        return;
    }
    triesLeft--;

    // Get the user input value
    let userGuess = value;

    // Check if the user's guess matches the random number
    if (userGuess === rand) {
        document.querySelector(".info").innerText = "Congratulations! You guessed it right!"+`Your Score is : ${triesLeft}/5`;
        document.querySelector(".frame h1").innerText = rand;
        finish.play();
    } else {
        if (triesLeft > 0) {
            document.querySelector(".info").innerText = `Try again. ${triesLeft} tries left.`;
            ting.play();
        } else {
            document.querySelector(".info").innerText = "Game over. You've used all your tries.\n The number has been displayed above";
            document.querySelector(".frame h1").innerText = rand;
            finish.play();
        }
    }
}
    
document.getElementById("reset").addEventListener("click", () => {
    // Reset triesLeft 
    triesLeft = 5;
    document.querySelector(".info").innerText = `You have ${triesLeft} tries left.`;

    // Generate a new random number
    rand = Math.floor(Math.random()*10)+1;
    document.querySelector(".frame h1").innerText = "?"; 
});

