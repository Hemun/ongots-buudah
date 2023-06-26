let totalPlane = 0;
let destroyedPlaneComputer = 0;
let destroyedPlaneHuman = 0;
let gameStart = false;
let humanTurn = true;
let listHuman = Array(100).fill(0);
const boardOne = document.querySelector("#boardOne");
data = {
  1: {
    5: "Ш",
    7: "Ш",
    11: "С",
    15: "Ш",
    16: "Ш",
    17: "Ш",
    18: "С",
    20: "Ш",
    21: "Ш",
    22: "Ш",
    25: "Ш",
    27: "Ш",
    31: "Ш",
    40: "Ш",
    41: "Ш",
    42: "Ш",
    62: "Ш",
    64: "Ш",
    71: "С",
    72: "Ш",
    73: "Ш",
    74: "Ш",
    82: "Ш",
    84: "Ш",
  },
  2: {
    2: "Ш",
    4: "Ш",
    11: "С",
    12: "Ш",
    13: "Ш",
    14: "Ш",
    17: "Ш",
    19: "Ш",
    22: "Ш",
    24: "Ш",
    26: "С",
    27: "Ш",
    28: "Ш",
    29: "Ш",
    37: "Ш",
    39: "Ш",
    43: "С",
    52: "Ш",
    53: "Ш",
    54: "Ш",
    63: "Ш",
    72: "Ш",
    73: "Ш",
    74: "Ш",
  },
  3: {
    4: "Ш",
    6: "Ш",
    13: "С",
    14: "Ш",
    15: "Ш",
    16: "Ш",
    20: "Ш",
    22: "Ш",
    24: "Ш",
    26: "Ш",
    30: "Ш",
    31: "Ш",
    32: "Ш",
    33: "С",
    40: "Ш",
    42: "Ш",
    44: "Ш",
    46: "Ш",
    53: "С",
    54: "Ш",
    55: "Ш",
    56: "Ш",
    64: "Ш",
    66: "Ш",
  },
  4: {
    0: "Ш",
    1: "Ш",
    2: "Ш",
    11: "Ш",
    20: "Ш",
    21: "Ш",
    22: "Ш",
    31: "С",
    33: "Ш",
    35: "Ш",
    43: "Ш",
    44: "Ш",
    45: "Ш",
    46: "С",
    51: "С",
    53: "Ш",
    55: "Ш",
    60: "Ш",
    61: "Ш",
    62: "Ш",
    71: "Ш",
    80: "Ш",
    81: "Ш",
    82: "Ш",
  },
  5: {
    7: "С",
    16: "Ш",
    17: "Ш",
    18: "Ш",
    27: "Ш",
    34: "С",
    36: "Ш",
    37: "Ш",
    38: "Ш",
    43: "Ш",
    44: "Ш",
    45: "Ш",
    54: "Ш",
    61: "С",
    63: "Ш",
    64: "Ш",
    65: "Ш",
    70: "Ш",
    71: "Ш",
    72: "Ш",
    81: "Ш",
    90: "Ш",
    91: "Ш",
    92: "Ш",
  },
  6: {
    7: "Ш",
    9: "Ш",
    16: "С",
    17: "Ш",
    18: "Ш",
    19: "Ш",
    27: "Ш",
    29: "Ш",
    30: "Ш",
    32: "Ш",
    40: "Ш",
    41: "Ш",
    42: "Ш",
    43: "С",
    50: "Ш",
    52: "Ш",
    66: "Ш",
    67: "Ш",
    68: "Ш",
    77: "Ш",
    86: "Ш",
    87: "Ш",
    88: "Ш",
    97: "С",
  },
  7: {
    3: "Ш",
    5: "Ш",
    13: "Ш",
    14: "Ш",
    15: "Ш",
    16: "С",
    23: "Ш",
    25: "Ш",
    31: "Ш",
    33: "Ш",
    36: "Ш",
    38: "Ш",
    41: "Ш",
    42: "Ш",
    43: "Ш",
    44: "С",
    46: "Ш",
    47: "Ш",
    48: "Ш",
    49: "С",
    51: "Ш",
    53: "Ш",
    56: "Ш",
    58: "Ш",
  },
  8: {
    1: "Ш",
    3: "Ш",
    10: "С",
    11: "Ш",
    12: "Ш",
    13: "Ш",
    17: "Ш",
    19: "Ш",
    21: "Ш",
    23: "Ш",
    26: "С",
    27: "Ш",
    28: "Ш",
    29: "Ш",
    37: "Ш",
    39: "Ш",
    67: "Ш",
    69: "Ш",
    76: "С",
    77: "Ш",
    78: "Ш",
    79: "Ш",
    87: "Ш",
    89: "Ш",
  },
  9: {
    1: "С",
    10: "Ш",
    11: "Ш",
    12: "Ш",
    21: "Ш",
    30: "Ш",
    31: "Ш",
    32: "Ш",
    33: "С",
    41: "С",
    42: "Ш",
    43: "Ш",
    44: "Ш",
    50: "Ш",
    51: "Ш",
    52: "Ш",
    53: "Ш",
    61: "Ш",
    62: "Ш",
    63: "Ш",
    64: "Ш",
    70: "Ш",
    71: "Ш",
    72: "Ш",
  },
};
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

