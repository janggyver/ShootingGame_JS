alert('If you shoot the monkey three times, you win!');

var monkey_01;
var gameTimer;
var output;
var numHits = 0;

// the output variable of the init() is being used to display the value of y
function init(){
    monkey_01 = document.getElementById('monkey_01');
    output = document.getElementById('output');
    // FPS--> 50*20 = 1000
    getTimer = setInterval(gameloop, 250);
    placeMonkey();   
}
// Animation
function gameloop(){
    // convert String into integer
    var y = parseInt(monkey_01.style.top) - 10;// decreased y value
    if(y < -100) placeMonkey();
    else monkey_01.style.top = y + 'px';
}

function placeMonkey(){
    var x = Math.floor(Math.random()* 500);
    monkey_01.style.left = x + 'px';
    monkey_01.style.top = '350px';    
}
function hitMonkey(){
    // output.innerHTML = 'No animals are harmed playing of this game';
    
    numHits ++;
    // output.innerHTML = numHits;
    if(numHits==3) {
        alert('You win!');
    //clearInterval(gameTimer);
    init();
    }
    placeMonkey();
}