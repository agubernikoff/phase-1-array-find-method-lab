function superbowlWin(array) {
  if (array.find((game) => game.result === "W")) {
    let superBowl = array.find((game) => game.result === "W");
    return superBowl.year;
  }
}
