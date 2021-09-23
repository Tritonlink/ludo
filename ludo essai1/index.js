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
  [greenStartTop, greenStartLeft],
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
  [blueStartTop, blueStartLeft],
  ["", ""],
  ["", ""],
  ["", ""],
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
let yApos = 0;
let yNPos = 1;

let gApos = 0;
let gNPos = 0;

let rApos = 0;
let rNPos = 0;

let bapos = 0;
let bNpos = 0;

let topYellow = yPosCases[yNPos][0];
let leftYellow = yPosCases[yNPos][1];
let topGreen = gPosCases[gNPos][0];
let leftGreen = gPosCases[gNPos][1];
let topRed = rPosCases[rNPos][0];
let leftRed = rPosCases[rNPos][1];
let topBlue = bPosCases[bNpos][0];
let leftBlue = bPosCases[bNpos][1];
let numberGoingPlaying = 0;
p2.addEventListener("click", () => {
  selectNumberPlaying(p2);
});
p3.addEventListener("click", () => {
  selectNumberPlaying(p3);
});
p4.addEventListener("click", () => {
  selectNumberPlaying(p4);
});

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
};
const start = (y) => {
  switch (y) {
    case yp1:
    case yp2:
    case yp3:
    case yp4:
      y.style.position = "absolute";
      y.style.top = topYellow;
      y.style.left = leftYellow;
      y.style.transform = "translate(-25%, -30%)";
      y.style.height = size;
      y.style.width = size;
      break;
    case gp1:
    case gp2:
    case gp3:
    case gp4:
      y.style.position = "absolute";
      y.style.top = topGreen;
      y.style.left = leftGreen;
      y.style.transform = "translate(-25%, -30%)";
      y.style.height = size;
      y.style.width = size;
      break;
    case rp1:
    case rp2:
    case rp3:
    case rp4:
      y.style.position = "absolute";
      y.style.top = topRed;
      y.style.left = leftRed;
      y.style.transform = "translate(-25%, -30%)";
      y.style.height = size;
      y.style.width = size;
      break;
    case bp1:
    case bp2:
    case bp3:
    case bp4:
      y.style.position = "absolute";
      y.style.top = topBlue;
      y.style.left = leftBlue;
      y.style.transform = "translate(-25%, -30%)";
      y.style.height = size;
      y.style.width = size;
      break;
  }
};
const des = () => {
  random.addEventListener("click", () => {
    d = Math.floor(Math.random() * 6 + 1);
    console.log(d);
    h4.textContent = d;
  });
};
des();
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
        setTimeout(() => {
          permitedTurn = 1;
          setTimeout(() => {
            permitedTurn = 2;
          }, 12000);
        }, 12000);
      }, 12000 * 2);
      break;
    case 3:
      setInterval(() => {
        setTimeout(() => {
          permitedTurn = 1;
          setTimeout(() => {
            permitedTurn = 2;
            setTimeout(() => {
              permitedTurn = 3;
            }, 12000);
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
      yp1.addEventListener("click", () => {
        if (permitedTurn === 1) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      yp2.addEventListener("click", () => {
        if (permitedTurn === 1) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      yp3.addEventListener("click", () => {
        if (permitedTurn === 1) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      yp4.addEventListener("click", () => {
        if (permitedTurn === 1) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      break;
    case 2:
      gp1.addEventListener("click", () => {
        if (permitedTurn === 2) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      gp2.addEventListener("click", () => {
        if (permitedTurn === 2) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      gp3.addEventListener("click", () => {
        if (permitedTurn === 2) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      gp4.addEventListener("click", () => {
        if (permitedTurn === 2) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      break;
    case 3:
      rp1.addEventListener("click", () => {
        if (permitedTurn === 3) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      rp2.addEventListener("click", () => {
        if (permitedTurn === 3) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      rp3.addEventListener("click", () => {
        if (permitedTurn === 3) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      rp4.addEventListener("click", () => {
        if (permitedTurn === 3) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      break;
    case 4:
      bp1.addEventListener("click", () => {
        if (permitedTurn === 4) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      bp2.addEventListener("click", () => {
        if (permitedTurn === 4) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      bp3.addEventListener("click", () => {
        if (permitedTurn === 4) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      bp4.addEventListener("click", () => {
        if (permitedTurn === 4) {
          console.log("c'est bien le tour des jaunes");
        }
      });
      break;

    default:
      console.log("la fonction permitedTurn a un problème");
      break;
  }
};
