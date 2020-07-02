const circle = document.querySelector('.circle');
const circleText = document.querySelector('.circle-text');
const life = document.querySelector('.img-container');
const lifePic = '<img src="heart.png" alt="" srcset="" class="img-heart">';
const score = document.querySelector('.score-currentScore');
const gameoverScore = document.querySelector('.gameover-score');
const gameoverDisplay = document.querySelector('.gameover');
const mainGameDisplay = document.querySelector('.container');
const highScore = document.querySelector('.score-highScore');
const gameOverHighScore = document.querySelector('.gameover-highScore');
//////////AUDIO
const correct = new Audio('correct.mp3');
const wrong = new Audio('wrong.mp3');

//////////STATS
var lvlSpeed = 480;
var point = 0;
var check = [];
var hS;

//////////HIGHSCORE
if(!localStorage.getItem('hS')) {
    hS = 0;
    highScore.innerHTML = ` `;
}else {
    hS = +localStorage.getItem('hS');
   highScore.innerHTML = `PERSONAL BEST : ${hS}`;
}
//////////LIFE FUNCTION
const minusLife = () => {
    
    
    if(check.length >= 1) {
        life.innerHTML = ` `;
        clearInterval(timer);
        clearInterval(lifeFunc);
        

        gameoverDisplay.classList.remove('hide');
        mainGameDisplay.classList.add('hide');
        gameoverScore.innerHTML = `SCORE : ${point}`;

        if(!localStorage.getItem('hS')) {
            gameOverHighScore.innerHTML = `PERSONAL BEST : 0`;
        }else {
            gameOverHighScore.innerHTML = `PERSONAL BEST : ${localStorage.hS}`;
        }
        

    }
/*     if(check.length === 1) {

        life.innerHTML = ` ${lifePic} ${lifePic}`
    }
    if(check.length === 2) {
        life.innerHTML = ` ${lifePic} `
    }
    if(check.length >= 3) {
        life.innerHTML = ` `;
        clearInterval(timer);
        clearInterval(lifeFunc);

        gameoverDisplay.classList.remove('hide');
        mainGameDisplay.classList.add('hide');
        gameoverScore.innerHTML = `SCORE : ${point}`;

        if(!localStorage.getItem('hS')) {
            gameOverHighScore.innerHTML = `PERSONAL BEST : 0`;
        }else {
            gameOverHighScore.innerHTML = `PERSONAL BEST : ${localStorage.hS}`;
        }
        
        
    } */

}

////////// MAKES THE CIRCLE RED
const redColor = () => {


    var randomNumber = Math.floor(Math.random() * 3);

    //console.log(randomNumber ,point);
    if(randomNumber === 2) {
        circle.classList.add('tap');
        circleText.classList.remove('display-none');

       

        setTimeout(() => {
            circle.classList.remove('tap');
            circleText.classList.add('display-none');
        }, lvlSpeed);
    }
    
}

////////// CLICK FUNCTION
circle.addEventListener('click' , e=> {
    if (circle.classList.contains('tap')){

        correct.currentTime = 0;
        correct.play();


        point += 1;
        score.innerHTML = `SCORE : ${point}`;

        

        circle.classList.remove('tap');
        circleText.classList.add('display-none');

        if(point > hS) {
            hS = point;
            localStorage.setItem('hS' , hS);
            highScore.innerHTML = `PERSONAL BEST : ${localStorage.getItem('hS')}`;
        }
    } else {
        check.push('no-click');
    }
});

////////// START TIMER
var lifeFunc  = setInterval(minusLife, 10);
var timer = setInterval( redColor, 1000);