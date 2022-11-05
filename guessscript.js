'use strict';
var score = 20, hscore = 0;
let randnum = Math.floor((Math.random() * 20)) + 1;
function check() {
    window.score = document.getElementById("Rscore").innerText;
    let num = Number(document.getElementById("gnum").value);
    console.log(randnum);
    if (randnum > num) {
        document.getElementById("msg").innerHTML = "Too Low!";
    }
    else {
        document.getElementById("msg").innerHTML = "too High!";
    }
    if (num == randnum) {
        document.getElementById("msg").innerHTML = "You Win 🎉";
        document.getElementById("tab").style.backgroundColor = "green";
        document.getElementById("sign").innerHTML = num;
        if (hscore <= score) {
            document.getElementById("hscore").innerHTML = score;
        }
        else {
            document.getElementById("hscore").innerHTML = hscore;
        }


    }
    else {
        score -= 1;
        document.getElementById("Rscore").innerHTML = score;
        document.getElementById("sign").innerHTML = "?";
        document.getElementById("tab").style.backgroundColor = "#990f02";
    }
    if (score == 0) {
        alert("You Lose!");
        nextry()
    }
}

function nextry() {

    hscore = score;
    randnum = Math.floor((Math.random() * 20)) + 1;
    //////
    console.log("\n");
    document.getElementById("msg").innerHTML = "Start guessing...";
    document.getElementById("sign").innerHTML = "?";
    document.getElementById("tab").style.backgroundColor = "#222";

    document.getElementById("Rscore").innerHTML = "20";
}

