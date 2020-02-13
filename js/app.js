words = ["myles","eduardo ","angel", "marlene","aurelie","anca","kris","kita","cat","jacob","julia","jesus","christian","leighann","johnson","steven","carson","brock","allen","kesha"]
imgURL = []
guessedLetters = []
guessCount = 1;
let content

// // example of querySelector to grab an element on the DOM
 let guess_container = document.querySelector('.guess_container')
//  // changing the text of the element we grabbed
//  console.log(guess_container)
 
 
 //randomly select a word (Math.random())
 let randomName = words[Math.floor(Math.random()*words.length)]
 //word.length
 
 
 // for (let i = 0; i < length of word) {
     //       let li = document.createElement('li')
     //       li.innerHTML ="_" 
     //       container.appendChild(li)
//     }
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
        if (randomName.includes(letter) === true ){
            //put the letter into the _______
            for (let i = 0; i <content.length; i++) {
                if (letter === randomName[i]){
                    content[i] = letter 
                }
            //replace the letter in content at index i 
            }
            console.log(content)
            renderWord()
        
        } else {
            document.getElementById('hangman').setAttribute("src",`./images/img2.gif`)
        } 
    });
}
     