for (let i = 0; i < 100; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute("id", `h${i}`);
  box.setAttribute("event", "Х");
  box.setAttribute("totalClicked", "0");
  box.setAttribute("onclick", `canBuild(${i})`);
  // box.append(`${i}`);
  boardOne.append(box);
}

const boardTwo = document.querySelector("#boardTwo");
for (let i = 0; i < 100; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute("id", `c${i}`);
  box.setAttribute("event", "Х");
  box.setAttribute("totalClicked", "0");
  box.setAttribute("onclick", `computerAttack(${i})`);
  boardTwo.append(box);
}
const computerAttack = (coordinat) => {
  if (gameStart === true && humanTurn === true) {
    // computerluu dairah m
    const totalClicked = document
      .querySelector(`#c${coordinat}`)
      .getAttribute("totalClicked");
    if (totalClicked != 0) {
      alert(
        "Энэ газар аль хэдийн дарсан байна. Та дахин өөр газар дарна уу!!!"
      );
      return 0;
    } else {
      const event = document
        .querySelector(`#c${coordinat}`)
        .getAttribute("event");
      if (event == "Ш") {
        document.querySelector(`#c${coordinat}`).style.backgroundColor = "blue";
        document.querySelector(`#c${coordinat}`).append("Ш");
      }
      if (event == "С") {
        document.querySelector(`#c${coordinat}`).style.backgroundColor = "red";
        document.querySelector(`#c${coordinat}`).append("С");
        destroyedPlaneComputer += 1;
      }
      if (event == "Х") {
        document.querySelector(`#c${coordinat}`).append("Х");
      }
      humanTurn = false;
      document
        .querySelector(`#c${coordinat}`)
        .setAttribute("totalClicked", "1");
      humanAttack();
      if (destroyedPlaneComputer == 3) {
        winner("Human");
        return 0;
      }
    }
  } else {
    if (humanTurn === false) {
      alert("Таны ээлж биш байна.");
    } else
      alert(
        "Та өөрийн талбар дээр гурван онгоцыг байршуулж дууссаны дараа ЭХЛЭХ товчийг дарна уу."
      );
  }
};

const humanAttack = () => {
  let random = getRandomInt(100);
  if (listHuman[random] != 0) {
    humanAttack();
    return 0;
  } else {
    const event = document.querySelector(`#h${random}`).getAttribute("event");
    document.querySelector(`#h${random}`).append(event);
    if (event === "С") {
      destroyedPlaneHuman += 1;
    }

    if (destroyedPlaneHuman == 3) {
      winner("Computer");
      return 0;
    }
    humanTurn = true;
  }
  listHuman[random]++;
};

const winner = (user) => {
  const shadow = document.createElement("div");
  shadow.setAttribute("id", "shadow");

  const text = document.createElement("h1");
  text.append(user + " ялагчаар тодорлоо.");
  text.setAttribute("id", "winnerText");
  shadow.append(text);

  const footer = document.querySelector(".footer");
  footer.append(shadow);
  // alert(user + " ялагчаар тодорлоо.");
};

const createPlanes = () => {
  for (let i = 0; i < 100; i++) {
    let box = document.querySelector(`#c${i}`).setAttribute("event", "Х");
    document.querySelector(`#c${i}`).style.backgroundColor = "";
  }

  let random = getRandomInt(9) + 1;
  console.log("selected map is " + random);
  const events = data[random];
  for (let [key, event] of Object.entries(events)) {
    document.querySelector(`#c${key}`).setAttribute("event", event);
  }

  // for (let i = 0; i < 100; i++) {
  //   let event = document.querySelector(`#c${i}`).getAttribute("event");
  //   if (event === "Ш") {
  //     document.querySelector(`#c${i}`).style.backgroundColor = "blue";
  //   }
  //   if (event === "С") {
  //     document.querySelector(`#c${i}`).style.backgroundColor = "red";
  //   }
  // }
};

