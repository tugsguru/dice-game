//togloom duussan esehiig hadgalah tuluv
var isNewGame;

var activePlayer;
var activePlayer;
var scores;
var roundScore;

var diceDom = document.querySelector(".dice"); 

//toglloomiig ehluulne 

initGame();

function initGame(){

    isNewGame=true;

    activePlayer=0;
    scores=[0,0];
    roundScore=0;
    
    //<div class="player-score" id="score-0">43</div>
    //window.document.querySelector("#score-0").textContent="150";
    //document.querySelector("#score-0").textContent="180";
    //document.querySelector("#score-1").innerHTML="<em>Tugs dev</em>"
    
    //prepare to start
    document.getElementById("score-0").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";

    document.getElementById("name-0").textContent="Player 1";
    document.getElementById("name-1").textContent="Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
    
    diceDom.style.display="none";

}


// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click",function(){


    if (isNewGame===true) {

        var diceNumber=Math.floor(Math.random()*6)+1;
        //alert("Шооg буулаа :"+ diceNumber);
        diceDom.style.display="block";
        diceDom.src="dice-" + diceNumber + ".png";
    
        //buusan too ni 1-ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne
        if(diceNumber!==1){
            roundScore=roundScore+diceNumber;
            document.getElementById("current-"+activePlayer).textContent=roundScore;
    
        } else{
            //1 buusan tul eeljiig solino
    
            switchToNextPlayer();
            
            /*if(activePlayer===0){
                activePlayer=1;
            } else {
                activePlayer=0;
            }*/
    
        }

    } else{
        alert("Game finished");
    }


   
});

// hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click",function(){
    
    // ug toglogchiin tsugluulsan eeljiin onoog global onoon deer ni nemne 
    scores[activePlayer]=scores[activePlayer]+roundScore;
    // ug toglogchiin hojson esehiig shalgah

      //delgets deer onoog uurchilnu
      document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];

    if(scores[activePlayer]>=20){

        isNewGame=false;

        document.getElementById("name-"+activePlayer).textContent="WINNER!!!";
        document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner");
        document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
    } else {
    //toglogchiin eeljiig solino
    switchToNextPlayer();
    }
});

////toglogchiin eeljiig solino
function switchToNextPlayer(){
    roundScore=0;
    document.getElementById("current-"+activePlayer).textContent=0;
    activePlayer===0?(activePlayer=1):(activePlayer=0);

    //ulaan tsegiig shiljuuleh
    //toggle baival ustgana, baihgui bol nemne
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //shoog tur alga bolgoh
    diceDom.style.display="none";
}

// new game start
document.querySelector(".btn-new").addEventListener("click",initGame);





//console.log(diceNumber);