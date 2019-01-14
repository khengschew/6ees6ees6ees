class HoneyMakerBee extends Bee {
  constructor (job = 'make honey', age = 10) {
    super(job, age);
    this.honeyPot = 0;
  }

  makeHoney () {
    this.honeyPot++;
  }

  giveHoney () {
    this.honeyPot--;
  }
};