const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  if (gameStart == false) {
    if (totalPlane == 3) {
      gameStart = true;
      createPlanes();
      alert("Тоглолт эхэллээ.");
    } else {
      alert(
        "Онгоцны тоо бүрдээгүй байна. Та заавал гурван онгоц бүрдүүлж байж ЭХЛЭХ товчин дээр дарна уу."
      );
      return 0;
    }
  } else {
    alert("Тоглолт аль хэдийн эхэлсэн байна.");
    return 0;
  }
});

const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => {
  // end eldev ym bichne
});

const canBuild = (coordinat) => {
  let x = Math.floor(coordinat / 10);
  let y = coordinat % 10;
  console.log("дарсан байршил " + (coordinat + 11));
  let freeSpace =
    canBuildRight(coordinat) +
    canBuildBottom(coordinat) +
    canBuildLeft(coordinat) +
    canBuildTop(coordinat);
  let totalClicked = document
    .querySelector(`#h${coordinat}`)
    .getAttribute("totalClicked");
  console.log("freeSpace " + freeSpace);
  if (
    coordinat === 0 ||
    coordinat === 9 ||
    coordinat === 90 ||
    coordinat === 99 ||
    (freeSpace === 0 && totalClicked == 0)
  ) {
    alert("Энд онгоцны толгой байршуулах боломжггүй байна.");
  } else {
    buildPlane(coordinat);
  }
};

const buildPlane = (coordinat) => {
  let x = Math.floor(coordinat / 10);
  let y = coordinat % 10;
  const totalClicked = document
    .querySelector(`#h${coordinat}`)
    .getAttribute("totalClicked");
  console.log("нийт дарагдсан тоо " + totalClicked);
  console.log("Total plane " + totalPlane);
  if (totalPlane == 3 && totalClicked == 0) {
    alert(
      "Онгоцны тоо аль хэдийн бүрдсэн байна. Та өмнөх аль нэг онгоцоо устгаад шинээр байршуулах боломжтой."
    );
    return 0;
  }

  switch (totalClicked) {
    case "0":
      rightBuild(coordinat);
      break;
    case "1":
      bottomBuild(coordinat);
      break;
    case "2":
      leftBuild(coordinat);
      break;
    case "3":
      topBuild(coordinat);
      break;
    case "4":
      removePlane(coordinat);
      break;
    default:
      break;
  }
};
const removePlane = (coordinat) => {
  console.log("removePlane");
  document.querySelector(`#h${coordinat}`).setAttribute("totalClicked", "0");
  console.log(
    "totalClicked " +
      document.querySelector(`#h${coordinat}`).getAttribute("totalClicked")
  );
  if (
    document.querySelector(`#h${coordinat}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 10}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 20}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 30}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 9}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 11}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 29}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 31}`).getAttribute("style")
  ) {
    document.querySelector(`#h${coordinat}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 10}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 20}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 30}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 11}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 9}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 29}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 31}`).removeAttribute("style");

    document.querySelector(`#h${coordinat}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 10}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 20}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 30}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 31}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 29}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 11}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 9}`).setAttribute("event", "Х");
    console.log("remove lastPlane successful.");
  }
  totalPlane -= 1;
};

