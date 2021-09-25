const yp1 = document.getElementById("y1");
const yp2 = document.getElementById("y2");
const yp3 = document.getElementById("y3");
const yp4 = document.getElementById("y4");
const yp = document.getElementsByClassName("yp");

const gp1 = document.getElementById("g1");
const gp2 = document.getElementById("g2");
const gp3 = document.getElementById("g3");
const gp4 = document.getElementById("g4");
const gp = document.getElementsByClassName("gp");

const rp1 = document.getElementById("r1");
const rp2 = document.getElementById("r2");
const rp3 = document.getElementById("r3");
const rp4 = document.getElementById("r4");
const rp = document.getElementsByClassName("rp");

const bp1 = document.getElementById("b1");
const bp2 = document.getElementById("b2");
const bp3 = document.getElementById("b3");
const bp4 = document.getElementById("b4");
const bp = document.getElementsByClassName("bp");

const c = document.querySelector(".c");
const random = document.querySelector(".random");
const numberPlaying = document.querySelector(".numberPlaying");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const h4 = document.getElementById("h4");
const turnTimer = document.getElementById("turnTimer");
console.log();
let d;
let turns;
let permitedTurn;
const yellowStartTop = "109px";
const yellowStartleft = "37px";
const blueStartLeft = "170px";
const blueStartTop = "40px";
const greenStartTop = "245px";
const greenStartLeft = "110px";
const redStartTop = "175px";
const redStartLeft = "246px";
let yPosCases = [
  [0, 0],
  ["109px", "37px"],
  ["109px", "53px"],
  ["109px", "65px"],
  ["109px", "82px"],
  //blue
  ["77px", "113px"],
  ["63px", "113px"],
  ["46px", "113px"],
  ["30px", "113px"],
  ["15px", "113px"],
  ["10px", "113px"],
  ["10px", "148px"],
  ["10px", "178px"],
  ["25px", "178px"],
  ["40px", "178px"],
  ["56px", "178px"],
  ["73px", "178px"],
  ["87px", "178px"],
  //red
  ["114px", "200px"],
  ["114px", "217px"],
  ["114px", "234px"],
  ["114px", "251px"],
  ["114px", "268px"],
  ["114px", "283px"],
  ["143px", "283px"],
  ["175px", "283px"],
  ["175px", "252px"],
  ["175px", "246px"],
  ["175px", "230px"],
  ["175px", "213px"],
  ["175px", "201px"],
  //green
  ["200px", "174px"],
  ["215px", "174px"],
  ["230px", "174px"],
  ["245px", "174px"],
  ["260px", "174px"],
  ["276px", "174px"],
  ["276px", "143px"],
  ["276px", "110px"],
  ["260px", "110px"],
  ["240px", "110px"],
  ["220px", "110px"],
  ["200px", "110px"],
  ["180px", "110px"],
  //yellow
  ["175px", "83px"],
  ["175px", "75px"],
  ["175px", "60px"],
  ["175px", "40px"],
  ["175px", "30px"],
  ["175px", "16px"],
  ["140px", "16px"],
  ["140px", "30px"],
  ["140px", "45px"],
  ["140px", "60px"],
  ["140px", "75px"],
  ["140px", "83px"],
  ["110px", "110px"],
];
let gPosCases = [
  [0, 0],
  ["245px", "110px"],
  ["225px", "110px"],
  ["210px", "110px"],
  ["195px", "110px"],
  //yellow
  ["175px", "83px"],
  ["175px", "75px"],
  ["175px", "60px"],
  ["175px", "40px"],
  ["175px", "30px"],
  ["175px", "16px"],
  ["140px", "16px"],
  ["115px", "16px"],
  ["115px", "30px"],
  [yellowStartTop, yellowStartleft],
  ["109px", "53px"],
  ["109px", "65px"],
  ["109px", "82px"],
  //blue
  ["77px", "113px"],
  ["63px", "113px"],
  ["46px", "113px"],
  ["30px", "113px"],
  ["15px", "113px"],
  ["10px", "113px"],
  ["10px", "148px"],
  ["10px", "178px"],
  ["25px", "178px"],
  ["40px", "178px"],
  ["56px", "178px"],
  ["73px", "178px"],
  ["87px", "178px"],
  //red
  ["114px", "200px"],
  ["114px", "217px"],
  ["114px", "234px"],
  ["114px", "251px"],
  ["114px", "268px"],
  ["114px", "283px"],
  ["143px", "283px"],
  ["175px", "283px"],
  ["175px", "252px"],
  ["175px", "246px"],
  ["175px", "230px"],
  ["175px", "213px"],
  ["175px", "201px"],
  //green
  ["200px", "174px"],
  ["215px", "174px"],
  ["230px", "174px"],
  ["245px", "174px"],
  ["260px", "174px"],
  ["276px", "174px"],
  ["276px", "143px"],
  ["260px", "143px"],
  ["245px", "143px"],
  ["230px", "143px"],
  ["215px", "143px"],
  ["200px", "143px"],
];
let rPosCases = [
  [0, 0],
  [redStartTop, redStartLeft],
  ["175px", "230px"],
  ["175px", "213px"],
  ["175px", "201px"],
  //green
  ["200px", "174px"],
  ["215px", "174px"],
  ["230px", "174px"],
  ["245px", "174px"],
  ["260px", "174px"],
  ["276px", "174px"],
  ["276px", "143px"],
  ["276px", "110px"],
  ["260px", "110px"],
  ["240px", "110px"],
  ["220px", "110px"],
  ["200px", "110px"],
  ["180px", "110px"],
  //yellow
  ["175px", "83px"],
  ["175px", "75px"],
  ["175px", "60px"],
  ["175px", "40px"],
  ["175px", "30px"],
  ["175px", "16px"],
  ["140px", "16px"],
  ["115px", "16px"],
  ["115px", "30px"],
  [yellowStartTop, yellowStartleft],
  ["109px", "53px"],
  ["109px", "65px"],
  ["109px", "82px"],
  //blue
  ["77px", "113px"],
  ["63px", "113px"],
  ["46px", "113px"],
  ["30px", "113px"],
  ["15px", "113px"],
  ["10px", "113px"],
  ["10px", "148px"],
  ["10px", "178px"],
  ["25px", "178px"],
  ["40px", "178px"],
  ["56px", "178px"],
  ["73px", "178px"],
  ["87px", "178px"],
  //red
  ["114px", "200px"],
  ["114px", "217px"],
  ["114px", "234px"],
  ["114px", "251px"],
  ["114px", "268px"],
  ["114px", "283px"],
  ["143px", "283px"],
  ["143px", "268px"],
  ["143px", "251px"],
  ["143px", "234px"],
  ["143px", "217px"],
  ["143px", "200px"],
];
let bPosCases = [
  [0, 0],
  [blueStartTop, blueStartLeft],
  ["40px", "178px"],
  ["56px", "178px"],
  ["73px", "178px"],
  ["87px", "178px"],
  //red
  ["114px", "200px"],
  ["114px", "217px"],
  ["114px", "234px"],
  ["114px", "251px"],
  ["114px", "268px"],
  ["114px", "283px"],
  ["143px", "283px"],
  ["175px", "283px"],
  ["175px", "252px"],
  ["175px", "246px"],
  ["175px", "230px"],
  ["175px", "213px"],
  ["175px", "201px"],
  //green
  ["200px", "174px"],
  ["215px", "174px"],
  ["230px", "174px"],
  ["245px", "174px"],
  ["260px", "174px"],
  ["276px", "174px"],
  ["276px", "143px"],
  ["276px", "110px"],
  ["260px", "110px"],
  ["240px", "110px"],
  ["220px", "110px"],
  ["200px", "110px"],
  ["180px", "110px"],
  //yellow
  ["175px", "83px"],
  ["175px", "75px"],
  ["175px", "60px"],
  ["175px", "40px"],
  ["175px", "30px"],
  ["175px", "16px"],
  ["140px", "16px"],
  ["115px", "16px"],
  ["115px", "30px"],
  [yellowStartTop, yellowStartleft],
  ["109px", "53px"],
  ["109px", "65px"],
  ["109px", "82px"],
  //blue
  ["77px", "113px"],
  ["63px", "113px"],
  ["46px", "113px"],
  ["30px", "113px"],
  ["15px", "113px"],
  ["10px", "113px"],
  ["10px", "148px"],
  ["15px", "148px"],
  ["30px", "148px"],
  ["46px", "148px"],
  ["63px", "148px"],
  ["77px", "148px"],
];
let translatedPosCases = [
  [0, 0],
  ["175px", "83px"],
  ["175px", "75px"],
  ["109px", "37px"],
  ["109px", "53px"],
  ["109px", "65px"],
  ["109px", "82px"],
  //blue
  ["77px", "113px"],
  ["63px", "113px"],
  ["46px", "113px"],
  ["30px", "113px"],
  ["15px", "113px"],
  ["10px", "113px"],
  ["10px", "148px"],
  ["10px", "178px"],
  ["25px", "178px"],
  ["40px", "178px"],
  ["56px", "178px"],
  ["73px", "178px"],
  ["87px", "178px"],
  //red
  ["114px", "200px"],
  ["114px", "217px"],
  ["114px", "234px"],
  ["114px", "251px"],
  ["114px", "268px"],
  ["114px", "283px"],
  ["143px", "283px"],
  ["175px", "283px"],
  ["175px", "252px"],
  ["175px", "246px"],
  ["175px", "230px"],
  ["175px", "213px"],
  ["175px", "201px"],
  //green
  ["200px", "174px"],
  ["215px", "174px"],
  ["230px", "174px"],
  ["245px", "174px"],
  ["260px", "174px"],
  ["276px", "174px"],
  ["276px", "143px"],
  ["276px", "110px"],
  ["260px", "110px"],
  ["240px", "110px"],
  ["220px", "110px"],
  ["200px", "110px"],
  ["180px", "110px"],
  //yellow
  ["175px", "83px"],
  ["175px", "75px"],
  ["175px", "60px"],
  ["175px", "40px"],
  ["175px", "30px"],
  ["175px", "16px"],
  ["140px", "16px"],
];
let size = "10px";
let player1 = {
  equipe: "",
  playing: true,
};
let player2 = {
  equipe: "",
  playing: true,
};
let player3 = {
  equipe: "",
  playing: true,
};
let player4 = {
  equipe: "",
  playing: true,
};
let eY1 = 1;
let eY2 = 2;
let eY3 = 3;
let eY4 = 4;

