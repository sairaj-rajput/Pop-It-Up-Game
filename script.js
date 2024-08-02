var timer = 60;
var score = 0;
var hitrn = 0;

function incresescore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}
function getnewhit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitvalue").textContent = hitrn;

}
function makebubble() {
    var lutter = '';

    for (var i = 0; i <= 132; i++) {
        var rn = Math.floor(Math.random() * 10)
        lutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bottom-panel").innerHTML = lutter;
}
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector(".bottom-panel").innerHTML = `<h1>GAME OVER</h1>` + `<br>` + `<h2>your score :</h2>` +  score ;
        }

    }, 1000);


}

document.querySelector(".bottom-panel")
    .addEventListener("click", function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            incresescore();
            makebubble();
            getnewhit();

        }
    });


makebubble();
runTimer();
getnewhit();