const topBuild = (coordinat) => {
  console.log("topBuild");
  if (
    document.querySelector(`#h${coordinat}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 1}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 2}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 3}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 7}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 9}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 11}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 13}`).getAttribute("style")
  ) {
    document.querySelector(`#h${coordinat}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 1}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 2}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 3}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 7}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 9}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 11}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 13}`).removeAttribute("style");

    document.querySelector(`#h${coordinat}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 1}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 2}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 3}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 7}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 9}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 11}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 13}`).setAttribute("event", "Х");
    console.log("remove leftBuild successful.");
  }

  if (canBuildTop(coordinat)) {
    document.querySelector(`#h${coordinat}`).setAttribute("event", "С");
    document.querySelector(`#h${coordinat - 10}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 20}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 30}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 11}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 9}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 31}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 29}`).setAttribute("event", "Ш");

    document.querySelector(`#h${coordinat}`).style.backgroundColor = "red";
    document.querySelector(`#h${coordinat - 10}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat - 20}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat - 30}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat - 11}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat - 9}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat - 29}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat - 31}`).style.backgroundColor =
      "blue";

    document.querySelector(`#h${coordinat}`).style.borderTop = "none";
    document.querySelector(`#h${coordinat - 10}`).style.border = "none";
    document.querySelector(`#h${coordinat - 20}`).style.border = "none";
    document.querySelector(`#h${coordinat - 30}`).style.borderLeft = "none";
    document.querySelector(`#h${coordinat - 30}`).style.borderBottom = "none";
    document.querySelector(`#h${coordinat - 30}`).style.borderRight = "none";
    document.querySelector(`#h${coordinat - 11}`).style.borderRight = "none";
    document.querySelector(`#h${coordinat - 9}`).style.borderLeft = "none";
    document.querySelector(`#h${coordinat - 29}`).style.borderLeft = "none";
    document.querySelector(`#h${coordinat - 31}`).style.borderRight = "none";
  } else {
    removePlane(coordinat);
    return 0;
  }
  document.querySelector(`#h${coordinat}`).setAttribute("totalClicked", "4");
};
const leftBuild = (coordinat) => {
  console.log("leftBuild");

  if (
    document.querySelector(`#h${coordinat}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 10}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 20}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 30}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 11}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 9}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 29}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 31}`).getAttribute("style")
  ) {
    document.querySelector(`#h${coordinat}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 10}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 20}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 30}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 11}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 9}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 29}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 31}`).removeAttribute("style");

    document.querySelector(`#h${coordinat}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 10}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 20}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 30}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 11}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 9}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 29}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 31}`).setAttribute("event", "Х");
    console.log("remove bottomBuild successful.");
  }

  if (canBuildLeft(coordinat)) {
    document.querySelector(`#h${coordinat}`).setAttribute("event", "С");
    document.querySelector(`#h${coordinat - 1}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 2}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 3}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 7}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 9}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 11}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 13}`).setAttribute("event", "Ш");

    document.querySelector(`#h${coordinat}`).style.backgroundColor = "red";
    document.querySelector(`#h${coordinat - 1}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat - 2}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat - 3}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat + 7}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat + 9}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat - 11}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat - 13}`).style.backgroundColor =
      "blue";

    document.querySelector(`#h${coordinat}`).style.borderLeft = "none";
    document.querySelector(`#h${coordinat - 1}`).style.border = "none";
    document.querySelector(`#h${coordinat - 2}`).style.border = "none";
    document.querySelector(`#h${coordinat - 3}`).style.borderTop = "none";
    document.querySelector(`#h${coordinat - 3}`).style.borderBottom = "none";
    document.querySelector(`#h${coordinat - 3}`).style.borderRight = "none";
    document.querySelector(`#h${coordinat - 11}`).style.borderBottom = "none";
    document.querySelector(`#h${coordinat - 13}`).style.borderBottom = "none";
    document.querySelector(`#h${coordinat + 9}`).style.borderTop = "none";
    document.querySelector(`#h${coordinat + 7}`).style.borderTop = "none";
  } else {
    topBuild(coordinat);
    return 0;
  }
  document.querySelector(`#h${coordinat}`).setAttribute("totalClicked", "3");
};

const bottomBuild = (coordinat) => {
  console.log("BottomBuild");

  if (
    document.querySelector(`#h${coordinat}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 1}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 2}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 3}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 11}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat + 13}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 9}`).getAttribute("style") &&
    document.querySelector(`#h${coordinat - 7}`).getAttribute("style")
  ) {
    document.querySelector(`#h${coordinat}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 1}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 2}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 3}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 11}`).removeAttribute("style");
    document.querySelector(`#h${coordinat + 13}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 9}`).removeAttribute("style");
    document.querySelector(`#h${coordinat - 7}`).removeAttribute("style");

    document.querySelector(`#h${coordinat}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 1}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 2}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 3}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 11}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat + 13}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 7}`).setAttribute("event", "Х");
    document.querySelector(`#h${coordinat - 9}`).setAttribute("event", "Х");
    console.log("remove rightBuild successful.");
  }

  if (canBuildBottom(coordinat)) {
    document.querySelector(`#h${coordinat}`).setAttribute("event", "С");
    document.querySelector(`#h${coordinat + 10}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 20}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 30}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 11}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 9}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 31}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 29}`).setAttribute("event", "Ш");

    document.querySelector(`#h${coordinat}`).style.backgroundColor = "red";
    document.querySelector(`#h${coordinat + 10}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat + 20}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat + 30}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat + 11}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat + 9}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat + 29}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat + 31}`).style.backgroundColor =
      "blue";

    document.querySelector(`#h${coordinat}`).style.borderBottom = "none";
    document.querySelector(`#h${coordinat + 10}`).style.border = "none";
    document.querySelector(`#h${coordinat + 20}`).style.border = "none";
    document.querySelector(`#h${coordinat + 30}`).style.borderTop = "none";
    document.querySelector(`#h${coordinat + 30}`).style.borderLeft = "none";
    document.querySelector(`#h${coordinat + 30}`).style.borderRight = "none";
    document.querySelector(`#h${coordinat + 11}`).style.borderLeft = "none";
    document.querySelector(`#h${coordinat + 9}`).style.borderRight = "none";
    document.querySelector(`#h${coordinat + 29}`).style.borderRight = "none";
    document.querySelector(`#h${coordinat + 31}`).style.borderLeft = "none";
  } else {
    leftBuild(coordinat);
    return 0;
  }
  document.querySelector(`#h${coordinat}`).setAttribute("totalClicked", "2");
};

