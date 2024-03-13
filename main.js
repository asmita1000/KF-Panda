// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;

  // If Statement - Test the Input

  if (name === "Po" || name === "po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "Tigress" || name === "tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "Mantis" || name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "Monkey" || name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = "We should hang out!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "Viper" || name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "Shifu" || name === "shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      "Well done students-if you were trying to disappoint me.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "Crane" || name === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML =
      "Stop flapping your mouth and start flapping your wings.";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "Oogway" || name === "oogway") {
    document.getElementById("char-name").innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML = "Remember the path.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "Mr.Ping" || name === "mr.ping") {
    document.getElementById("char-name").innerHTML = "Mr.Ping";
    document.getElementById("char-quote").innerHTML =
      "To make something special, you just have to believe it's special.";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "Boss-wolf" || name === "boss-wolf") {
    document.getElementById("char-name").innerHTML = "Boss-wolf";
    document.getElementById("char-quote").innerHTML =
      "Guess nobody told you: If you mess with wolf, you get the fangs.";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "Croc" || name === "croc") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-quote").innerHTML = "Vengeance is served!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "Kai" || name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "You must be the Dragon Warrior.";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "Shen" || name === "shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "We sail to victory tonight.";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "Soothsayer" || name === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "Storming-ox" || name === "storming-ox") {
    document.getElementById("char-name").innerHTML = "Storming-ox";
    document.getElementById("char-quote").innerHTML = "You insolent fool!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "Tai-lung" || name === "tai-lung") {
    document.getElementById("char-name").innerHTML = "Tai-lung";
    document.getElementById("char-quote").innerHTML =
      "What I ever did, I did to make you proud!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-quote").innerHTML = "----------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
