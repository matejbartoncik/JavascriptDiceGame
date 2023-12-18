document.addEventListener('DOMContentLoaded', clearScore);
let activePlayer=0;
let currentScoreValue_0 = 0 
let currentPlayer; 
let currentScore;
let player
let active
const throwDiceBtn = document.getElementById("throwDice")
const holdScoreBtn = document.getElementById("holdScore")
const newGameBtn = document.getElementById('newGame')
const diceRoll = document.querySelector('.diceRoll')
const diceImg = document.querySelector(".diceImg")
const Winner = document.getElementById('Winner')
function activePlayerNumber() {
    if (activePlayer===0){

      activePlayer++
   } else{
    activePlayer--
    }
    }


function decisionMaker() {
    if (activePlayer === 0) {
        activePlayer = 0;
        currentPlayer = document.getElementById("totalScorePlayer0");
        currentScore = document.getElementById("currentScore_0");
        player = document.getElementById("Player0")
        active = document.getElementById('active1')
    } else {
        activePlayer = 1;
        currentPlayer = document.getElementById("totalScorePlayer1");
        currentScore = document.getElementById("currentScore_1");
        player = document.getElementById("Player1")
        active = document.getElementById('active2')
    }
   highlightedPlayer()
    }


function clearScore() {
    let currentScore_1 = document.getElementById("currentScore_1")
    let currentScore_0 = document.getElementById("currentScore_0")
    let playerScore_0 = document.getElementById("totalScorePlayer0")
    let playerScore_1 = document.getElementById("totalScorePlayer1")
    const diceImages = document.querySelector(".diceImg")
    activePlayer=0
        currentScore_0.textContent=0
        currentScore_1.textContent=0
        playerScore_0.textContent=0
        playerScore_1.textContent=0
       
       diceImages.style.display=('none')
        diceRoll.style.display=('none')
                clearValue()
        
    }  

function holdScore() {
        decisionMaker()
        activePlayerNumber()
        
        currentScoreValue_0 =  parseInt(currentScore.textContent);
        currentPlayer.textContent= parseInt(currentPlayer.textContent) + currentScoreValue_0 ;
        currentScoreValue_0=0
        currentScore.textContent='0'
    
        if (parseInt(currentPlayer.textContent) >= 25) {
            
            Winner.textContent=`Vyhrává ${active.textContent}`;
            Winner.hidden = false;
            diceImg.style.display='none'
            endGame()
            setTimeout(() => {
                Winner.classList.add('showOpacity')
            }, 1050);
        } else {
            Winner.hidden = true; 
        }
        
    }
    
function endGame() {
            //----
            holdScoreBtn.disabled = true
            throwDiceBtn.disabled= true
            //-.-----
            throwDiceBtn.classList.add("opacityDown")
            holdScoreBtn.classList.add("opacityDown")
            holdScoreBtn.classList.remove('opacityUp')
            throwDiceBtn.classList.remove('opacityUp')
            //-------     
            
            //---eventListeners
            throwDiceBtn.addEventListener("animationend" ,() =>{
                throwDiceBtn.style.opacity="0"
            })
            holdScoreBtn.addEventListener("animationend" ,() =>{
                holdScoreBtn.style.opacity="0"
            })
            setTimeout(() =>{
                newGameBtn.addEventListener("animationend" , () => {
                 newGameBtn.style.transform='translateY(-150px)'
                 newGameBtn.classList.add('pulse')
    
               })
                newGameBtn.classList.add("upAndScale")
                newGameBtn.classList.remove('deScale')
                
            },500)
            //----eventListeners    
        
    }   
    
    
function newGame() {
                Winner.classList.remove('showOpacity')
                Winner.hidden = true; 
        clearScore()
            newGameBtn.classList.replace("upAndScale", 'deScale')
            newGameBtn.addEventListener("animationend" , () => {
                newGameBtn.classList.remove('pulse')
                newGameBtn.style.transform='translateY(0px)'
            })
            newGameBtn.classList.remove('pulse')
        
            setTimeout(() => {
                throwDiceBtn.classList.replace("opacityDown", 'opacityUp')
                holdScoreBtn.classList.replace('opacityDown', 'opacityUp')
        //////////
                holdScoreBtn.addEventListener("animationend" ,() =>{
                    holdScoreBtn.style.opacity="1"
                })
                throwDiceBtn.addEventListener("animationend" ,() =>{
                    throwDiceBtn.style.opacity="1"
                })
        //////////
        holdScoreBtn.disabled = false
        throwDiceBtn.disabled= false
        ////////
            },2000)
        
    }

function getDice() {
       decisionMaker()
        const imgs = [
            'images/1.jpg',
            'images/2.jpg',
            'images/3.jpg',
            'images/4.jpg',
            'images/5.jpg',
            'images/6.jpg'
        ]
        const Bankrot = document.getElementById('Bankrot');
        
        
        let randomIndex = Math.floor(Math.random() * imgs.length)
   
           if (randomIndex===0) {
               
               activePlayerNumber()
            clearValue()
            Bankrot.textContent = `Bankrot!`
           Bankrot.hidden = !Bankrot.hidden;
           } else {
            currentScoreValue_0 += randomIndex+1 
            Bankrot.hidden = "true";
           }
        currentScore.textContent =currentScoreValue_0.toString()
        return imgs[randomIndex]; 
    }



async function rollDice() {
////
let diceImg = document.querySelector(".diceImg")
diceImg.style.display=('none')
diceRoll.style.display=('block')


////
    const imgs = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg'
    ]
/////////
    for (let i = 0; i < 10; i++){
        
        
        let randomIndex = Math.floor(Math.random() * imgs.length)
        diceRoll.src=imgs[randomIndex]
        await sleep(150)
}
////
    
    throwDice()
    }


function throwDice() {
    
    let diceRoll = document.querySelector('.diceRoll')
    diceRoll.style.display=('none')
   
        diceImg.style.display=("block") 
        diceImg.src=getDice()
    }

///////Pomocné funkce
function highlightedPlayer() {
    document.getElementById("Player0").classList.remove("highlitedPlayer");
    document.getElementById("Player1").classList.remove("highlitedPlayer");
        player.classList.add("highlitedPlayer");  
        
    }     


function clearValue(){
    currentScoreValue_0 =0;
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