let eG1 = 1;
let eG2 = 2;
let eG3 = 3;
let eG4 = 4;

let eR1 = 1;
let eR2 = 2;
let eR3 = 3;
let eR4 = 4;

let eB1 = 1;
let eB2 = 2;
let eB3 = 3;
let eB4 = 4;

let topYellow = yPosCases[1][0];
let leftYellow = yPosCases[1][1];
let topGreen = gPosCases[1][0];
let leftGreen = gPosCases[1][1];
let topRed = rPosCases[1][0];
let leftRed = rPosCases[1][1];
let topBlue = bPosCases[1][0];
let leftBlue = bPosCases[1][1];
let numberGoingPlaying = 0;

let tY1 = 0;
let tY2 = 0;
let tY3 = 0;
let tY4 = 0;

let tG1 = 0;
let tG2 = 0;
let tG3 = 0;
let tG4 = 0;

let tR1 = 0;
let tR2 = 0;
let tR3 = 0;
let tR4 = 0;

let tB1 = 0;
let tB2 = 0;
let tB3 = 0;
let tB4 = 0;
const verif = (p) => {
  switch (p) {
    case yp1:
      eY1 += d;
      topYellow = yPosCases[eY1][0];
      leftYellow = yPosCases[eY1][1];
      start(yp1);
      break;
    case yp2:
      eY2 += d;
      topYellow = yPosCases[eY2][0];
      leftYellow = yPosCases[eY2][1];
      start(yp2);
      break;
    case yp3:
      eY3 += d;
      topYellow = yPosCases[eY3][0];
      leftYellow = yPosCases[eY3][1];
      start(yp3);
      break;
    case yp4:
      eY4 += d;
      topYellow = yPosCases[eY4][0];
      leftYellow = yPosCases[eY4][1];
      start(yp4);
      break;

    case gp1:
      eG1 += d;
      topGreen = gPosCases[eG1][0];
      leftGreen = gPosCases[eG1][1];
      start(gp1);
      break;
    case gp2:
      eG2 += d;
      topGreen = gPosCases[eG2][0];
      leftGreen = gPosCases[eG2][1];
      start(gp2);
      break;
    case gp3:
      eG3 += d;
      topGreen = gPosCases[eG3][0];
      leftGreen = gPosCases[eG3][1];
      start(gp3);
      break;
    case gp4:
      eG4 += d;
      topGreen = gPosCases[eG4][0];
      leftGreen = gPosCases[eG4][1];
      start(gp4);
      break;

    case rp1:
      eR1 += d;
      topRed = rPosCases[eR1][0];
      leftRed = rPosCases[eR1][1];
      start(rp1);
      break;
    case rp2:
      eR2 += d;
      topRed = rPosCases[eR2][0];
      leftRed = rPosCases[eR2][1];
      start(rp2);
      break;
    case rp3:
      eR3 += d;
      topRed = rPosCases[eR3][0];
      leftRed = rPosCases[eR3][1];
      start(rp3);
      break;
    case rp4:
      eR4 += d;
      topRed = rPosCases[eR4][0];
      leftRed = rPosCases[eR4][1];
      start(rp4);
      break;

    case bp1:
      eB1 += d;
      topBlue = bPosCases[eB1][0];
      leftBlue = bPosCases[eB1][1];
      start(bp1);
      break;
    case bp2:
      eB2 += d;
      topBlue = bPosCases[eB2][0];
      leftYellow = bPosCases[eB2][1];
      start(bp2);
      break;
    case bp3:
      eB3 += d;
      topBlue = bPosCases[eB3][0];
      leftBlue = bPosCases[eB3][1];
      start(bp3);
      break;
    case bp4:
      eB4 += d;
      topBlue = bPosCases[eB4][0];
      leftBlue = bPosCases[eB4][1];
      start(bp4);
      break;
  }
};
function randomFunction(p) {
  d = Math.floor(Math.random() * 6 + 1);
  h4.textContent = d;
  switch (p) {
    case yp1:
      verif(yp1);
      break;

    case yp2:
      verif(yp2);
      break;

    case yp3:
      verif(yp3);
      break;

    case yp4:
      verif(yp4);
      break;

    case gp1:
      verif(gp1);
      break;

    case gp2:
      verif(gp2);
      break;

    case gp3:
      verif(gp3);
      break;

    case gp4:
      verif(gp4);
      break;

    case rp1:
      verif(rp1);
      break;

    case rp2:
      verif(rp2);
      break;

    case rp3:
      verif(rp3);
      break;

    case rp4:
      verif(rp4);
      break;

    case bp1:
      verif(bp1);
      break;

    case bp2:
      verif(bp2);
      break;

    case bp3:
      verif(bp3);
      break;

    case bp4:
      verif(bp4);
      break;
  }
}

