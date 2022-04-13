const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
    constructor(name) {
        super(name);
        this.job = "Thief";
    }

    robbedBlind() {
        // TODO: answer here
        if (this.getGold() < 10) {
            return "Aku terlalu miskin";
        } else {
            this.setGold(this.getGold() - 10);
            return this.setStealChance(0.75);
        }
    }

    steal(player) {
        // TODO: answer here
        /*Mengecek apakah musuh mempunyai gold lebih dari 5 dan peluang untuk mencurinya 
          lebih besar daripada angka random dari 0-1*/
        if (player.randomizer() <= this.getStealChance() && player.getGold() >= 5) {
            let goldTemp1 = 0;
            let goldTemp2 = 0;
            goldTemp1 = this.getGold() + 5;
            goldTemp2 = player.getGold() - 5;
            this.setGold(goldTemp1);
            player.setGold(goldTemp2);
            if (player.job === "Trickster") {
                player.setHasBeenRobbed(false);
                return player.distractionPurse(this);
            } else {
                player.setHasBeenRobbed(true);
                return "Berhasil mencuri 5 gold";
            }
        } else if (player.getGold() < 5) {
            player.setHasBeenRobbed(false);
            return "Lawan terlalu miskin";
        } else {
            player.setHasBeenRobbed(false);
            return "Gagal mencuri, coba lain kali";
        }
    }
}

class Trickster extends Player {
    constructor(name) {
        super(name);
        this.distractionPurseChance = 0.25;
        this.job = "Trickster";
    }

    setDistractionPurseChance(chance) {
        // TODO: answer here
        this.distractionPurseChance = chance;
    }

    getDistractionPurseChance() {
        // TODO: answer here
        return this.distractionPurseChance;
    }

    distractionPurse(player) {
        const rng = this.randomizer();
        // TODO: answer here
        if (this.getDistractionPurseChance() >= rng) {
            return this.steal(player);
        } else {
            return "Gagal mencuri balik";
        }
    }

    steal(player) {
        // TODO: answer here
        /Mengecek apakah musuh mempunyai gold lebih dari 10/
        if (player.getGold() > 10) {
            this.setGold(this.getGold() + 10);
            player.setGold(player.getGold() - 10);
            return "Berhasil mencuri balik 10 gold";
        } else {
            this.setGold(this.getGold() + player.getGold());
            player.setGold(0);
            return "Berhasil mencuri balik semua uang lawan";
        }
    }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
    Thief,
    Trickster,
};