const rightBuild = (coordinat) => {
  console.log("rightBuild");
  totalPlane += 1;
  if (canBuildRight(coordinat)) {
    document.querySelector(`#h${coordinat}`).setAttribute("event", "С");
    document.querySelector(`#h${coordinat + 1}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 2}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 3}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 11}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat + 13}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 7}`).setAttribute("event", "Ш");
    document.querySelector(`#h${coordinat - 9}`).setAttribute("event", "Ш");

    document.querySelector(`#h${coordinat}`).style.backgroundColor = "red";
    document.querySelector(`#h${coordinat + 1}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat + 2}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat + 3}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat + 11}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat + 13}`).style.backgroundColor =
      "blue";
    document.querySelector(`#h${coordinat - 9}`).style.backgroundColor = "blue";
    document.querySelector(`#h${coordinat - 7}`).style.backgroundColor = "blue";

    document.querySelector(`#h${coordinat}`).style.borderRight = "none";
    document.querySelector(`#h${coordinat + 1}`).style.border = "none";
    document.querySelector(`#h${coordinat + 2}`).style.border = "none";
    document.querySelector(`#h${coordinat + 3}`).style.borderLeft = "none";
    document.querySelector(`#h${coordinat + 3}`).style.borderTop = "none";
    document.querySelector(`#h${coordinat + 3}`).style.borderBottom = "none";
    document.querySelector(`#h${coordinat + 11}`).style.borderTop = "none";
    document.querySelector(`#h${coordinat + 13}`).style.borderTop = "none";
    document.querySelector(`#h${coordinat - 9}`).style.borderBottom = "none";
    document.querySelector(`#h${coordinat - 7}`).style.borderBottom = "none";
  } else {
    bottomBuild(coordinat);
    return 0;
  }

  document.querySelector(`#h${coordinat}`).setAttribute("totalClicked", "1");
};

const canBuildRight = (coordinat) => {
  let x = Math.floor(coordinat / 10);
  let y = coordinat % 10;
  if (x + 1 < 10 && y + 3 < 10 && x - 1 >= 0) {
    if (
      document.querySelector(`#h${coordinat}`).getAttribute("event") == "Х" &&
      document.querySelector(`#h${coordinat + 1}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 2}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 3}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 11}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 13}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 7}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 9}`).getAttribute("event") == "Х"
    ) {
      return 1;
    } else return 0;
  } else return 0;
};
const canBuildBottom = (coordinat) => {
  let x = Math.floor(coordinat / 10);
  let y = coordinat % 10;
  if (x + 3 < 10 && y + 1 < 10 && y - 1 >= 0) {
    if (
      document.querySelector(`#h${coordinat}`).getAttribute("event") == "Х" &&
      document.querySelector(`#h${coordinat + 10}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 20}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 30}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 11}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 9}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 31}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 29}`).getAttribute("event") == "Х"
    ) {
      return 1;
    } else return 0;
  } else return 0;
};
const canBuildLeft = (coordinat) => {
  let x = Math.floor(coordinat / 10);
  let y = coordinat % 10;
  if (x + 1 < 10 && y - 3 >= 0 && x - 1 >= 0) {
    if (
      document.querySelector(`#h${coordinat}`).getAttribute("event") == "Х" &&
      document.querySelector(`#h${coordinat - 1}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 2}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 3}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 11}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 9}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 13}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat + 7}`).getAttribute("event") == "Х"
    ) {
      return 1;
    } else return 0;
  } else return 0;
};
const canBuildTop = (coordinat) => {
  let x = Math.floor(coordinat / 10);
  let y = coordinat % 10;
  if (y + 1 < 10 && x - 3 >= 0 && y - 1 >= 0) {
    if (
      document.querySelector(`#h${coordinat}`).getAttribute("event") == "Х" &&
      document.querySelector(`#h${coordinat - 10}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 20}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 30}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 11}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 9}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 31}`).getAttribute("event") ==
        "Х" &&
      document.querySelector(`#h${coordinat - 29}`).getAttribute("event") == "Х"
    ) {
      return 1;
    } else return 0;
  } else return 0;
};
