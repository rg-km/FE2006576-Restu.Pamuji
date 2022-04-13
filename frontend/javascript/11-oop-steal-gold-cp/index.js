class Player {
  constructor(name) {
    this.name = name;
    this.gold = 50;
    this.stealChance = 0.25;
    this.hasBeenRobbed = false;
  }

  getGold() {
    // TODO: answer here
    return this.gold;
  }

  setGold(gold) {
    // TODO: answer here
    this.gold = gold;
  }

  getStealChance() {
    // TODO: answer here
    return this.stealChance;
  }

  setStealChance(chance) {
    // TODO: answer here
    this.stealChance = chance;
  }

  getHasBeenRobbed() {
    return this.hasBeenRobbed;
  }

  setHasBeenRobbed(status) {
    this.hasBeenRobbed = status;
  }

  randomizer() {
    return +Math.random().toFixed(2);
  }

  steal(player) {
    // TODO: answer here
    let temp1 = 0;
    let temp2 = 0;
    if (player.randomizer() < this.getStealChance() && player.getGold() >= 5) {
      temp1 = this.getGold() + 5;
      temp2 = player.getGold() - 5;
      this.setGold(temp1);
      player.setGold(temp2);
      player.setHasBeenRobbed(true);
      return "Berhasil mencuri 5 gold";
    } else if (player.getGold() < 5) {
      player.setHasBeenRobbed(false);
      return "Lawan terlalu miskin";
    } else {
      player.setHasBeenRobbed(false);
      return "Gagal mencuri, coba lain kali";
    }
  }
}

const p1 = new Player("Fauzan");
const p2 = new Player("Tegar");

console.log("Jumlah gold Player 1: " + p1.getGold());
console.log("Jumlah gold Player 2: " + p2.getGold());
console.log(p1.steal(p2));
console.log("Total gold Player 1: " + p1.getGold());
console.log("Total gold Player 2: " + p2.getGold());

module.exports = Player;