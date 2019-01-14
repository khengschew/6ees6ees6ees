class HoneyMakerBee extends Bee {
  constructor (job = 'make honey', age = 10, color) {
    super(job, age, color);
    this.honeyPot = 0;
  }

  makeHoney () {
    this.honeyPot++;
  }

  giveHoney () {
    this.honeyPot--;
  }
};