const selectNumberPlaying = (pg) => {
  pg.addEventListener("click", () => {
    numberPlaying.style.display = "none";
  });
  switch (pg) {
    case p2:
      player3.playing = false;
      player4.playing = false;
      numberGoingPlaying = 2;
      break;
    case p3:
      player4.playing = false;
      numberGoingPlaying = 3;
      break;
    case p4:
      numberGoingPlaying = 4;
  }
  allStart();
};
console.log();
const allStart = () => {
  switch (numberGoingPlaying) {
    case 2:
      player1.equipe = "yellow";
      player2.equipe = "green";
      break;
    case 3:
      player1.equipe = "yellow";
      player2.equipe = "green";
      player3.equipe = "red";
      break;
    case 4:
      player1.equipe = "yellow";
      player2.equipe = "green";
      player3.equipe = "red";
      player4.equipe = "blue";
      break;
  }
  guiTurn();
  setInterval(() => {
    systemTurn();
  }, 12000 * numberGoingPlaying);
};
const start = (y) => {
  switch (y) {
    case yp1 || yp2 || yp3 || yp4:
      y.style.position = "absolute";
      y.style.top = topYellow;
      y.style.left = leftYellow;
      y.style.transform = "translate(-25%, -30%)";
      break;
    case gp1 || gp2 || gp3 || gp4:
      y.style.position = "absolute";
      y.style.top = topGreen;
      y.style.left = leftGreen;
      y.style.transform = "translate(-25%, -30%)";
      break;
    case bp1 || bp2 || bp3 || bp4:
      y.style.position = "absolute";
      y.style.top = topBlue;
      y.style.left = leftBlue;
      y.style.transform = "transform(-25%, -30%)";
      break;
    case rp1 || rp2 || rp3 || rp4:
      y.style.position = "absolute";
      y.style.top = topRed;
      y.style.left = leftRed;
      y.style.transform = "transform(-25%, -30%)";
      break;
  }
};
const guiTurn = () => {
  if (player4.playing == false && player3.playing == true) {
    console.log("3 joueurs");
    turns = 3;
  }
  if (player4.playing == true) {
    console.log("4joueurs joueront");
    turns = 4;
  }
  if (player3.playing == false) {
    console.log("2 joueurs joueront");
    turns = 2;
  }
  setInterval(() => {
    turnTimer.textContent = "10 secondes restantes avant le prochain tour";
    setTimeout(() => {
      turnTimer.textContent = "9 secondes";
      setTimeout(() => {
        turnTimer.textContent = "8 secondes";
        setTimeout(() => {
          turnTimer.textContent = "7 secondes";
          setTimeout(() => {
            turnTimer.textContent = "6 secondes";
            setTimeout(() => {
              turnTimer.textContent = "5 secondes";
              setTimeout(() => {
                turnTimer.textContent = "4 secondes";
                setTimeout(() => {
                  turnTimer.textContent = "3 secondes";
                  setTimeout(() => {
                    turnTimer.textContent = "2 secondes";
                    setTimeout(() => {
                      turnTimer.textContent = "1 seconde";
                      setTimeout(() => {
                        turnTimer.textContent = "prochain tour !!!";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 12000);
};
const systemTurn = () => {
  switch (numberGoingPlaying) {
    case 2:
      setInterval(() => {
        permitedTurn = 1;
        setTimeout(() => {
          permitedTurn = 2;
        }, 12000);
      }, 12000 * 2);
      break;
    case 3:
      setInterval(() => {
        permitedTurn = 1;
        setTimeout(() => {
          permitedTurn = 2;
          setTimeout(() => {
            permitedTurn = 3;
          }, 12000);
        }, 12000);
      }, 12000 * 3);
      break;
    case 4:
      setInterval(() => {
        permitedTurn = 1;
        setTimeout(() => {
          permitedTurn = 2;
          setTimeout(() => {
            permitedTurn = 3;
            setTimeout(() => {
              permitedTurn = 4;
            }, 12000);
          }, 12000);
        }, 12000);
      }, 12000 * 4);
      break;
  }
  switch (permitedTurn) {
    case 1:
      randomFunction(yp1);
      break;
  }
};
const translatePosition = (e) => {
  let translate;
  switch (e) {
    case eY1 || eY2 || eY3 || eY4:
      translate = 2;
      switch (e) {
        case eY1:
          tY1 = eY1 + translate;
          break;
        case eY2:
          tY2 = eY2 + translate;
          break;
        case eY3:
          tY3 = eY3 + translate;
          break;
        case eY4:
          tY4 = eY4 + translate;
          break;
      }
      break;

    case eG1 || eG2 || eG3 || eG4:
      if (e < 11) {
        translate = 41;
      } else {
        translate = 3;
      }
      switch (e) {
        case eG1:
          tG1 = eG1 + translate;
          break;
        case eG2:
          tG2 = eG2 + translate;
          break;
        case eG3:
          tG3 = eG3 + translate;
          break;
        case eG4:
          tG4 = eG4 + translate;
          break;
      }
      break;

    case eR1 || eR2 || eR3 || eR4:
      translate = 28;
      switch (e) {
        case eR1:
          tR1 = eR1 + translate;
          break;
        case eR2:
          tR2 = eR2 + translate;
          break;
        case eR3:
          tR3 = eR3 + translate;
          break;
        case eR4:
          tR4 = eR4 + translate;
          break;
      }
      break;

    case eB1 || eB2 || eB3 || eB4:
      translate = 15;
      switch (e) {
        case eB1:
          tB1 = eB1 + translate;
          break;
        case eB2:
          tB2 = eB2 + translate;
          break;
        case eB3:
          tB3 = eB3 + translate;
          break;
        case eB4:
          tB4 = eB4 + translate;
          break;
      }
      break;
  }
};

p2.addEventListener("click", () => {
  selectNumberPlaying(p2);
});
p3.addEventListener("click", () => {
  selectNumberPlaying(p3);
});
p4.addEventListener("click", () => {
  selectNumberPlaying(p4);
});
