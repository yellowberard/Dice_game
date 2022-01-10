var playButton = document.querySelector(".play-btn")
playButton.addEventListener("click", () => { //For Dice 1

    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImg1 = "assests/dice" + randomNum1 + ".png";

    var image1 = document.querySelector(".p1-img").setAttribute("src", randomDiceImg1);

    //For Dice 2

    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImg2 = "assests/dice" + randomNum2 + ".png";

    var image2 = document.querySelector(".p2-img")
    setTimeout(image2, 10000);
    image2.setAttribute("src", randomDiceImg2);

    //Winner decision

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerText = "Player 1 Wins"

    } else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerText = "Player 2 Wins"
    } else if (randomNum1 === randomNum2) {
        document.querySelector("h1").innerText = "It's a Draw"
    }
})