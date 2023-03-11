function OpeningCeremony(callback) {
    console.log("Let the games begin");
    const score = { red: 0, yellow: 0, blue: 0, green: 0 };
    setTimeout(() => {
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    const raceTimes = {
      red: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
    };
  
    console.log("Race100M score: ", score);
  
    const sortedRaceTimes = Object.entries(raceTimes).sort((a, b) => a[1] - b[1]);
  
    score[sortedRaceTimes[0][0]] += 50;
    score[sortedRaceTimes[1][0]] += 25;
  
    console.log(`${sortedRaceTimes[0][0]} won the Race100M`);
  
    console.log("Race100M updated score: ", score);
  
    setTimeout(() => {
      LongJump(score, callback);
    }, 1000);
  }
  
  function LongJump(score, callback) {
    const winningColor = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
    console.log(`LongJump winner: ${winningColor}`);
    score[winningColor] += 150;
  
    console.log("LongJump updated score: ", score);
  
    setTimeout(() => {
      HighJump(score, callback);
    }, 2000);
  }
  
  function HighJump(score, callback) {
    const color = prompt("What colour secured the highest jump?");
  
    if (color) {
      const normalizedColor = color.toLowerCase();
      if (score[normalizedColor] !== undefined) {
        score[normalizedColor] += 100;
      } else {
        console.log("Event was cancelled");
      }
    } else {
      console.log("Event was cancelled");
    }
  
    console.log("HighJump updated score: ", score);
  
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    console.log("Final scores:");
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
  
    console.log(
      `${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`
    );
    console.log(
      `${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`
    );
    console.log(
      `${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`
    );
  }
  
  OpeningCeremony(() => {
    console.log("Sports day is over!");
  });
  