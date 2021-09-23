const yp1 = document.getElementById("y1");
const yp2 = document.getElementById("y2");
const yp3 = document.getElementById("y3");
const yp4 = document.getElementById("y4");
const yCases1 = document.getElementsByClassName("yc1_");
const yCases2 = document.getElementsByClassName("ysc2_");
const yCases3 = document.getElementsByClassName("yc3_");
const yc11 = document.querySelector("#yc1_1");
const yc12 = document.querySelector("#yc1_2");
const yc13 = document.querySelector("#yc1_3");
const yc14 = document.querySelector("#yc1_4");
const yc15 = document.querySelector("#yc1_5");
const yc16 = document.querySelector("#yc1_6");
const ysc21 = document.querySelector("#ysc2_1");
const ysc22 = document.querySelector("#ysc2_2");
const ysc23 = document.querySelector("#ysc2_3");
const ysc24 = document.querySelector("#ysc2_4");
const ysc25 = document.querySelector("#ysc2_5");
const ysc26 = document.querySelector("#ysc2_6");
const yc31 = document.querySelector("#yc3_1");
const yc32 = document.querySelector("#yc3_2");
const yc33 = document.querySelector("#yc3_3");
const yc34 = document.querySelector("#yc3_4");
const yc35 = document.querySelector("#yc3_5");
const yc36 = document.querySelector("#yc3_6");

const gp1 = document.getElementById("g1");
const gp2 = document.getElementById("g2");
const gp3 = document.getElementById("g3");
const gp4 = document.getElementById("g4");
const gCases1 = document.getElementsByClassName("gc1_");
const gCases2 = document.getElementsByClassName("gsc2_");
const gCases3 = document.getElementsByClassName("gc3_");
const gc11 = document.querySelector("#gc1_1");
const gc12 = document.querySelector("#gc1_2");
const gc13 = document.querySelector("#gc1_3");
const gc14 = document.querySelector("#gc1_4");
const gc15 = document.querySelector("#gc1_5");
const gc16 = document.querySelector("#gc1_6");
const gsc21 = document.querySelector("#gsc2_1");
const gsc22 = document.querySelector("#gsc2_2");
const gsc23 = document.querySelector("#gsc2_3");
const gsc24 = document.querySelector("#gsc2_4");
const gsc25 = document.querySelector("#gsc2_5");
const gsc26 = document.querySelector("#gsc2_6");
const gc31 = document.querySelector("#gc3_1");
const gc32 = document.querySelector("#gc3_2");
const gc33 = document.querySelector("#gc3_3");
const gc34 = document.querySelector("#gc3_4");
const gc35 = document.querySelector("#gc3_5");
const gc36 = document.querySelector("#gc3_6");

const rp1 = document.getElementById("r1");
const rp2 = document.getElementById("r2");
const rp3 = document.getElementById("r3");
const rp4 = document.getElementById("r4");
const rCases1 = document.getElementsByClassName("rc1_");
const rCases2 = document.getElementsByClassName("rsc2_");
const rCases3 = document.getElementsByClassName("rc3_");
const rc11 = document.querySelector("#rc1_1");
const rc12 = document.querySelector("#rc1_2");
const rc13 = document.querySelector("#rc1_3");
const rc14 = document.querySelector("#rc1_4");
const rc15 = document.querySelector("#rc1_5");
const rc16 = document.querySelector("#rc1_6");
const rsc21 = document.querySelector("#rsc2_1");
const rsc22 = document.querySelector("#rsc2_2");
const rsc23 = document.querySelector("#rsc2_3");
const rsc24 = document.querySelector("#rsc2_4");
const rsc25 = document.querySelector("#rsc2_5");
const rsc26 = document.querySelector("#rsc2_6");
const rc31 = document.querySelector("#rc3_1");
const rc32 = document.querySelector("#rc3_2");
const rc33 = document.querySelector("#rc3_3");
const rc34 = document.querySelector("#rc3_4");
const rc35 = document.querySelector("#rc3_5");
const rc36 = document.querySelector("#rc3_6");

const bp1 = document.getElementById("b1");
const bp2 = document.getElementById("b2");
const bp3 = document.getElementById("b3");
const bp4 = document.getElementById("b4");
const bCases1 = document.getElementsByClassName("bc1_");
const bCases2 = document.getElementsByClassName("bsc2_");
const bCases3 = document.getElementsByClassName("bc3_");
const bc11 = document.querySelector("#bc1_1");
const bc12 = document.querySelector("#bc1_2");
const bc13 = document.querySelector("#bc1_3");
const bc14 = document.querySelector("#bc1_4");
const bc15 = document.querySelector("#bc1_5");
const bc16 = document.querySelector("#bc1_6");
const bsc21 = document.querySelector("#bsc2_1");
const bsc22 = document.querySelector("#bsc2_2");
const bsc23 = document.querySelector("#bsc2_3");
const bsc24 = document.querySelector("#bsc2_4");
const bsc25 = document.querySelector("#bsc2_5");
const bsc26 = document.querySelector("#bsc2_6");
const bc31 = document.querySelector("#bc3_1");
const bc32 = document.querySelector("#bc3_2");
const bc33 = document.querySelector("#bc3_3");
const bc34 = document.querySelector("#bc3_4");
const bc35 = document.querySelector("#bc3_5");
const bc36 = document.querySelector("#bc3_6");

const c = document.querySelector(".c");
const random = document.querySelector(".random");
const numberPlaying = document.querySelector(".numberPlaying");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const h4 = document.getElementById("h4");
const turnTimer = document.getElementById("turnTimer");
console.log(numberPlaying);
let d;
let turns;
let permitedTurn;
const yellowStartTop = "109px";
const yellowStartleft = "37px";
const blueStartLeft = "170px";
const blueStartTop = "40px";
const greenStartTop = "250px";
const greenStartLeft = "110px";
const redStartTop = "177px";
const redStartLeft = "246px";
let yPosCases = [
  [yellowStartTop, yellowStartleft],
  ["109px", "53px"],
  ["109px", "65px"],
  ["109px", "82px"],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let gPosCases = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let rPosCases = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let bPosCases = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
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
      y.style.top = yellowStartTop;
      y.style.left = yellowStartleft;
      y.style.transform = "translate(-25%, -30%)";
      y.style.height = size;
      y.style.width = size;
      break;
    case gp1:
    case gp2:
    case gp3:
    case gp4:
      y.style.position = "absolute";
      y.style.top = greenStartTop;
      y.style.left = greenStartLeft;
      y.style.transform = "translate(-25%, -30%)";
      y.style.height = size;
      y.style.width = size;
      break;
    case rp1:
    case rp2:
    case rp3:
    case rp4:
      y.style.position = "absolute";
      y.style.top = redStartTop;
      y.style.left = redStartLeft;
      y.style.transform = "translate(-25%, -30%)";
      y.style.height = size;
      y.style.width = size;
      break;
    case bp1:
    case bp2:
    case bp3:
    case bp4:
      y.style.position = "absolute";
      y.style.top = blueStartTop;
      y.style.left = blueStartLeft;
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
