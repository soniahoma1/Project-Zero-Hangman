let words = ["myles","eduardo","angel","marlene","aurelie","anca","kris","kita","cat","jacob","julia","jesus","christian","leighann","johnson","steven","carson","brock","allen","kesha"]
let imgURL = []
let guessedLetters = []
let guessCount = 0;
let wrongGuesses = 0;
let maxWrongGuesses = 9;
let content


 let guess_container = document.querySelector('.guess_container')
//  // changing the text of the element we grabbed
//  console.log(guess_container)
 
 
 //randomly select a word (Math.random())
 let randomName = words[Math.floor(Math.random()*words.length)]

 
//     
function generateWord() {
    randomName = words[Math.floor(Math.random()*words.length)]
    console.log(randomName)
    let container = document.querySelector('words_container')
    content = Array(randomName.length).fill('_')
    
}
function renderWord() {
    // delete the old word
    // take content and add it to the html
    console.log(guess_container)
    guess_container.innerHTML = content.join(' ');
    // loop through each element in content
    // and add it as an li to the ul
    
};

generateWord()
renderWord()

const keyboard = document.querySelectorAll('.letter');
for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener('click', function(event){
    
        let letter = event.target.innerHTML
        console.log(letter)
        if (randomName.includes(letter) === true && wrongGuesses < maxWrongGuesses){
            //put the letter into the _______
            for (let i = 0; i <content.length; i++) {
                if (letter === randomName[i]){
                    content[i] = letter 
                }
            //replace the letter in content at index i 
            }
            console.log({content})
            renderWord()
            if(!checkUnderscores()){
                window.alert("You Won!");
            }
        //if guess is wrong
        } else {
            wrongGuesses++;
            // document.getElementById('hangman').setAttribute("src",`./images/img2.gif`)
            //check number of guesses
            function renderHangman(numWrong){
                if (numWrong < maxWrongGuesses) {
                    document.getElementById('hangman').setAttribute("src",`./images/img${numWrong+1}.gif`)
                } else {
                    document.getElementById('hangman').setAttribute("src",`./images/img10.gif`)
                }
            }
            renderHangman(wrongGuesses);
            if (wrongGuesses === 9) {
                window.alert("You Lost!");
            }  
}})}
function checkUnderscores() {
    console.log({content})
    if (content.includes("_")){
        console.log('yeet')
        return true
    }
    else{
        console.log('beep')
        return false
    }
}
//if (maxWrongGuesses === 9){
 //   window.alert("You lost");
// if wrongGuesses < maxWrongguesses && underscores are all replaced) 
// window.alert("You won");

reset = document.getElementById('reset');
reset.addEventListener('click', gameRestart);
 
  function gameRestart(){
      generateWord();
      renderWord();
      wrongGuesses = 0;
      document.getElementById('hangman').setAttribute("src",`./images/img${wrongGuesses+1}.gif`);
  }

hint = document.getElementById('hint');
hint.addEventListener('click', hints);
   
function hints() {
  prompt = "Someone in this Room";
  alert("Someone in this Room");
}
