function openingCeremony(score, callback) {
    console.log("Let the games begin");
  
    setTimeout(() => {
      console.log("Opening ceremony finished.");
      callback(score);
    }, 1000);
  }
  
  function race100M(score, callback) {
    console.log("Race 100M started.");
    console.log("Previous score:", score);
  
    setTimeout(() => {
      let times = { red: getRandomInt(10, 15), blue: getRandomInt(10, 15), green: getRandomInt(10, 15), yellow: getRandomInt(10, 15) };
      console.log("Race finished.", times);
  
      let sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
      score[sortedColors[0]] += 50;
      score[sortedColors[1]] += 25;
  
      console.log("New score:", score);
      callback(score);
    }, 3000);
  }
  
  function longJump(score, callback) {
    console.log("Long jump started.");
    console.log("Previous score:", score);
  
    let randomColor = Object.keys(score)[getRandomInt(0, 3)];
    score[randomColor] += 150;
  
    console.log(randomColor, "won long jump.");
    console.log("New score:", score);
  
    setTimeout(() => {
      console.log("Long jump finished.");
      callback(score);
    }, 2000);
  }
  
  function highJump(score, callback) {
    console.log("High jump started.");
    console.log("Previous score:", score);
  
    let color = prompt("Which color secured the highest jump?");
    if (color && score[color]) {
      score[color] += 100;
      console.log(color, "won high jump.");
    } else {
      console.log("Event was cancelled.");
    }
  
    console.log("New score:", score);
    callback(score);
  }
  
  function awardCeremony(score) {
    console.log("Award ceremony started.");
  
    let sortedScores = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log("Final score:", score);
    console.log(sortedScores[0], "came first with", score[sortedScores[0]], "points.");
    console.log(sortedScores[1], "came second with", score[sortedScores[1]], "points.");
    console.log(sortedScores[2], "came third with", score[sortedScores[2]], "points.");
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main program
  let score = { red: 0, blue: 0, green: 0, yellow: 0 };
  
  openingCeremony(score, (score) => {
    race100M(score, (score) => {
      longJump(score, (score) => {
        highJump(score, (score) => {
          awardCeremony(score);
        });
      });
    });
  });
  