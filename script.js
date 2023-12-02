var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

// Blue car move

blueCar.addEventListener('animationiteration', function () {
    var random = ((Math.floor(Math.random() * 3) * 130))
    blueCar.style.left = (random) + "px"
    counter++
});

// Red car move

window.addEventListener("keydown", function (e) {

    // Move Right Side

    if (e.keyCode == "39") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if (raceCarLeft < 260) {
            raceCar.style.left = (raceCarLeft + 130) + "px"
            jumpsound.play();
        }
    }

    // Move Left Side

    if (e.keyCode == "37") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 130) + "px"
            jumpsound.play();
        }
    }

});

    // Game Over 

    setInterval( function Gameover () {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"))
        var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))

        if ((raceCarLeft == blueCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
            blueCar.style.animation = "block"
            raceCar.style.display = "none"
            blueCar.style.display = "none"

            setTimeout(()=>{

                game.style.display = "none"
                result.style.display = "block"
        
            },1000);
        
                score.innerHTML = `score : ${counter}`;
                counter = 0;
            }
        

    },10);

