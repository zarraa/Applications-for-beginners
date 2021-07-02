document.getElementById("btn").onclick = function () {
  // this for player 1
  var rondomImages1 = Math.floor(Math.random() * 6) + 1;

  var rimageNumber1 = "dice" + rondomImages1 + ".png";

  var imagename1 = "images/" + rimageNumber1;

  var player1 = document.querySelectorAll("img")[0];

  player1.setAttribute("src", imagename1);

  // this for player 2

  var rondomImages2 = Math.floor(Math.random() * 6) + 1;

  var rimageNumber2 = "images/dice" + rondomImages2 + ".png";

  var player2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", rimageNumber2);

  if (rondomImages1 > rondomImages2) {
    document.querySelector("h1").innerHTML = "player 1 is win 🏆🎲🎉";
  } else if (rondomImages2 > rondomImages1) {
    document.querySelector("h1").innerHTML = "player 2 is win 🏆🎲🎉";
  } else {
    document.querySelector("h1").innerHTML = "The result is a tie 🧘‍♀️🤸‍♀️🧘‍♂️";
  }
};
