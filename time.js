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

////////// TIME
const timeDisplay = document.querySelector('.timeValue');
var time = +timeDisplay.innerText;

//////////AUDIO
const correct = new Audio('correct.mp3');
const wrong = new Audio('wrong.mp3');

//////////STATS
var lvlSpeed = 420;
var point = 0;
var check = [];
var timehS;

//////////HIGHSCORE
if(!localStorage.getItem('timehS')) {
    timehS = 0;
    highScore.innerHTML = ` `;
}else {
    timehS = +localStorage.getItem('timehS');
     highScore.innerHTML = `PERSONAL BEST : ${timehS}`;
}
/* 
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
            gameOverHighScore.innerHTML = `PERSONAL BEST : ${localStorage.timehS}`;
        }
        

    } 
}
*/
const minusLife = () => {
    
    
    if(check.length === 1) {

        life.innerHTML = ` ${lifePic} ${lifePic}`
    }
    if(check.length === 2) {
        life.innerHTML = ` ${lifePic} `
    }
    if(check.length >= 3) {
        //////////GAME OVER SCREEN
        life.innerHTML = ` `;
        clearInterval(timer);
        clearInterval(lifeFunc);

        gameoverDisplay.classList.remove('hide');
        mainGameDisplay.classList.add('hide');
        gameoverScore.innerHTML = `SCORE : ${point}`;

        if(!localStorage.getItem('timehS')) {
            gameOverHighScore.innerHTML = `PERSONAL BEST : 0`;
        }else {
            gameOverHighScore.innerHTML = `PERSONAL BEST : ${localStorage.timehS}`;
        }
        
        
    }

} 

const redColor = () => {
    
    if(time <= 1) {
        //////////GAME OVER SCREEN
        life.innerHTML = ` `;
        clearInterval(timer);
        clearInterval(lifeFunc);

        gameoverDisplay.classList.remove('hide');
        mainGameDisplay.classList.add('hide');
        gameoverScore.innerHTML = `SCORE : ${point}`;

        if(!localStorage.getItem('timehS')) {
            gameOverHighScore.innerHTML = `PERSONAL BEST : 0`;
        }else {
            gameOverHighScore.innerHTML = `PERSONAL BEST : ${localStorage.timehS}`;
        }
        
    } else {
        time -= 1;
        timeDisplay.innerText = time;
    }
    if (time < 10){
        timeDisplay.classList.add('text-red');

    }


    var randomNumber = Math.floor(Math.random() * 3);

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

        if(point > timehS) {
            timehS = point;
            localStorage.setItem('timehS' , timehS);
            highScore.innerHTML = `PERSONAL BEST : ${localStorage.getItem('timehS')}`;
        }
    } else {
        check.push('no-click');
    }
});

////////// START TIMER

var lifeFunc  = setInterval(minusLife, 10);
var timer = setInterval( redColor, 1000);