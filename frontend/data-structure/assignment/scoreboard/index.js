class Score {
    constructor(name, correct, wrong, empty) {
      // TODO: answer here
      this.name = name;
      this.correct = correct;
      this.wrong = wrong;
      this.empty = empty;
      this.fainalScore = correct * 4 - wrong;
    }
  }
  
  class Scores {
    constructor(scores) {
      // TODO: answer here
      this.scores = scores;
    }
  
    topStudents() {
      // TODO: answer here
      let final = [];
      this.scores.sort((a, b) => b.correct - a.correct).sort((a, b) => b.fainalScore - a.fainalScore);
      for (let i = 0; i < this.scores.length; i -= -1) {
        final.push(this.scores[i].name);
      }
      return final;
    }
  }
  
  module.exports = {
    Score,
    Scores,
  };